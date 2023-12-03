import React, {useContext } from 'react'
import {MainContext } from '../../Main'
import styled from 'styled-components'
import {DialogContainer, DialogOut, DialogOutBox, DialogTitle, DialogTitleText, DeleteButton } from '../../../BaseStyle/DialogSty'
import LgswhButton from '../../LgswhButton'
import {SlideButton } from '../../SlideButton'
import {useTranslation } from 'react-i18next'
import {HorScatter,HorStart } from '../../../BaseStyle/LayoutSty'




const DialogReOut = styled(DialogOut)`
   top: 19.4%; 
   left: 65%;
   max-height: 30rem;
   max-width:25rem;
   ${({theme }) => theme.MEDIA.upToExtraSmall`left: 60%;`} 
`


const DialogReTitle = styled(DialogTitle)`
    height: 3rem;
    padding: 0 1rem 0 1rem;
`

const DialogReTitleText = styled(DialogTitleText)`
    font-size: 2em;
`
const DialogContent = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    width:22rem;
    height: 10rem;
    padding:1rem;
`
const ContentOut = styled(HorScatter)`
    max-width: 25rem;
    height: 5rem;
`
const ContentTextOut = styled(HorStart)`
    width: 7rem;
    height: 100%;
`
const ContentText = styled.span`
    font-size: 2em; 
    font-weight: 600;
    color:${props => props.theme.text2};
    opacity:0.85; 
`
const ContentButOut = styled(HorStart)`
    width: 9rem;
    height: 100%;
`
export default function ThLiPop(props) {
    const {t } = useTranslation();
    const {isTrue } = useContext(MainContext)
    
    function handleClickThLiPop(event) {
        if (event.target === event.currentTarget) {
            
            props.setThLiPop(false);
        }
    }

    
    function uninstallThLiPop() {
        props.setThLiPop(false);
    }


    return (
        <DialogContainer onClick={handleClickThLiPop}>
            <DialogReOut>
                <DialogOutBox >
                    <DialogReTitle>
                        <DialogReTitleText>
                            {t('Setting')}
                        </DialogReTitleText>
                        <DeleteButton onClick={uninstallThLiPop}>
                            <svg width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sc-hrWEMg jaeDeS">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </DeleteButton>
                    </DialogReTitle>
                    <DialogContent>
                        <ContentOut>
                            <ContentTextOut>
                                <ContentText>{t('Switching Languages')}</ContentText>
                            </ContentTextOut>
                            <ContentButOut>
                                <LgswhButton />
                            </ContentButOut>
                        </ContentOut>
                        <ContentOut>
                            <ContentTextOut>
                                <ContentText>{isTrue ? t('Night mode') : t('Day Mode')}</ContentText>
                            </ContentTextOut>
                            <ContentButOut>
                                <SlideButton />
                            </ContentButOut>
                        </ContentOut>
                    </DialogContent>
                </DialogOutBox>
            </DialogReOut>
        </DialogContainer>
    )
}