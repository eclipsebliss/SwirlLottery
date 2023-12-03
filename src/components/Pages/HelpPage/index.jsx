import React from 'react'
import styled from 'styled-components'
import {VerCenter } from '../../../BaseStyle/LayoutSty'

const HelpOut = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const Help = styled(VerCenter)`
    width: 30rem;
    height: 38rem;
    border: 1px solid ${props => props.theme.button1};
    border-radius: 12px;
    box-shadow: inset 0px 0px 14px -3px ${props => props.theme.button2};
    z-index: 5;
`

const TitileText = styled.span`
    font-size: 3em;
    font-weight: 600;
    letter-spacing:1px; 
    color:${props => props.theme.text4};
    opacity:0.85;
`

export default function HelpPage() {
    return (
        <HelpOut >
            <Help>
                <TitileText>
                    帮助页面
                </TitileText>
            </Help>
        </HelpOut>
    )
}