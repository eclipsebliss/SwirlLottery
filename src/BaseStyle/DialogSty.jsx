
import styled from "styled-components";



export const DialogContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.33);  
    z-index:50;
`

export const DialogOut = styled.div`
    position:absolute;
    left: 50%;
    top:50%;
    overflow:auto;
    transform:translate(-50%,-50%);
    max-width:45rem;
    max-height:50rem;
    border: 1px solid ${props => props.theme.button1};
    border-radius:12px;
`

export const DialogOutBox = styled.div`
    display: flex;
    flex-direction:column;
    border: 1px solid ${props => props.theme.button1};
    border-radius:12px;
    background: ${props => props.theme.bg3};
    box-shadow: inset 0px 0px 14px -3px ${props => props.theme.button2};
    color: ${props => props.theme.text1};
`


export const DialogTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    height: 4rem;
    border-bottom:1px solid ${props => props.theme.button1};
    ${({theme }) => theme.MEDIA.upToMinimalSmall`
      height: 2rem;
    `}
`

export const DialogTitleText = styled.div`
    font-size: 2.5em;
    font-weight: 530;
    letter-spacing:1px;
    color:${props => props.theme.text1};
    ${({theme }) => theme.MEDIA.upToMinimalSmall`
      font-size: 2em;
    `}
`

export const DeleteButton = styled.div`
    cursor: pointer;
`


export const DialogUpDownOut = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1.2rem;
    max-width:40rem;
    height:18rem;
    ${({theme }) => theme.MEDIA.upToMinimalSmall`
     max-height:16rem;
     padding: 1rem;
    `}
`

export  const DialogConUpOut = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 8rem;
    width:40rem;
    border: 1px solid ${props => props.theme.button1};
    border-radius:12px;
    ${({theme }) => theme.MEDIA.upToMinimalSmall`
      width: 25rem;
      height: 6rem;
    `}
`

export const DialogConUpIn = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:flex-start;
`

export const ConImg = styled.img`
    height: 24px;
    width: 24px;
    padding-left:10px;
    ${({theme }) => theme.MEDIA.upToMinimalSmall`
      padding-left:5px;
    `}
`

export const ConText = styled.span`
    padding-left:10px;
    color:${props => props.theme.text3};;
    font-size:2.5em;
    font-weight:545;
    letter-spacing:1px;
    ${({theme }) => theme.MEDIA.upToMinimalSmall`
      font-size:2.2em;
    `}
`

export const ConButStyOut = styled.div`
   padding-right:10px;
   ${({theme }) => theme.MEDIA.upToMinimalSmall`
      padding-right:5px;
    `}
`

export const ConButStyButton = styled.div`
   
    display :flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 7rem; 
    height: 3rem;
    border: 1px solid ${props => props.theme.button1};
    border-radius: 15px;
    box-shadow: inset 0px 0px 14px -3px ${props => props.theme.button2};
   
    text-shadow: inset 0px 1px 0px #ced9bf;
    position: relative;
    cursor: pointer;
    :hover {
            background: linear-gradient(${props => props.theme.button3},${props => props.theme.button4});
     }
    ${({theme }) => theme.MEDIA.upToMinimalSmall`
      width: 6rem; 
      height: 2.5rem;
    `}
`

export const ConButStyFront = styled.div`
    font-size:2.5em;
    font-weight:9; 
    letter-spacing:1px; 
    text-align:center;
    padding:0 10px 0 10px;
   
    color: ${props => props.theme.text2};
    opacity:0.8;
    ${({theme }) => theme.MEDIA.upToMinimalSmall`
      font-size:2.2em;
      padding:0 5px 0 5px;
    `}
`

export const IntroOut = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 8rem;
    width:40rem;
    margin-bottom:0.5rem;
    border: 1px solid ${props => props.theme.button1};
    border-radius:12px;
    ${({theme }) => theme.MEDIA.upToMinimalSmall`
      width: 25rem;
      height: 6rem;
    `}
`

export const IntroText = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:flex-start;
`

export const IntroTextTitle = styled.span`
    color: ${props => props.theme.text1};
    padding-left:1.2rem;
    padding-bottom:0.8rem;
    font-size:2.5em;
    font-weight:545;
    ${({theme }) => theme.MEDIA.upToMinimalSmall`
      font-size:2.2em;
      padding-left:6px;
    `}
`

export const IntroTextContent = styled.span`
    color: ${props => props.theme.text1};
    padding-left:1.2rem;
    font-size:1.2rem;
    font-weight:545;
    ${({theme }) => theme.MEDIA.upToMinimalSmall`
      font-size:2em;
      padding-left:6px;
    `}
`

export const IntroImgOut = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding-right:1.2rem;
    ${({theme }) => theme.MEDIA.upToMinimalSmall`
      padding-right:6px;
    `}
`

export const IntroImg = styled.img`
    height: 24px;
    width: 24px;
`
export const DIALOG = {
    DialogContainer,
    DialogOut,
    DialogOutBox,
    DialogTitle,
    DialogTitleText,
    DeleteButton,
    DialogUpDownOut,
    DialogConUpOut,
    DialogConUpIn,
    ConImg,
    ConText,
    ConButStyOut,
    ConButStyButton,
    ConButStyFront,
    IntroOut,
    IntroText,
    IntroTextTitle,
    IntroTextContent,
    IntroImgOut,
    IntroImg
}