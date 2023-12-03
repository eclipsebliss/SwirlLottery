import React, { useContext } from 'react'
import styled from 'styled-components'
import { Fragment } from 'react'
import { SlideButton } from '../../SlideButton'
import LgswhButton from '../../LgswhButton';
import DialogConnect from '../../Dialog';
import HeadLogo from '../../HeadLogo';
import DropDownAccAdd from '../../DropDown/DropDownAccAdd';
import ThLiButton from '../../ThLiButton';
import { MainContext } from '..';
import MediaQuery from 'react-responsive'

const Header = styled.nav`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content:space-between;
    position: fixed;
    top:0;
    height: 7vh;
    width: 100%;
    background-color:${props => props.theme.bg7};
    color: ${props => props.theme.text1};
    padding:1rem 1rem 1rem 5px;
    border-bottom:1px solid ${props => props.theme.bg4};
    z-index: 20;
`

export default function HeaderMain() {
    const { drawLottery } = useContext(MainContext)
    return (
        <Fragment>
            <Header>
                <HeadLogo />
                {/* <AnumberDisplay/> */}
                {/* <button onClick={drawLottery}>开奖</button> */}
                <DropDownAccAdd head={true} />
                <MediaQuery query="(min-device-width: 768px)">
                    <SlideButton head={true} />
                    <DialogConnect head={true} />
                    <LgswhButton head={true} />
                </MediaQuery>
                <ThLiButton />
            </Header>
        </Fragment>
    )
}