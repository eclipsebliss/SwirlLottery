
import styled from "styled-components";


export const Littleball = styled.div`
    display: flex;
    width: 8rem;
    padding-top: 10px;
    gap: 5px;
    ${({ theme }) => theme.MEDIA.upToMinimalSmall`
      display: flex;
      flex-direction:row;
      align-items: center;
      justify-content:space-between;
      gap:0;
    `}
`
export const BallRed = styled.div`
    background: radial-gradient(circle at 7px 8px,#fd848adc,rgb(224, 8, 8),rgb(150, 2, 2),rgb(44, 0, 0),rgb(3, 0, 0));
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const BallSpan = styled.span`
    color: white;
    height: 20px;
    width: 8px;
    font-size: 13px;
    font-weight: 540;
    font-family: 'smiley sans';
    opacity:0.9;
`

export const BetNumOut = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center; 
    max-width: 12rem;
    padding-top: 10px;
    gap: 6px;
`
export const BetNumText = styled.span`
    font-size: 2.5em; 
    font-weight: 600;
    color:${props => props.theme.text2};
    font-family: 'smiley sans';
    opacity:0.85; 
`
export const BetNumber = styled.span`
    font-size: 4em;
    font-weight: 550;
    letter-spacing:1px; 
    font-family: 'smiley sans';
    color:${props => props.theme.text1};
    padding: 0 0 1px 0;
    opacity:0.85; 
`