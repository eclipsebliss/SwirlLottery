import React from 'react'
import { useContext } from 'react'
import { StatusContext } from '..'
import WalletSelect from '../../WalletSelect'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import { DIALOG,DialogTitle } from '../../../BaseStyle/DialogSty'
import { HorCenter } from '../../../BaseStyle/LayoutSty' 

// 弹窗标题外框
const DialogTitleSelect = styled(DialogTitle)`
    padding: 0.8rem;
    height: 3.5rem;
    max-width:40rem;
    ${({ theme }) => theme.MEDIA.upToMinimalSmall`
      width: 25rem;
    `}
`
// 弹窗标题底部
const DialogBottom = styled(HorCenter)`
    padding: 0.8rem;
    height: 3.5rem;
    max-width:40rem;
    font-size: 2em;
    ${({ theme }) => theme.MEDIA.upToMinimalSmall`
      width: 25rem;
      font-size: 1.8em;
    `}
`
const Bottomtext = styled.span`
    color:${props => props.theme.text1};
`
const Bottomlink = styled.a`
    color:${props => props.theme.text2};
`
export default function DialogSelectKid() {
    //利用解构赋值将 setState 从 useContext分离出来
    const { setSelect } = useContext(StatusContext)
    //关闭时更改 Status 状态为 false
    function uninstallSelect() {
        setSelect(false);
        // //关闭时重新将浏览器界面设置为滚动或其他
        document.body.style.overflow = "scroll";
    }

    // 点击蒙层本身时关闭对话框，点击对话框的内容时不关闭
    function handleClickSelect(event) {
        // console.log('event.target:', event.target)
        // console.log('event.currentTarget:', event.currentTarget)
        if (event.target === event.currentTarget) {
            // 调用关闭方法
            uninstallSelect();
        }
    }
    const { t } = useTranslation();
    // if !loading
    return (
        // 为整个组件添加css 样式并让其置于顶层,同时对话框以外的地方添加模糊效果
        <DIALOG.DialogContainer onClick={handleClickSelect} style={{ opacity: 1 }}>
            { /* 为对话框添加 css 样式,absolute定位时相对于容器的位置 ,同时将 overflow 设置为自动*/}
            <DIALOG.DialogOut>
                <DIALOG.DialogOutBox>
                    {/* 钱包选择弹窗组件标题 */}
                    <DialogTitleSelect>
                        <DIALOG.DialogTitleText>
                            {t("Connect Wallet")}
                        </DIALOG.DialogTitleText>
                        {/* 为关闭按钮绑定关闭方法 */}
                        <DIALOG.DeleteButton onClick={uninstallSelect}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sc-hrWEMg jaeDeS">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </DIALOG.DeleteButton>
                    </DialogTitleSelect>
                    {/* 钱包选择弹窗组件选择钱包组件 */}
                    <WalletSelect />
                    {/* 钱包选择弹窗组件底部 */}
                    <DialogBottom>
                        <Bottomtext>以太坊新用户? &nbsp;</Bottomtext>
                        <Bottomlink target="_blank" rel="noopener noreferrer" href="https://ethereum.org/wallets/">了解有关钱包的更多信息。</Bottomlink>
                    </DialogBottom>
                </DIALOG.DialogOutBox>
            </DIALOG.DialogOut>
        </DIALOG.DialogContainer>

    )
    // if loading
    // return loading弹窗
}