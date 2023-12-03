import React, {Fragment, useState } from 'react'
import styled from 'styled-components'
import ThLiPop from './ThLiPop'

const ThLiButtonOut = styled.div`
    margin-right:10px;
    
    @media (min-width: 768px) {
        display: none;
    } 
    .bars {
        background: ${props => props.theme.text2};
        display: inline-block;
        height: 2px;
        position: relative;
        width: 2.5rem;
    }
    .bars::before,
    .bars::after {
        content: "";
        background: ${props => props.theme.text2};;
        display: inline-block;
        height: 2px;
        position: absolute;
        width: 2.5rem;
    }
    
    .bars::before {
        top: 8px;
    }
    
    .bars::after {
        top: -8px
    }
    padding-right:5px;
    padding-bottom:6px; 
    opacity: 0.8;
   
    transition: all .2s ease;
    :hover{
        transform: scale(1.15);
        opacity: 1;
    }  
`

export default function ThLiButton() {
    const [thLiPop, setThLiPop] = useState(false)

    function GetThLiPop(props) {
        if (thLiPop) {
            return <ThLiPop setThLiPop={props.setThLiPop} />
        } else {
            return null
        }
    }

    function openThLiPop() {
        setThLiPop(true)
    }

    return (
        <Fragment>
            <ThLiButtonOut onClick={openThLiPop}>
                <span className="bars"></span>
            </ThLiButtonOut>
            <GetThLiPop setThLiPop={setThLiPop} />
        </Fragment>
    )
}