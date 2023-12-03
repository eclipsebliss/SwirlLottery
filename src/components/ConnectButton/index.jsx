import React, { useContext } from 'react';

import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { StatusContext } from '../Dialog';

import { BaseButton, BaseButtonFront } from '../../BaseStyle'


const StyledConnectButton = styled(BaseButton)`
   
    ${props => props?.head
        ? css`
           
            max-width: 14rem; 
            height: 4rem;
            ${({ theme }) => theme.MEDIA.upToSmall`display: none;`} 
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
const FrontConnectButton = styled(BaseButtonFront)`
   
    ${props => props?.head
        ? css`
            height: 4rem;
            font-size:2.5em;
         `
        : css`
            height: 5rem;
            font-size:3em;
            ${({ theme }) => theme.MEDIA.upToMedium`width: 20rem;`} 
            ${({ theme }) => theme.MEDIA.upToSmall`width: 42rem;height: 5.5rem;`} 
            ${({ theme }) => theme.MEDIA.upToMinimalSmall`
              font-weight:530;
              width: 30rem;
              height: 4rem;
              font-size:2.5em;
            `} 
         `}
   color: ${props => props.theme.text7};
`

export default function ConnectButton(props) {
    const { isConnected } = useContext(StatusContext)
    const { t } = useTranslation();
    
    const openDialog = props.openDialog
    return (

        
        <StyledConnectButton  id = "connect-button" head = { props?.head } onClick = { openDialog } >
            <FrontConnectButton id="button-front" head={props?.head} >
                {isConnected ? t('Disconnect') : t('Connect Wallet')}
            </FrontConnectButton>
        </StyledConnectButton >
    )
}

