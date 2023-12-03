
import React, { Fragment, useContext } from 'react'
import styled, { css, keyframes } from 'styled-components';
import { MainContext } from '../Main';
import { LOGO } from '../../themes';

import { HorCenter } from '../../BaseStyle/LayoutSty';

const PendantBase = styled(HorCenter)`
    position:absolute;
    z-index:2;
`


const leftToRight = keyframes`
    0% {
        transform: rotateX(0deg) translateX(0px);
    };

    50% {
        transform: rotateX(0deg) translateX(50px);
    };

    100% {
        transform: rotateX(0deg) translateX(0px);
    }
`


const topToDown = keyframes`
    0% {
        transform: rotateX(0deg) translateY(0px);
    };
    
    50% {
        transform: rotateX(0deg) translateY(-30px);
    };
    
    100% {
        transform: rotateX(0deg) translateY(0px);
    }
`



const BallRobotLROut= styled(PendantBase)`
   
    ${props => props.isTrue
        ? css`
        top:10%;
        left:70%;
        width: 15rem;
        height: 15rem;
     `
        : css`
        top:20%;
        left: 0%;
        width: 17rem;
        height: 17rem;
        animation: ${leftToRight} 5s infinite linear;
        transition: all 0.3s ease-out 0s;
     `}
`

const BallRobotTDOut= styled(PendantBase)`
   
    ${props => props.isTrue
        ? css`
        top:10%;
        left:10%;
        width: 15rem;
        height: 15rem;
     `
        : css`
        top:40%;
        left: 90%;
        width: 15rem;
        height: 15rem;
        animation: ${topToDown} 5s infinite linear;
        transition: all 0.3s ease-out 0s;
     `}
`

const BallRobotROOut= styled(PendantBase)`
   
    ${props => props.isTrue
        ? css`
        top:30%;
        left:40%;
        width: 15rem;
        height: 15rem;
     `
        : css`
        top:20%;
        left: 80%;
        width: 6rem;
        height: 6rem;
        animation: ${topToDown} 5s infinite linear;
        transition: all 0.3s ease-out 0s;
     `}
`

const EthBLogoOut= styled(PendantBase)`
   
    ${props => props.isTrue
        ? css`
        top:40%;
        left:60%;
        width: 15rem;
        height: 15rem;
     `
        : css`
        top:60%;
        left: 14%;
        width: 22rem;
        height: 22rem;
        opacity: 0.5;
     `}
`
export default function Pendant() {
    const { isTrue } = useContext(MainContext)

    return (
        <Fragment>
            <BallRobotLROut isTrue={isTrue}>
                {/* 根据isTrue传入不同挂件 */}
                {
                    isTrue ?
                        <img alt='' style={{ "width": "15rem", "height": "15rem" }} src={LOGO.Day_Robots1} /> :
                        <img alt='' style={{ "width": "17rem", "height": "17rem" }} src={LOGO.Night_BallBig} />
                }
            </BallRobotLROut>
            <BallRobotTDOut isTrue={isTrue}>
                {/* 根据isTrue传入不同挂件 */}
                {
                    isTrue ?
                        <img alt='' style={{ "width": "15rem", "height": "15rem" }} src={LOGO.Day_Robots1} /> :
                        <img alt='' style={{ "width": "15rem", "height": "15rem" }} src={LOGO.Night_BallMid} />
                }
            </BallRobotTDOut>
            <BallRobotROOut isTrue={isTrue}>
                {/* 根据isTrue传入不同挂件 */}
                {
                    isTrue ?
                        <img alt='' style={{ "width": "15rem", "height": "15rem" }} src={LOGO.Day_Robots1} /> :
                        <img alt='' style={{ "width": "6rem", "height": "6rem" }} src={LOGO.Night_BallLit} />
                }
            </BallRobotROOut>
            <EthBLogoOut isTrue={isTrue}>
                {/* 根据isTrue传入不同挂件 */}
                {
                    isTrue ?
                        <img alt='' style={{ "width": "15rem", "height": "15rem" }} src={LOGO.Day_Robots1} /> :
                        <img alt='' style={{ "width": "22rem", "height": "22rem" }} src={LOGO.EthB} />
                }
            </EthBLogoOut>
        </Fragment>
    )
}