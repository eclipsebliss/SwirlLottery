import React, { useContext } from 'react'
import styled from 'styled-components'

import NumberScrolling from '../NumberScrolling'
import { PrizeContext } from '../OpeningInfoShow'
import { TIMES } from '../../constants'
import { MainContext } from '../Main';
import { useTranslation } from 'react-i18next'
import { VerCenter, HorStart, HorScatter, HorCenter } from '../../BaseStyle/LayoutSty'

const PrizeShakOut = styled(VerCenter)`
    max-width: 55rem;
    max-height: 30rem;
    ${({ theme }) => theme.MEDIA.upToMedium`width: 50rem;`}   
    ${({ theme }) => theme.MEDIA.upToSmall`width: 44rem;`} 
    ${({ theme }) => theme.MEDIA.upToMinimalSmall`width:32rem;`} 
`
const PrizeShakTextOut = styled(HorStart)`
    width: 54rem;
    padding: 0 1rem 0 1rem;
    ${({ theme }) => theme.MEDIA.upToMedium`width: 50rem;`}   
    ${({ theme }) => theme.MEDIA.upToSmall`width: 44rem;`} 
    ${({ theme }) => theme.MEDIA.upToMinimalSmall`width:32rem;`} 
    height: 4rem;
    font-size: 2.5em;
    font-weight: 600;
    letter-spacing:1px; 
    color:${props => props.theme.text2};
    opacity:0.85;
`
const PrizeShakeAnimatedOut = styled(HorScatter)`
    width: 52rem;
    ${({ theme }) => theme.MEDIA.upToMedium`width: 48rem;`}   
    ${({ theme }) => theme.MEDIA.upToSmall`width: 42rem;`}
    ${({ theme }) => theme.MEDIA.upToMinimalSmall`width:30rem;`} 
    padding:1rem 2rem 1rem 2rem;
`
const PrizeShakeAnimated = styled(HorCenter)`
    border: 1px solid ${props => props.theme.button7};
    border-radius: 15px;
    box-shadow: inset 0px 0px 14px -3px ${props => props.theme.button7};
    width: 12rem;
    height: 17rem;
    ${({ theme }) => theme.MEDIA.upToSmall`width: 10rem;height: 14rem;`} 
    ${({ theme }) => theme.MEDIA.upToMinimalSmall`width: 8rem;height: 10rem`}
    position: relative; 
`
const Digit = styled.span`
    font-size: 20em;
    font-family: "smiley sans";
    ${({ theme }) => theme.MEDIA.upToSmall`font-size: 15em;`}
    ${({ theme }) => theme.MEDIA.upToMinimalSmall`font-size: 12em;`} 
    color: ${props => props.theme.text1}; 
`

export default function PrizeShak() {
    const { lastWinNumbers, connector, isConnected } = useContext(MainContext)
    const { remainingTime } = useContext(PrizeContext)
    const { t } = useTranslation();

    if (!!connector !== false) {
        if (isConnected) {
            if (remainingTime >= 300000) {
                return (
                    <PrizeShakOut >
                        <PrizeShakTextOut>
                            <span>{t('Last Win Number')}</span>
                        </PrizeShakTextOut>
                        <PrizeShakeAnimatedOut>
                            {
                                lastWinNumbers ? (
                                    lastWinNumbers.map((winnumber, index) => (
                                        <PrizeShakeAnimated key={index}>
                                            <Digit>{winnumber.toString()}</Digit>
                                        </PrizeShakeAnimated>))
                                ) : (
                                    TIMES.map((time, index) => (
                                        <PrizeShakeAnimated key={index}>
                                            <NumberScrolling />
                                        </PrizeShakeAnimated>))
                                )

                            }
                        </PrizeShakeAnimatedOut>
                    </PrizeShakOut>
                )
            } else if (remainingTime >= 120000 && remainingTime < 300000) {
                return (
                    <PrizeShakOut >
                        <PrizeShakTextOut>
                            <span>{t('About Open Prize')}</span>
                        </PrizeShakTextOut>
                        <PrizeShakeAnimatedOut>
                            {
                                TIMES.map((time, index) => (
                                    <PrizeShakeAnimated key={index}>
                                        <NumberScrolling />
                                    </PrizeShakeAnimated>))
                            }
                        </PrizeShakeAnimatedOut>
                    </PrizeShakOut>
                )
            } else if (remainingTime >= 60000 && remainingTime < 120000) {
                return (
                    <PrizeShakOut >
                        <PrizeShakTextOut>
                            <span>{t('Opening Prize')}</span>
                        </PrizeShakTextOut>
                        <PrizeShakeAnimatedOut>
                            {
                                TIMES.map((time, index) => (
                                    <PrizeShakeAnimated key={index}>
                                        <NumberScrolling />
                                    </PrizeShakeAnimated>))
                            }
                        </PrizeShakeAnimatedOut>
                    </PrizeShakOut>
                )
            } else {
                return (
                    <PrizeShakOut >
                        <PrizeShakTextOut>
                            <span>{t('Completed Opening Prize')}</span>
                        </PrizeShakTextOut>
                        <PrizeShakeAnimatedOut>
                            {
                                lastWinNumbers ? (
                                    lastWinNumbers.map((winnumber, index) => (
                                        <PrizeShakeAnimated key={index}>
                                            <Digit>{winnumber.toString()}</Digit>
                                        </PrizeShakeAnimated>))
                                ) : (
                                    TIMES.map((time, index) => (
                                        <PrizeShakeAnimated key={index}>
                                            <NumberScrolling />
                                        </PrizeShakeAnimated>))
                                )

                            }
                        </PrizeShakeAnimatedOut>
                    </PrizeShakOut>
                )
            }
        } else {
            return (
                <PrizeShakOut >
                    <PrizeShakTextOut>
                        <span>{t('Wallet Connection Tips')}</span>
                    </PrizeShakTextOut>
                    <PrizeShakeAnimatedOut>
                        {
                            TIMES.map((time, index) => (
                                <PrizeShakeAnimated key={index}>
                                    <NumberScrolling />
                                </PrizeShakeAnimated>))
                        }
                    </PrizeShakeAnimatedOut>
                </PrizeShakOut>
            )
        }
    } else {
        return (
            <PrizeShakOut >
                <PrizeShakTextOut>
                    <span>{t('Wallet Network Connection Tips')}.</span>
                </PrizeShakTextOut>
                <PrizeShakeAnimatedOut>
                    {
                        TIMES.map((time, index) => (
                            <PrizeShakeAnimated key={index}>
                                <NumberScrolling />
                            </PrizeShakeAnimated>))
                    }
                </PrizeShakeAnimatedOut>
            </PrizeShakOut>
        )
    }
}
