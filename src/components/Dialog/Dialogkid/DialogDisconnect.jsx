import React, {useContext } from 'react'
import {StatusContext } from '..'
import {useTranslation } from 'react-i18next';

import {LOGO } from '../../../themes';
import {useDisconnect } from 'wagmi'

import {DIALOG } from '../../../BaseStyle/DialogSty'

export default function DialogDisconnectKid() {

    const {disconnect } = useDisconnect()
    const {t } = useTranslation();
    
    const {setDisconnect, activeConnector, getConnectorInfo } = useContext(StatusContext)
    const connectorName = activeConnector.name

    
    function uninstallDisconnect() {
        setDisconnect(false);
        
        document.body.style.overflow = "scroll";
    }

    
    function handleClickDisconnect(event) {
        
        
        if (event.target === event.currentTarget) {
            
            uninstallDisconnect();
        }
    }

    
    function closeDialogDisconnect() {
        disconnect();
        uninstallDisconnect()
        
    }

    return (
        
        <DIALOG.DialogContainer onClick={handleClickDisconnect} >
            <DIALOG.DialogOut>
                <DIALOG.DialogOutBox>
                    {/* 错误弹窗组件标题 */}
                    <DIALOG.DialogTitle>
                        <DIALOG.DialogTitleText>
                            {t('Warning')}
                        </DIALOG.DialogTitleText>
                        {/* 为关闭按钮绑定关闭方法 */}
                        <DIALOG.DeleteButton onClick={uninstallDisconnect}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sc-hrWEMg jaeDeS">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </DIALOG.DeleteButton>
                    </DIALOG.DialogTitle>
                    {/* 错误弹窗组件内容和介绍 */}
                    <DIALOG.DialogUpDownOut >
                        {/* 内容框 */}
                        <DIALOG.DialogConUpOut>
                            {/* 图片和文字 */}
                            <DIALOG.DialogConUpIn>
                                <DIALOG.ConImg src={LOGO.ErrorLogo} />
                                <DIALOG.ConText>{activeConnector?.name && t('Warning Content', {connectorName })}</DIALOG.ConText>
                            </DIALOG.DialogConUpIn>
                            {/* 重试按钮 */}
                            <DIALOG.ConButStyOut>
                                <DIALOG.ConButStyButton onClick={closeDialogDisconnect}>
                                    <DIALOG.ConButStyFront>{t('Confirm')}</DIALOG.ConButStyFront>
                                </DIALOG.ConButStyButton>
                            </DIALOG.ConButStyOut>
                        </DIALOG.DialogConUpOut>
                        {/* 介绍框 */}
                        <DIALOG.IntroOut>
                            {/* 介绍框文字 */}
                            <DIALOG.IntroText>
                                <DIALOG.IntroTextTitle>{activeConnector?.name && getConnectorInfo(activeConnector?.name, 'name')}</DIALOG.IntroTextTitle>
                                <DIALOG.IntroTextContent>{activeConnector?.name && t(getConnectorInfo(activeConnector?.name, 'description'))}</DIALOG.IntroTextContent>
                            </DIALOG.IntroText>
                            {/* 介绍框图片 */}
                            <DIALOG.IntroImgOut>
                                <DIALOG.IntroImg src={activeConnector?.name && getConnectorInfo(activeConnector?.name, 'icon')} />
                            </DIALOG.IntroImgOut>
                        </DIALOG.IntroOut >
                    </DIALOG.DialogUpDownOut>
                </DIALOG.DialogOutBox>
            </DIALOG.DialogOut>
        </DIALOG.DialogContainer>

    )
}