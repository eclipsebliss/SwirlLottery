import React from 'react'
import {useTranslation } from 'react-i18next';
import styled from 'styled-components';
import {HorCenter } from '../../BaseStyle/LayoutSty';

const HeadTextOut = styled(HorCenter)`
    max-width: 55rem;
    max-height: 5rem;
    padding:0 1rem 1rem 1rem;
    ${({theme }) => theme.MEDIA.upToMinimalSmall`
      padding:0 5px 5px 5px;
    `}
`
const HeadText = styled.span`
    font-size: 4em;
    font-weight: 600;
    letter-spacing:1px; 
    color:${props => props.theme.text4};
    opacity:0.85;
    ${({theme }) => theme.MEDIA.upToMinimalSmall`
      font-size: 3em;
    `}
`

export default function HeadTextName() {
    const {t } = useTranslation();
    return (
        <HeadTextOut>
           <HeadText>{t("Swirl Lottery")}</HeadText>  
        </HeadTextOut>
    )
}