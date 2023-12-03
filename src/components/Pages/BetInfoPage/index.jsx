import React from 'react'
import styled from 'styled-components'
import { VerCenter,VerScatter } from '../../../BaseStyle/LayoutSty'
import HeadTextName from '../../HeadTextName'
import OpeningInfoShow from '../../OpeningInfoShow'
import { ContentAccount } from '../../NetAccount'
import BetInput from '../../BetInput'

const BetInfoOut = styled(VerCenter)`
    width: 50%;
    height: 93vh;
    transform:translateY(7vh);
    ${({theme }) => theme.MEDIA.upToLarge`width: 100%;`}
    ${({theme }) => theme.MEDIA.upToMinimalSmall` height: 110vh; transform:translateY(0);`}
`
const BetInfo = styled(VerScatter)`
    max-width: 55rem;
    max-height: 65rem;
    padding:5px;
    border: 1px solid ${props => props.theme.button1};
    border-radius: 12px;
    box-shadow: inset 0px 0px 14px -3px ${props => props.theme.button2};
    position: relative;
   
    z-index: 5;
    ${({theme }) => theme.MEDIA.upToMinimalSmall`
      margin-top:5rem;
      width: 33rem;
      max-height: 70rem;
    `}
`

export default function BetInfoPage() {
  return (
    <BetInfoOut>
      <BetInfo>
        <HeadTextName/>
        <OpeningInfoShow/>
        <ContentAccount/>
        <BetInput/>
      </BetInfo>
    </BetInfoOut>
  )
}
