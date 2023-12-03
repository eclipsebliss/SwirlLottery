import React, { useState, useEffect, createContext, useContext } from 'react'
import PrizePool from '../PrizePool';
import PrizeShak from '../PrizeShak';
import styled from 'styled-components';
import { MainContext } from '../Main';
import { TIMERANGE } from '../../constants';


const OpeningInfoShowOut = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:column;
    align-items: center;
    max-width: 55rem;
    max-height:32.5rem;
`


export const PrizeContext = createContext()

export default function OpeningInfoShow() {
    
    const { setIsDisabled, drawLottery } = useContext(MainContext)
    
    const [remainingTime, setRemainingTime] = useState(TIMERANGE); 
    
    


    useEffect(() => {
        const intervalId = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 1000);
        }, 1000);

        
        if(remainingTime === 120000){
            setIsDisabled(true)
            
        }
        
        if (remainingTime === 1000) {
            setIsDisabled(false)
        }

        
        if (remainingTime === 0) {
            setRemainingTime(TIMERANGE);
        }
        
        return () => clearInterval(intervalId);
    }, [remainingTime]);

    return (
        <OpeningInfoShowOut>
            <PrizeContext.Provider value={{ remainingTime}}>
                <PrizePool />
                <PrizeShak />
            </PrizeContext.Provider>
        </OpeningInfoShowOut>
    )
}