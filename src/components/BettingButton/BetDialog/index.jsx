import React, { useContext, Fragment } from 'react'
import styled from 'styled-components'
import { BetStuContext } from '../../BetInput'
import { useTranslation } from 'react-i18next';

import { LOGO } from '../../../themes';
import { useAccount } from 'wagmi'
import CircleLoading from '../../Loading/Circle';

import { Littleball, BallRed, BallSpan, BetNumOut, BetNumText, BetNumber } from '../../../BaseStyle/BallNumSty'
import { DIALOG, ConText } from '../../../BaseStyle/DialogSty';
import { HorStart, HorScatter } from '../../../BaseStyle/LayoutSty';
import MediaQuery from 'react-responsive'

const BaseImg = styled.img`
    height: 24px;
    width: 24px;
    padding-left:10px;
`

const BaseText = styled(ConText)`
    color:${props => props.theme.text1};
`

const BettingHintsOut = styled(HorStart)`
    height: 8rem;
    width:40rem;
    margin-bottom:0.5rem;
    border: 1px solid ${props => props.theme.button1};
    border-radius:12px;
    ${({ theme }) => theme.MEDIA.upToMinimalSmall`
      width: 25rem;
      height: 6rem;
    `}  
`

const BettingHintsIn = styled(HorScatter)`
    padding-right:1rem;
    height: 8rem;
    width:40rem;
    ${({ theme }) => theme.MEDIA.upToMinimalSmall`
      width: 25rem;
      height: 6rem;
    `} 
`

const BettingSuccessIn = styled(HorStart)`
    height: 6rem;
    width:40rem;
`

const LoadingAnimated = styled.div`
    padding-left:10px;
`

const ErrorText = styled(BaseText)`
    color:${props => props.theme.text3};;
`

export default function BetDialog() {
    const { connector, isConnected } = useAccount()
    
    const { buyLottery, drawLottery, isConfirm, setBet, setIsBetting, isBetting, buyLoading, buySuccess, buyError, coupleValue, inputValue } = useContext(BetStuContext)
    const { t } = useTranslation();


    
    function uninstallBet() {
        setIsBetting(false); 
        setBet(false);
        
        document.body.style.overflow = "scroll";
    }

    
    function handleClickBet(event) {
        if (event.target === event.currentTarget) {
            
            uninstallBet();
        }
    }

    function clickBetting() {
        setIsBetting(true);
        
        if (isConfirm) {
            buyLottery()
        }

    }

    return (
        <DIALOG.DialogContainer onClick={handleClickBet}>
            <DIALOG.DialogOut>
                <DIALOG.DialogOutBox>
                    {/* 确认投注弹窗组件标题 */}
                    <DIALOG.DialogTitle>
                        <DIALOG.DialogTitleText>
                            {t('Betting Confirmation')}
                        </DIALOG.DialogTitleText>
                        {/* 为关闭按钮绑定关闭方法 */}
                        <DIALOG.DeleteButton onClick={uninstallBet}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sc-hrWEMg jaeDeS">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </DIALOG.DeleteButton>
                    </DIALOG.DialogTitle>
                    {/* 确认投注弹窗组件内容 */}
                    <DIALOG.DialogUpDownOut>
                        {/* 确认文字及按钮 */}
                        <DIALOG.DialogConUpOut>
                            <DIALOG.DialogConUpIn>
                                {/* 图片及文字 */}
                                <BaseImg src={LOGO.Hints} />
                                <BaseText>{t('Betting Tips')}</BaseText>
                            </DIALOG.DialogConUpIn>
                            {/* 确认按钮 */}
                            <DIALOG.ConButStyOut >
                                <DIALOG.ConButStyButton onClick={clickBetting}>
                                    <DIALOG.ConButStyFront>{t('Betting')}</DIALOG.ConButStyFront>
                                </DIALOG.ConButStyButton>
                            </DIALOG.ConButStyOut>
                        </DIALOG.DialogConUpOut>
                        {/* 确认提示结果 */}
                        <BettingHintsOut>
                            {
                                (isConnected && !!connector !== false) ? (
                                    isConfirm ? (
                                        isBetting ? (
                                            buyLoading ? (
                                                
                                                <Fragment>
                                                    <LoadingAnimated><CircleLoading /></LoadingAnimated>
                                                    <BaseText>{t("Betting Loading")}</BaseText>
                                                </Fragment>
                                            ) : buyError ? (
                                                <Fragment>
                                                    <BaseImg src={LOGO.ErrorLogo} />
                                                    <ErrorText>{t('Error Retry')}</ErrorText>
                                                </Fragment>
                                            ) : buySuccess ? (
                                                <BettingHintsIn>
                                                    <BettingSuccessIn >
                                                        <BaseImg src={LOGO.Success} />
                                                        <BaseText>{t('Betting Success')}</BaseText>
                                                    </BettingSuccessIn>
                                                    {/* 重选按钮 */}
                                                    <DIALOG.ConButStyOut>
                                                        <DIALOG.ConButStyButton onClick={uninstallBet} style={{ "width": "8rem" }}>
                                                            <DIALOG.ConButStyFront>{t('Reselection')}</DIALOG.ConButStyFront>
                                                        </DIALOG.ConButStyButton>
                                                    </DIALOG.ConButStyOut>
                                                </BettingHintsIn>
                                            ) : (
                                                null
                                            )
                                        ) : (
                                            <BettingHintsIn>
                                                <BaseText>{t('Betting Numbers')}</BaseText>
                                                {/* 先转化为数组，再使用map函数渲染 */}
                                                <Littleball style={{ "paddingTop": "3px" }}>
                                                    {
                                                        (inputValue.split("").map(num => parseInt(num))).map((number, index) => (
                                                            <BallRed key={index}><BallSpan>{number}</BallSpan></BallRed>
                                                        ))
                                                    }
                                                </Littleball >
                                                <BaseText>{t('Number Bets')}</BaseText>
                                                <BetNumOut style={{ "paddingTop": "3px" }}>
                                                    {/* 大于450渲染 */}
                                                    <MediaQuery query="(min-device-width: 450px)">
                                                        <BetNumText>{t('BetNum1')}</BetNumText>
                                                    </MediaQuery>
                                                    <BetNumber>{coupleValue}</BetNumber>
                                                    <BetNumText>{t('BetNum2')}</BetNumText>
                                                </BetNumOut>
                                            </BettingHintsIn>
                                        )
                                    ) : (
                                        <Fragment>
                                            <BaseImg src={LOGO.ErrorLogo} />
                                            <ErrorText>{t('Error Confirm')}</ErrorText>
                                        </Fragment>
                                    )
                                ) : (
                                    <Fragment>
                                        <BaseImg src={LOGO.ErrorLogo} />
                                        <ErrorText>{t('Error Connect')}</ErrorText>
                                    </Fragment>
                                )
                            }
                        </BettingHintsOut>
                    </DIALOG.DialogUpDownOut>
                </DIALOG.DialogOutBox>
            </DIALOG.DialogOut>
        </DIALOG.DialogContainer >
    )
}