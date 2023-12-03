import {css } from 'styled-components'
import SunLogo from '../assets/svg/sun3.svg'
import MoonLogo from '../assets/svg/moon4.svg'
import CoinbaseLogo from '../assets/wallets/coinbaseWalletIcon.svg'
import MetamaskLogo from '../assets/wallets/metamask.png'
import WalletconnectLogo from '../assets/wallets/walletConnectIcon.svg'
import InjectedLogo from '../assets/wallets/injected.svg'
import Languageday from '../assets/svg/lgd1.svg'
import Languagenight from '../assets/svg/lgn1.svg'
import ErrorLogo from '../assets/svg/error4.svg'
import SwirlLogo from '../assets/svg/swirllogo.svg'
import AccountDay from '../assets/svg/account-day.svg'
import AccountNight from '../assets/svg/account-night.svg'
import BrowserDay from '../assets/svg/address-day.svg'
import BrowserNight from '../assets/svg/address-night.svg'
import CopyDay from '../assets/svg/copy-day.svg'
import CopyNight from '../assets/svg/copy-night.svg'
import Hints from '../assets/svg/hints.svg'
import Success from '../assets/svg/success.svg'
import Night_Bg from '../assets/images/night_bg.png'
import Day_Bg from '../assets/images/day_bg.png'
import Night_BallBig from '../assets/images/night_ballbig.png'
import Night_BallMid from '../assets/images/night_ballmid.png'
import Night_BallLit from '../assets/images/night_balllit.png'
import Day_Robots1 from '../assets/images/day_robots1.png'
import EthB from '../assets/images/ethB.png'
import HomepageDay from '../assets/svg/homepage-day.svg'
import HomepageNight from '../assets/svg/homepage-night.svg'
import AwardlistDay from '../assets/svg/awardlist-day.svg'
import AwardlistNight from '../assets/svg/awardlist-night.svg'
import HistoryDay from '../assets/svg/history-day.svg'
import HistoryNight from '../assets/svg/history-night.svg'
import ContactDay from '../assets/svg/contact-day.svg'
import ContactNight from '../assets/svg/contact-night.svg'
import HelpDay from '../assets/svg/help-day.svg'
import HelpNight from '../assets/svg/help-night.svg'






export const LOGO = {
  SunLogo,
  MoonLogo,
  CoinbaseLogo,
  MetamaskLogo,
  WalletconnectLogo,
  InjectedLogo,
  Languageday,
  Languagenight,
  ErrorLogo,
  SwirlLogo,
  AccountDay,
  AccountNight,
  BrowserDay,
  BrowserNight,
  CopyDay,
  CopyNight,
  Hints,
  Success,
  Night_Bg,
  Night_BallBig,
  Night_BallMid,
  Night_BallLit,
  Day_Robots1,
  EthB,
  HomepageDay,
  HomepageNight,
  AwardlistDay,
  AwardlistNight,
  HistoryDay,
  HistoryNight,
  ContactDay,
  ContactNight,
  HelpDay,
  HelpNight 
}



const MEDIA_WIDTHS = {
  upToMinimalSmall: 450,
  upToExtraSmall: 560 ,
  upToSmall: 768,
  upToMedium: 960,
  upToLarge: 1230
}




const media = Object.keys(MEDIA_WIDTHS).reduce((accumulator, size) => {
  accumulator[size] = (...args) => css`
      @media (max-width:${(MEDIA_WIDTHS)[size]}px){
          ${css(...args)}
      }          
  `;
  return accumulator;
}, {});




export default function mainTheme(darkMode) {
  return {

    
    text1: darkMode ? '#FFFFFF' : '#b46306', 
    text2: darkMode ? '#13e8e8' : '#c28f04', 
    text3: darkMode ? '#ee5656' : '#ee5656', 
    text4: darkMode ? '#13e8e8' : '#6a4f04', 
    text5: darkMode ? '#a48080' : '#d76f6f', 
    text6: darkMode ? '#f79090' : '#ee5656', 
    text7: darkMode ? '#13e8e8' : '#6a4f04', 

    
    bg1: darkMode ? '#20233c' : '#fbfaf6', 
    bg2: darkMode ? '#120036' : '#f9f6ee', 
    bg3: darkMode ? '#20233c' : '#f8f9fa', 
    bg4: darkMode ? '#7fbbbb' : '#c59207', 
    bg5: darkMode ? '#171b39' : '#f8f9fa', 
    bg6: darkMode ? '#555f5f' : '#ebeeca', 
    bg7: darkMode ? '#071b46' : '#f9f6ee', 

    
    button1: darkMode ? '#566963' : '#c59207', 
    button2: darkMode ? '#91b8b3' : '#c59207', 
    button3: darkMode ? '#222224' : '#aa7d02', 
    button4: darkMode ? '#7fbbbb' : '#f7efd9', 
    button5: darkMode ? '#2f6150' : '#f3e169', 
    button6: darkMode ? '#3b886e' : '#f3f2e9', 
    button7: darkMode ? '#ee5656' : '#a39e04', 
    button8: darkMode ? '#30a17c' : '#a39e04', 

    
    bgImage: darkMode ? Night_Bg : Day_Bg, 

    MEDIA: media,
  }
}