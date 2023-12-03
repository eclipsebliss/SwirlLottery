import React, { useState, Fragment, useContext } from 'react'
import styled, { css } from 'styled-components'
import { MainContext } from '..'
import BetInfoPage from '../../Pages/BetInfoPage'
import PurInfoPage from '../../Pages/PurInfoPage'
import WinInfoPage from '../../Pages/WinInfoPage'
import ConInfoPage from '../../Pages/ConInfoPage'
import HelpPage from '../../Pages/HelpPage'
import { LOGO } from '../../../themes'
import { Link, Route, Redirect } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const RoutePageContent = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content:space-between;
    width: 100%;
    ${props => props.isHeiEnough
    ? css`
        height: 150vh;
     `
    : css`
        height: 100vh;
     `}
    background-color: ${props => props.theme.bg1};
   
`

const BottomBar = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content:space-around;
    position: fixed;
    bottom:0;
   
    ${props => props.isHeiEnough
        ? css`
        height: 8vh;
     `
        : css`
        height: 6vh;
     `}
    width: 100%;
    background-color:${props => props.theme.bg7};
    padding:0.5rem;
    border-top:1px solid ${props => props.theme.bg4};
    z-index: 20;
`
const BarOut = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:space-around;
    max-width: 6rem;
    height: 5rem;
    padding:0.5rem;
    opacity:0.65;
    &.active {  
      transition: all .5s ease;
      opacity:1;
    }
`
const BarImg = styled.img`
    width: 2.8rem;
    height: 2.8rem;

`
const BarText = styled.span`
    font-size: 1.5em;
    font-weight: 600;
    letter-spacing:1px; 
    color:${props => props.theme.text4};
`

export default function BottomMain() {
  const { isTrue, isHeiEnough } = useContext(MainContext)
  const [activeButton, setActiveButton] = useState(0);
  const { t } = useTranslation();

  const handleClick = (index) => {
    setActiveButton(index);
  };
  return (
    <Fragment>
      <RoutePageContent isHeiEnough={isHeiEnough}>
        {/* 注册路由 */}
        <Route path="/Swirl/BetInfoPage" component={BetInfoPage} />
        <Route path="/Swirl/WinInfoPage" component={WinInfoPage} />
        <Route path="/Swirl/PurInfoPage" component={PurInfoPage} />
        <Route path="/Swirl/ConInfoPage" component={ConInfoPage} />
        <Route path="/Swirl/HelpPage" component={HelpPage} />
        {/* 保底链接 */}
        <Redirect to="/Swirl/BetInfoPage" />
      </RoutePageContent>
      <BottomBar isHeiEnough={isHeiEnough}>
        {/* 编写路由链接 */}
        <Link to='/Swirl/BetInfoPage'>
          {/* 选中之后，点击一直保持高亮 */}
          <BarOut className={activeButton === 0 ? 'active' : ''} onClick={() => handleClick(0)}>
            {isTrue ? <BarImg src={LOGO.HomepageDay} /> : <BarImg src={LOGO.HomepageNight} />}
            <BarText>{t("Home")}</BarText>
          </BarOut>
        </Link>
        <Link to='/Swirl/WinInfoPage'>
          <BarOut className={activeButton === 1 ? 'active' : ''} onClick={() => handleClick(1)}>
            {isTrue ? <BarImg src={LOGO.AwardlistDay} /> : <BarImg src={LOGO.AwardlistNight} />}
            <BarText>{t("Lottery Record")}</BarText>
          </BarOut>
        </Link>
        <Link to='/Swirl/PurInfoPage'>
          <BarOut className={activeButton === 2 ? 'active' : ''} onClick={() => handleClick(2)}>
            {isTrue ? <BarImg src={LOGO.HistoryDay} /> : <BarImg src={LOGO.HistoryNight} />}
            <BarText>{t("Historical Betting")}</BarText>
          </BarOut>
        </Link>
        <Link to='/Swirl/HelpPage'>
          <BarOut className={activeButton === 3 ? 'active' : ''} onClick={() => handleClick(3)}>
            {isTrue ? <BarImg src={LOGO.HelpDay} /> : <BarImg src={LOGO.HelpNight} />}
            <BarText>{t("Help")}</BarText>
          </BarOut>
        </Link>
        <Link to='/Swirl/ConInfoPage'>
          <BarOut className={activeButton === 4 ? 'active' : ''} onClick={() => handleClick(4)}>
            {isTrue ? <BarImg src={LOGO.ContactDay} /> : <BarImg src={LOGO.ContactNight} />}
            <BarText>{t("Contact Us")}</BarText>
          </BarOut>
        </Link>

      </BottomBar>
    </Fragment>
  )
}