import React from 'react'
import { useAccount, useNetwork, useBalance } from 'wagmi'
import ThreeDotsUse from '../Loading/ThreeDotsUse';
import { useTranslation } from 'react-i18next';
import { BaseButton } from '../../BaseStyle';
import styled, { css } from 'styled-components';
import { Fragment } from 'react';
import { HorScatter } from '../../BaseStyle/LayoutSty';


const HeadAccountContainer = styled.div`
    ${({ theme }) => theme.MEDIA.upToSmall`padding-left:9rem;padding-right:1rem;`} 
    ${({ theme }) => theme.MEDIA.upToMinimalSmall`padding-left:0;padding-right:0.5rem;`}
   
`
const HeadAccountOut = styled(BaseButton)`
    display :flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width:21rem;
    height: 4rem;
    padding-left:10px;
    padding:2px 15px 2px 15px;
    ${({ theme }) => theme.MEDIA.upToMinimalSmall`
      padding:2px 7px 2px 7px;
    `}
    background: linear-gradient(${props => props.theme.button5},${props => props.theme.button6});
    :hover {
            background: linear-gradient(${props => props.theme.button6},${props => props.theme.button5});
     }
    opacity:0.95;
`
const ContentAccountout = styled(HorScatter)`
    width:54rem;
    ${({ theme }) => theme.MEDIA.upToMedium`width: 50rem;`}   
    ${({ theme }) => theme.MEDIA.upToSmall`width: 44rem;`} 
    ${({ theme }) => theme.MEDIA.upToMinimalSmall`
      width:32rem;
    `}
    height: 4rem;
    padding:0 1rem 1rem 1rem ;
`
const HeadAddBalSty = styled.div`
    display :flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    padding-left:10px;
    font-size: 2em;
    height: 3.5rem;
`


export function HeadAccount(props) {

    const { address, connector, isConnected } = useAccount()
    const { data: balance, isError, isLoading } = useBalance({
        address,
    })

    return (
        <HeadAccountContainer onClick={props.openAccAdd}>
            {
                (isConnected && !!connector !== false) ? (
                    <HeadAccountOut>
                        <ChainName head={props?.head} />
                        <HeadAddBalSty>
                            <Address address={address} head={props?.head} />
                            <Balance balance={balance} isError={isError} isLoading={isLoading} head={props?.head} />
                        </HeadAddBalSty>
                    </HeadAccountOut>
                ) : undefined
            }
        </HeadAccountContainer>
    )
}


export function ContentAccount() {

    const { address, connector, isConnected } = useAccount()
    const { data: balance, isError, isLoading } = useBalance({
        address,
        watch: true,
    })

    return (
        <Fragment >
            {
                (isConnected && !!connector !== false) ? (
                    <ContentAccountout >
                        <ChainName />
                        <Address address={address} />
                        <Balance balance={balance} isError={isError} isLoading={isLoading} />
                    </ContentAccountout>
                ) : undefined
            }
        </Fragment>
    )
}



const ChainNamSty = styled.div`
   
    ${props => props?.head
        ? css`
        color: #fa9d6b;
        font-size: 2.5em;
        font-weight:550;
     `
        : css`
        display:flex;
        flex-direction: column;
        height:4rem;
        align-items:center;
        justify-content: center;
        font-size: 2.5em;
        font-weight: 600;
        color: ${props => props.theme.text2};
        opacity: 0.85;
        padding-top:0.5rem;
     `}
`

export function ChainName(props) {
    const { chain, chains } = useNetwork()
    const { t } = useTranslation()

    function GetChainName(props) {
        if (!!chain && !!chains) {
            const chainID = chain?.id
            const chainIdMap = chains.map((ch) => ch.id)
            if (chainIdMap.includes(chainID)) {
                return (
                    <ChainNamSty head={props.head}>
                        {/* 获取第一个空格前的那一部分 */}
                        <span >{chain.name.split(' ')[0]}</span>
                    </ChainNamSty>
                )
            } else {
                return (
                    <ChainNamSty head={props.head}>
                        <span>{t('UnSupport')}</span>
                    </ChainNamSty>
                )
            }
        } else {
            return (
                <ChainNamSty head={props.head}>
                    <span>{t('No Network')}</span>
                </ChainNamSty>
            )
        }
    }

    return (
        <GetChainName head={props.head}/>
    )
}




const AddOut = styled.div`
       
    ${props => props?.head
        ? css`
        
     `
        : css`
        display: flex;
        align-items:flex-end;
     `}
`
const AddAccSpan = styled.span`
       
    ${props => props?.head
        ? css`
        color: ${props => props.theme.text2};
        font-size: 1em;
        font-weight:550;
     `
        : css`
        font-size: 2.5em;
        font-weight: 600;
        color: ${props => props.theme.text2};
        opacity: 0.85;
     `}
`
const AddAddSpan = styled.span`
       
    ${props => props?.head
        ? css`
        color: ${props => props.theme.text1};
        font-size: 1em;
        font-weight:550;
     `
        : css`
        font-size: 1.5em;
        color: ${props => props.theme.text1};
        opacity: 0.85;
        font-weight: 600;
     `}
`


export function Address(props) {
    const { t } = useTranslation();

    
    function parseAddress(_addr) {
        const addrlen = _addr.length;
        const newAddress = _addr.substring(0, 4) + "..." + _addr.substring(addrlen - 4)
        return newAddress
    }

    return (
        <AddOut >
            <AddAccSpan head={props.head}>{t('Account')}</AddAccSpan>
            <AddAddSpan head={props.head}>{parseAddress(props.address)}</AddAddSpan>
        </AddOut>
    )
}



const BalErrSpan = styled.span`
       
    ${props => props?.head
        ? css`
        color: ${props => props.theme.text6};;
        font-size: 1em;
        font-weight:550;
     `
        : css`
        color: ${props => props.theme.text3};;
     `}
`

const BalLoading = styled.div`
   
    ${props => props?.head
        ? css`
          width: auto;
          height: 1.1em;
          
          font-size: 0.4em;
          padding-bottom : 3px;
     `
        : css`
        
     `}
`

const BalBalOut = styled.div`
       
    ${props => props?.head
        ? css`
        display: flex;
        align-items: center;
     `
        : css`
        display: flex;
        align-items:flex-end;
     `}
`

const BalBalSpan = styled.span`
       
    ${props => props?.head
        ? css`
        color: ${props => props.theme.text2};
        font-size: 1em;
        font-weight:550;
     `
        : css`
        font-size: 2.5em;
        font-weight: 600;
        color: ${props => props.theme.text2};
        opacity: 0.85;
     `}
`

const BalFroSpan = styled.span`
       
    ${props => props?.head
        ? css`
        color: ${props => props.theme.text1};
        font-size: 1em;
        font-weight:550;
        padding-top:2px;
     `
        : css`
        font-size: 1.5em;
        color: ${props => props.theme.text1};
        opacity: 0.85;
        font-weight: 600;
     `}
`


export function Balance(props) {
    const { t } = useTranslation();
    return (
        <Fragment>
            {props.isLoading ? (
                <BalLoading head={props.head}>
                    <ThreeDotsUse />
                </BalLoading>
            ) : props.isError ? (
                <BalErrSpan head={props.head}>{t('Balance Error')}</BalErrSpan>
            ) : (
                <BalBalOut>
                    <BalBalSpan head={props.head}>{t('Balance')}</BalBalSpan>
                    <BalFroSpan head={props.head}>{(props.balance?.formatted).substring(0, 5)}{` ${props.balance?.symbol}`}</BalFroSpan>
                </BalBalOut>)
            }
        </Fragment>
    )
}
