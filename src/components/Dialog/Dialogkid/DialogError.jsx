import React, {useContext } from 'react'
import {StatusContext } from '..'
import {useTranslation } from 'react-i18next';
import styled from "styled-components";

import {LOGO } from '../../../themes';
import {DIALOG } from '../../../BaseStyle/DialogSty';


const ErrorConUpOut = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 8rem;
    width:40rem;
    border: 1px solid ${props => props.theme.button1};
    border-radius:12px;
    ${({theme }) => theme.MEDIA.upToMinimalSmall`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      width: 25rem;
      height: 8rem;
    `}
` 

export default function DialogErrorKid() {

    
    const {setError, setisError, getConnectorInfo, pendingConnector, isError } = useContext(StatusContext)

    
    function uninstallError() {
        setisError(false) 
        setError(false);
        
        document.body.style.overflow = "scroll";
    }

    
    function handleClickError(event) {
        
        
        if (event.target === event.currentTarget) {
            
            uninstallError();
        }
    }
    const {t } = useTranslation();
    return (
        
        <DIALOG.DialogContainer onClick={handleClickError} >
            <DIALOG.DialogOut>
                <DIALOG.DialogOutBox>
                    {/* 错误弹窗组件标题 */}
                    <DIALOG.DialogTitle>
                        <DIALOG.DialogTitleText>
                            {t('Errortitle')}
                        </DIALOG.DialogTitleText>
                        {/* 为关闭按钮绑定关闭方法 */}
                        <DIALOG.DeleteButton onClick={uninstallError}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sc-hrWEMg jaeDeS">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </DIALOG.DeleteButton>
                    </DIALOG.DialogTitle>
                    {/* 错误弹窗组件内容和介绍 */}
                    <DIALOG.DialogUpDownOut>
                        {/* 内容框 */}
                        <ErrorConUpOut>
                            <DIALOG.DialogConUpIn>
                                <DIALOG.ConImg src={LOGO.ErrorLogo} />
                                <DIALOG.ConText>{t('Errorcontent')}{` ${isError}`.split(":")[0]}</DIALOG.ConText>
                            </DIALOG.DialogConUpIn>
                            <DIALOG.ConButStyOut>
                                <DIALOG.ConButStyButton onClick={uninstallError}>
                                    <DIALOG.ConButStyFront>{t('Retrybutton')}</DIALOG.ConButStyFront>
                                </DIALOG.ConButStyButton>
                            </DIALOG.ConButStyOut>
                        </ErrorConUpOut>
                        {/* 介绍框 */}
                        <DIALOG.IntroOut>
                            {/* 介绍框文字 */}
                            <DIALOG.IntroText>
                                <DIALOG.IntroTextTitle>{pendingConnector?.connector && getConnectorInfo(pendingConnector.connector.name, 'name')}</DIALOG.IntroTextTitle>
                                <DIALOG.IntroTextContent>{pendingConnector?.connector && t(getConnectorInfo(pendingConnector.connector.name, 'description'))}</DIALOG.IntroTextContent>
                            </DIALOG.IntroText>
                            {/* 介绍框图片 */}
                            <DIALOG.IntroImgOut>
                                <DIALOG.IntroImg src={pendingConnector?.connector && getConnectorInfo(pendingConnector.connector.name, 'icon')} />
                            </DIALOG.IntroImgOut>
                        </DIALOG.IntroOut >
                    </DIALOG.DialogUpDownOut>
                </DIALOG.DialogOutBox>
            </DIALOG.DialogOut>
        </DIALOG.DialogContainer>

    )
}