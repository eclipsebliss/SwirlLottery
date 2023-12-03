import React, { Fragment, useContext } from 'react';

import { BaseButton, BaseButtonFront } from '../../BaseStyle';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';
import BetDialog from './BetDialog';
import { BetStuContext } from '../BetInput'
import { MainContext } from '../Main';

const StyleBetButton = styled(BaseButton)`
   
    ${props => props.disabled
        ? css`
        margin-top:1rem;
        width: 24rem; 
        height: 5rem;
        ${({ theme }) => theme.MEDIA.upToMedium`width: 22rem;`} 
        ${({ theme }) => theme.MEDIA.upToSmall`width: 44rem;height: 5.5rem;`}
        ${({ theme }) => theme.MEDIA.upToMinimalSmall`
          height: 4rem;
          width: 32rem;
        `}  
        cursor: not-allowed;
        background-color: ${props => props.theme.bg6};;
       
        pointer-events: none;  
     `
        : css`
        margin-top:1rem;
        width: 25rem; 
        height: 5rem;
        ${({ theme }) => theme.MEDIA.upToMedium`width: 22rem;`} 
        ${({ theme }) => theme.MEDIA.upToSmall`width: 44rem;height: 5.5rem;`}
        ${({ theme }) => theme.MEDIA.upToMinimalSmall`
          height: 4rem;
          width: 32rem;
        `}  
     `}
`
const FrontBetButton = styled(BaseButtonFront)`
    color:${props => props.theme.text7};
    height: 5rem;
    font-size:3em;
    font-weight:530;
    ${({ theme }) => theme.MEDIA.upToSmall`height: 5.5rem;`} 
    ${({ theme }) => theme.MEDIA.upToMinimalSmall`
      height: 4rem;
      font-size:2.5em;
    `}  
`

export default function BettingButton() {
    const { t } = useTranslation()
    
    const { isDisabled } = useContext(MainContext)
    
    const { setBet, betStatus } = useContext(BetStuContext)

    
    
    function GetDialogBet() {
        if (betStatus) {
            return <BetDialog />
        } else {
            return null
        }
    }

    
    function openDialogBet() {
        
        document.body.style.overflow = "hidden";
        setBet(true)
    }
    
    return (
        <Fragment>
            <StyleBetButton onClick={openDialogBet} disabled={isDisabled}>
                <FrontBetButton>
                    {t('Betting')}
                </FrontBetButton>
            </StyleBetButton>
            <GetDialogBet />
        </Fragment>
    )
}