import React, { useContext } from 'react'
import { StatusContext } from '..'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';

import CircleLoading  from '../../Loading/Circle';
import { DIALOG } from '../../../BaseStyle/DialogSty';


const LoadingOut = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top:0.5rem;
    height: 6rem;
    width:40rem;
    border: 1px solid ${props => props.theme.button1};
    border-radius:12px;
    ${({theme }) => theme.MEDIA.upToMinimalSmall`
      width: 25rem;
    `}
`

const LoadingText = styled.span`
    padding-left:16px;
    color:${props => props.theme.text1};
    font-size:2.5em;
    font-weight:545;
    ${({theme }) => theme.MEDIA.upToMinimalSmall`
      font-size: 2.2em;
    `}
`

const LoadingBox = styled.div`
    padding-left:10px;
    ${({theme }) => theme.MEDIA.upToMinimalSmall`
      padding-left:5px;
    `}
`


export default function DialogLoadingKid() {

    
    const { setLoading, pendingConnector, getConnectorInfo } = useContext(StatusContext)

    
    function uninstallLoading() {
        setLoading(false);
        
        document.body.style.overflow = "scroll";
    }

    
    function handleClickLoading(event) {
        
        
        if (event.target === event.currentTarget) {
            
            uninstallLoading();
        }
    }

    const { t } = useTranslation();
    return (
        
        <DIALOG.DialogContainer onClick={handleClickLoading} >
            <DIALOG.DialogOut>
                <DIALOG.DialogOutBox>
                    {/* 钱包选择弹窗组件标题 */}
                    <DIALOG.DialogTitle>
                        <DIALOG.DialogTitleText onClick={uninstallLoading}>
                            {t("Return")}
                        </DIALOG.DialogTitleText>
                        {/* 为关闭按钮绑定关闭方法 */}
                        <DIALOG.DeleteButton onClick={uninstallLoading}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sc-hrWEMg jaeDeS">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </DIALOG.DeleteButton>
                    </DIALOG.DialogTitle>
                    {/* 钱包选择弹窗组件内容 */}
                    <DIALOG.DialogUpDownOut >
                        {/* 加载动画框 */}
                        <LoadingOut>
                            <LoadingBox><CircleLoading/></LoadingBox>
                            <LoadingText>{t("Loading")}</LoadingText>
                        </LoadingOut>
                        {/* 介绍框 */}
                        <DIALOG.IntroOut>
                            {/* 介绍框文字 */}
                            <DIALOG.IntroText>
                                <DIALOG.IntroTextTitle>{getConnectorInfo(pendingConnector.connector.name, 'name')}</DIALOG.IntroTextTitle>
                                <DIALOG.IntroTextContent>{t(getConnectorInfo(pendingConnector.connector.name, 'description'))}</DIALOG.IntroTextContent>
                            </DIALOG.IntroText>
                            {/* 介绍框图片 */}
                            <DIALOG.IntroImgOut>
                                <DIALOG.IntroImg src={getConnectorInfo(pendingConnector.connector.name, 'icon')} />
                            </DIALOG.IntroImgOut>
                        </DIALOG.IntroOut >
                    </DIALOG.DialogUpDownOut>
                </DIALOG.DialogOutBox>
            </DIALOG.DialogOut>
        </DIALOG.DialogContainer>

    )
}