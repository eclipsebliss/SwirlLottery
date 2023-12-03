


import React from 'react'
import styled from 'styled-components';
import { DIGITS, DIGITREGEXP } from '../../../constants'
import { HorCenter,VerCenter } from '../../../BaseStyle/LayoutSty';

const NumberDisplay = styled(HorCenter)`
    color: ${props => props.theme.text1};
    user-select: none; 
    font-family: 'smiley sans';
`

const DigitWrapper = styled.div`
    position: relative;
    text-align: center;
    overflow: hidden;
    width: 20px;
    height: 32px;
    font-size: 20px;
    line-height: 32px;
   
    box-shadow: inset 0px 0px 14px -3px ${props => props.theme.button2};
    border-radius: 6px;
    margin-right: 2px;
    &:last-child {
      margin-right: 0;
    }
`

const DigitList = styled(VerCenter)`
    position: absolute; 
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: transform 600ms;
   
   
   
    transform: ${props => `translate(-50%, ${-Number(props.digitStr) * 32}px)`};
   
`

const Digit = styled.span`
    font-family: "smiley sans";
`

export default function GetCountDown(props) {
  const { numberString } = props 
  
  return (
    <NumberDisplay id='mynumber'>
      {
        numberString.split('').map((digitStr, index) => (
          <DigitWrapper key={index}>{
            DIGITREGEXP.test(digitStr) ? (
              
              <DigitList digitStr={digitStr} index={index}>
                {
                  DIGITS.map(digit => (
                    <Digit key={digit}>{digit}</Digit>
                  ))
                }
              </DigitList>) : (              
              
              <span>{digitStr}</span>)
          }
          </DigitWrapper>
        ))
      }
    </NumberDisplay>
  )
}