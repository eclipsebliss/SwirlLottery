import React from 'react'
import { DIALOG } from '../../BaseStyle/DialogSty'
import styled from 'styled-components'
import NetworkChange from '../NetworkChange'
import { useTranslation } from 'react-i18next';

const NetSelectContainer = styled(DIALOG.DialogContainer)`
    z-index:100; 
`

const NetSelectTitle =styled(DIALOG.DialogTitle)`
   height: 3rem;
   padding: 0.5rem;
   ${({theme }) => theme.MEDIA.upToMinimalSmall`
      height: 1rem;
    `} 
`

export default function NetSelectDialog(props) {
    const { t } = useTranslation();
    const {setNetList} = props


    function uninstallNet() {
        setNetList(false);

        document.body.style.overflow = "scroll";
    }


    function handleClickNet(event) {
        if (event.target === event.currentTarget) {
          
            uninstallNet();
        }
    }   
    return (

        <NetSelectContainer  onClick={handleClickNet} style={{ opacity: 1 }}>
 
            <DIALOG.DialogOut>
                <DIALOG.DialogOutBox>
              
                    <NetSelectTitle>
                        <DIALOG.DialogTitleText>
                            {t('Switch Title')}
                        </DIALOG.DialogTitleText>
               
                        <DIALOG.DeleteButton onClick={uninstallNet}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sc-hrWEMg jaeDeS">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </DIALOG.DeleteButton>
                    </NetSelectTitle>
               
                    <NetworkChange/>
                </DIALOG.DialogOutBox>
            </DIALOG.DialogOut>
        </NetSelectContainer>
    )
}