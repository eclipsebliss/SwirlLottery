import React, {Fragment } from 'react'
import styled, {css } from 'styled-components';
import {useNetwork, useSwitchNetwork } from 'wagmi'
import {VerScatter, HorScatterBut, VerCenter, HorCenter } from '../../BaseStyle/LayoutSty';
import ThreeDotsUse from '../Loading/ThreeDotsUse';
import { useTranslation } from 'react-i18next';

// 网络切换外框
const NetchanContainer = styled(VerScatter)`
    max-width: 15rem;
    max-height: 30rem;
    padding:1rem;
    gap:1rem; 
    justify-content: space-around;
    z-index:100;
`

// 网络切换按钮
const NetSingleButton = styled(HorScatterBut)`
    justify-content:center;
    height: 3rem;
    width: 100% !important;
    border-radius: 12px;
    border: 1px solid ${props => props.theme.button8};
    padding: 0.3rem 1.5rem 0.3rem 1.5rem ;
    box-shadow: inset 0px 0px 14px -3px ${props => props.theme.button2};
    /* 条件渲染，根据disabled的状态设置按钮是否可点击*/
    ${props => props.disabled
        ? css`
        cursor: not-allowed;
        background-color: ${props => props.theme.bg6};;
        /* pointer-events: none;属性：将该属性应用于要取消hover效果的元素上，这样鼠标悬停在该元素上时将不会触发任何hover效果。 */
        pointer-events: none;  
     `
        : css`
        /* 透明背景 */
        background-color:transparent;
        :hover {
          background: linear-gradient(${props => props.theme.button3},${props => props.theme.button4});
        }
        cursor: pointer;

     `}
`

// 网络切换文字外框
const NettNameOut = styled(VerCenter)`
    width:auto;
    height: 100%;
`
// 网络切换文字内框
const NetName = styled.div`
    display: flex;
    flex-flow: row;
    color:${props => props.theme.text1};
    font-size: 1em;
    font-weight: 700;
`
const LoadingOut = styled(HorCenter)`
    width:auto;
    height: 3rem;
    // 圆圈大小
    font-size: 0.6em;
`
// 网络切换logo外框
const NetError = styled.span`
    color: ${props => props.theme.text3};
`


export default function NetworkChange() {
    const {chain } = useNetwork()
    const {chains, isError, isLoading, pendingChainId, switchNetwork } = useSwitchNetwork()
    const {t } = useTranslation()

    return (
        <NetchanContainer>
            {chains.map((NetSingle) => (
                <NetSingleButton disabled={!switchNetwork || NetSingle.id === chain?.id} key={NetSingle.id} onClick={() => switchNetwork?.(NetSingle.id)}>
                    {
                        isLoading && pendingChainId === NetSingle.id ? (
                            <LoadingOut>
                                <ThreeDotsUse />
                            </LoadingOut>
                        ) : (
                            <NettNameOut>
                                <NetName>
                                    {NetSingle.name}
                                </NetName>
                            </NettNameOut>
                        )
                    }
                </NetSingleButton>
            ))}
            {
                <Fragment>
                    {isError && <NetError>{t('Errorcontent Retry')}</NetError>}
                </Fragment>
            }
        </NetchanContainer>
    )
}