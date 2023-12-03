import React from 'react'
import styled, {keyframes } from 'styled-components'


const spin = keyframes`
    to {
        transform: rotate(360deg)
    };
`

const pulse = keyframes`
    from {transform: scale(0.5)};
    to {transform: scale(1)};
`


const LoadingStyle = styled.div`
    display: flex;
    width: 2.5em;
    height: 2.5em;
    border: 2px solid transparent;
    border-top-color: #3cefff;
    border-bottom-color: #3cefff;
    border-radius: 50%;
    animation: ${spin} 1.5s linear infinite;
   
   
    ::before{
        content:'';
        display: block;
        margin: auto;
        width: 0.75em;
        height: 0.75em;
        border: 2px solid #3cefff;
        border-radius: 50%;
        animation: ${pulse} 1s alternate ease-in-out infinite;
    }
`

export default function Circle() {
    return (
        <LoadingStyle />
    )
}