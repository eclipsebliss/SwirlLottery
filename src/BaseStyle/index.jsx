import styled from "styled-components";

export const BaseButton = styled.div`
    border: 1px solid ${props => props.theme.button1};
    border-radius: 15px;
    box-shadow: inset 0px 0px 14px -3px ${props => props.theme.button2};
   
   
   
   
    position: relative;
    cursor: pointer;
    :hover {
            background: linear-gradient(${props => props.theme.button3},${props => props.theme.button4});
     }   
`
export const BaseButtonFront = styled.div`
  
   display :flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   text-align:center;
   font-size:3em;
   font-weight:9; 
   letter-spacing:1px; 
   padding:0 10px 0 10px;
   opacity:0.85;
`