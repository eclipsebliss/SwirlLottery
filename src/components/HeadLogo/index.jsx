import React from 'react'
import {LOGO } from '../../themes'
import {useTranslation } from 'react-i18next';
import styled from 'styled-components';
import {HorStart } from '../../BaseStyle/LayoutSty';

const HeadLogoOut = styled(HorStart)`
    max-width: 18rem;
    height: 5rem;
   
`
const HeadLogoImg = styled.img`
    height: 3.5rem;
    width: 3.5rem;
    transition: all .3s ease;
    transition: transform 0.3s ease-in-out;
    transform: scale(1);
    :hover {
        transform: scale(1.2);
    } 
`
const HeadLogoText = styled.span`
    font-size: 2.5em;
    font-weight: 600;
    padding-top:2px;
    padding-left:5px;
    color:${props => props.theme.text4};
    opacity:0.85;
`

export default function HeadLogo() {
    const {t } = useTranslation();
    return (
        <HeadLogoOut>
            <HeadLogoImg src={LOGO.SwirlLogo} alt="LOGO" />
            <HeadLogoText>{t("Swirl Lottery")}</HeadLogoText>
        </HeadLogoOut>
    )
}