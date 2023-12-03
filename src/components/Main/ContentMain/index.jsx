import React, { useContext } from 'react';
import { MainContext } from '..'
import styled, { css } from 'styled-components';

import WinInfoPage from '../../Pages/WinInfoPage'
import PurInfoPage from '../../Pages/PurInfoPage'
import BetInfoPage from '../../Pages/BetInfoPage'


const Content = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content:space-between;
    width: 100%;
    ${props => props.isHeiEnough
        ? css`
        height: 150vh;
     `
        : css`
        height: 100vh;
     `}
    background-color:${props => props.theme.bg1};
`



export default function ContentMain() {
    const { isHeiEnough } = useContext(MainContext)
    return (
        <Content isHeiEnough = {isHeiEnough}>
            {/* 挂件 */}
            {/* <Pendant /> */}
            {/* 总体中奖信息 */}
            <WinInfoPage />
            {/* 主界面投注信息 */}
            <BetInfoPage />
            {/* 个人投注及中奖信息 */}
            <PurInfoPage />
            {/* <Test/> */}
        </Content>
    )
}