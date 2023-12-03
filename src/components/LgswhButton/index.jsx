import React, {useContext } from 'react';
import {useTranslation } from 'react-i18next';
import {MainContext } from '../Main';
import {LOGO } from '../../themes';
import styled,{css} from 'styled-components';
import {HorStart,HorCenter } from '../../BaseStyle/LayoutSty';

const SeletContainer = styled(HorStart)`
    ${props => props.head
        ? css`
        margin-right:1rem;
        ${({theme }) => theme.MEDIA.upToSmall`display: none;`}
        ${({theme }) => theme.MEDIA.upToExtraSmall`display: none;`} 
     `
        : css`
        width: 10rem;
        height: 4rem; 
    `}
`

const StyledLgLogoOut = styled.div`
    width: 2.9rem;
    height: 2.9rem;
`
const StyledLgLogo = styled.img`
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 30px;
   
    transition: all .5s ease;
    :hover {
        transform: scale(1.15);
    }
`

const SeletOut = styled(HorCenter)`
    padding-left:3px;
`

const SeletMain = styled.select`
   
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 6rem;
    height: 2.5rem;
    padding-left:4px;
    border:none;
    background-color: transparent; 
    :hover {
           background: linear-gradient(${props => props.theme.button3},${props => props.theme.button4});
    }
    color: ${props => props.theme.text1};
    opacity:0.8;
   
    #lg-option{
        border:none;
        color: ${props => props.theme.text1};
        background-color:${props => props.theme.bg1};
    }
`

export default function LgswhButton(props) {
    const {i18n } = useTranslation();
    
    const {isTrue,setSelectedValue,selectedValue } = useContext(MainContext)

    return (
        <SeletContainer id="LgswhButton" head={props.head}>
            <StyledLgLogoOut>
                {isTrue ? <StyledLgLogo src={LOGO.Languageday} /> : <StyledLgLogo src={LOGO.Languagenight} />}
            </StyledLgLogoOut>
            <SeletOut>
                <SeletMain value={selectedValue} onChange={e => i18n.changeLanguage(e.target.value,setSelectedValue(e.target.value))}>
                    <option id='lg-option' value="zh_CN" >中文简体</option>
                    <option id='lg-option' value="zh_TW" >中文繁体</option>
                    <option id='lg-option' value="en" >English</option>
                </SeletMain>
            </SeletOut>
        </SeletContainer>
    )
}