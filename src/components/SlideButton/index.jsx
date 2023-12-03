import React, { useContext } from 'react';
import { MainContext } from '../Main';
import styled, { css } from 'styled-components';
import { LOGO } from '../../themes';



const SlideButtonOut = styled.div`
    ${props => props.head
        ? css`
        ${({ theme }) => theme.MEDIA.upToSmall`display: none;`}
        ${({ theme }) => theme.MEDIA.upToExtraSmall`display: none;`} 
        width: 12rem;
        height: 5rem;
     `
        : css`
        width:7.2rem;
        height: 3rem;
    `}
    border: 1px solid ${props => props.theme.button1};
   
   
    font-weight: bold;
    border-radius: 30px;
    box-shadow: inset 0px 0px 14px -3px ${props => props.theme.button2};
   
   
   
   
    position: relative;
    cursor: pointer;
    :hover {
            background: linear-gradient(${props => props.theme.button3},${props => props.theme.button4});
    }
`

const SlideButtonInner = styled.div`
    ${props => props.head
        ? css`
        width: 5rem;
        height: 4.8rem;
     `
        : css`
        width:3rem;
        height: 2.8rem;
    `}
   display :flex;
   justify-content: center;
   align-items: center;
   font-family: Arial;
   border:1px solid ${props => props.theme.button1};
  
  
   border-radius: 30px;
   position: absolute;
   top: 0;
   left: 0;
   
   transform: ${props => props.$isTrue ? 'translateX(130%)' : 'translateX(0)'} ;
   transition: transform 0.4s ease-in-out; 
`
const StyledSunMoonLogo = styled.img`
    ${props => props.head
        ? css`
        width: 3.5rem;
        height: 3.5rem;
     `
        : css`
        width:2.4rem;
        height: 2.4rem;
    `}
    border-radius: 30px;
`

export function SlideButton(props) {
    const { setColor, isTrue } = useContext(MainContext)
    return (

        <SlideButtonOut head={props.head} id="slidebutton">
            <div onClick={() => setColor()}>
                <SlideButtonInner head={props.head} $isTrue={isTrue}>
                    {isTrue ? <StyledSunMoonLogo head={props.head} src={LOGO.MoonLogo} /> : <StyledSunMoonLogo head={props.head} src={LOGO.SunLogo} />}
                </SlideButtonInner>
            </div>
        </SlideButtonOut>

    );
}