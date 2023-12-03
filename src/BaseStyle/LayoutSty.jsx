
import styled from "styled-components";


export const HorCenter = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
`

export const HorScatter = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content:space-between;
`

export const HorStart = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: flex-start;
`

export const HorScatterBut = styled.button`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content:space-between;
`

export const VerCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const VerScatter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
export const FLEXTYPE =  {
    HorCenter,
    HorScatter,
    HorStart,
    HorScatterBut,
    VerCenter,
    VerScatter
}