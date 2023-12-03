import React, { Fragment } from 'react'
import styled from 'styled-components'
import { useContractReads, useNetwork } from 'wagmi'
import { THREEDADDRESS } from '../../constants'
import ThreeDjson from '../../build/ThreeD.json'
import { utils } from 'ethers'
import CountTimeDown from '../CountTimeDown'
import { useTranslation } from 'react-i18next';
import { HorScatter, HorStart } from '../../BaseStyle/LayoutSty'
import MediaQuery from 'react-responsive'

const PrizePoolOut = styled(HorScatter)`
    width: 54rem;
    max-height: 2.5rem;
    padding:1rem;
    ${({ theme }) => theme.MEDIA.upToMedium`width: 50rem;`}   
    ${({ theme }) => theme.MEDIA.upToSmall`width: 44rem;`}
    ${({ theme }) => theme.MEDIA.upToMinimalSmall`width: 32rem;`} 
`
const CountTimeOut = styled(HorStart)`
    width: 32rem;
    max-height: 5rem;
    padding:1rem 1rem 0 1rem;
`

const RoundOut = styled(HorStart)`
    max-width: 15rem;
    max-height: 2.5rem;
    gap:10px;
`
const PublicText = styled.span`
    font-size: 2.5em; 
    font-weight: 600;
    color:${props => props.theme.text2};
    opacity:0.85; 
`
const PublicNumber = styled.span`
    font-size: 3em;
    font-weight: 550;
    letter-spacing:1.5px; 
    color:${props => props.theme.text1};
    padding: 0 0 1px 0;
    opacity:0.85; 
`
const PrizedownOut = styled(HorScatter)`
    max-width: 20rem;
    max-height: 2.5rem;
`

export default function PrizePool() {
    const { chain } = useNetwork()
    const { t } = useTranslation();
    
    const THREEDCONTRACT = {
        address: THREEDADDRESS[chain?.id],
        abi: ThreeDjson.abi,
    }
    
    const { data: threeDdata, isSuccess: threeSucess } = useContractReads({
        contracts: [
            {
                ...THREEDCONTRACT,
                functionName: 'round',
            },
            {
                ...THREEDCONTRACT,
                functionName: 'prizePool',
            },
        ],
        watch: true,
    })

    function getResult() {
        if (threeSucess) {
            let round = threeDdata[0].result
            let prizePool = threeDdata[1].result
            return { round, prizePool }
        } else {
            return { round: null, prizePool: null }
        }
    }

    const { round, prizePool } = getResult()

    return (
        <Fragment>
            {/* 小于450不渲染 */}
            <MediaQuery query="(max-device-width: 450px)">
                <CountTimeOut>
                    <CountTimeDown />
                </CountTimeOut>
            </MediaQuery>
            <PrizePoolOut>
                <RoundOut>
                    <PublicText>{t('Draw No.1')}</PublicText>
                    <PublicNumber>{round?.toString()}</PublicNumber>
                    <PublicText>{t('Draw No.2')}</PublicText>
                </RoundOut>
                {/* 小于450不渲染 */}
                <MediaQuery query="(min-device-width: 450px)">
                    <CountTimeDown />
                </MediaQuery>
                <PrizedownOut>
                    <PublicText>{t('PrizePool')}</PublicText>
                    <PublicNumber>{prizePool ? utils.formatEther(prizePool.toString()).substring(0, 5) : ''}</PublicNumber>
                    <PublicText style={{ "paddingLeft": "4px" }}>ETH</PublicText>
                </PrizedownOut>
            </PrizePoolOut>
        </Fragment>
    )
}