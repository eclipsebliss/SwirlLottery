


import React from 'react'
import styled from 'styled-components';
import { DIGITS } from '../../../constants'

const NumberDisplay = styled.div`
    display: flex;
    align-items: center;
    color: white;
    user-select: none; 
    font-family: 'smiley sans';
`
const DigitWrapper = styled.div`
    width: 12rem;
    height: 17rem;
    font-size: 20em;
    line-height: 17rem;
    ${({ theme }) => theme.MEDIA.upToSmall`width: 10rem;height: 14rem;line-height: 14rem;font-size: 15em;`}
    ${({ theme }) => theme.MEDIA.upToMinimalSmall`width: 8rem;height: 11rem;line-height: 11rem;font-size: 12em;`} 
    position: relative;  
    text-align: center;
    overflow: hidden;
`

const DigitList = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute; 
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: transform 600ms;
   
   
   
    transform: ${props => `translate(-50%, ${-Number(props.digitStr) * 17}rem)`};
    ${({ theme }) => theme.MEDIA.upToSmall`transform: ${props => `translate(-50%, ${-Number(props.digitStr) * 14}rem)`};`} 
    ${({ theme }) => theme.MEDIA.upToMinimalSmall`transform: ${props => `translate(-50%, ${-Number(props.digitStr) * 11}rem)`};`} 
    transition-delay: ${props => `${props.index * 100}ms`}; 
`
const Digit = styled.span`
    font-family: "smiley sans";
    color: ${props => props.theme.text1}; 
`

export default function GetScrolling(props) {
  const { numberRandom } = props 
  
  return (
    <NumberDisplay>
      {
        <DigitWrapper >{
          
          <DigitList digitStr={numberRandom} >
            {
              DIGITS.map((digit,index) => (
                <Digit key={index}>{digit}</Digit>
              ))
            }
          </DigitList>
        }
        </DigitWrapper>
      }
    </NumberDisplay>
  )
}