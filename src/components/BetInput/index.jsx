import React, { useState, useRef, Fragment, createContext } from 'react'
import styled, { keyframes } from 'styled-components'
import { BaseButton, BaseButtonFront } from '../../BaseStyle'
import { parseEther } from 'viem'
import { useContractWrite } from 'wagmi'
import ThreeDjson from '../../build/ThreeD.json'
import { THREEDADDRESS } from '../../constants'
import { useTranslation } from 'react-i18next'
import DialogConnect from '../Dialog'
import BettingButton from '../BettingButton'

import { Littleball, BallRed, BallSpan, BetNumOut, BetNumText, BetNumber } from '../../BaseStyle/BallNumSty'
import { FLEXTYPE } from '../../BaseStyle/LayoutSty'
import { useNetwork } from 'wagmi'

const BetInputOut = styled(FLEXTYPE.HorCenter)`
    width: 54rem;
    height: 5rem;
    ${({ theme }) => theme.MEDIA.upToMedium`width: 50rem;`}   
    ${({ theme }) => theme.MEDIA.upToSmall`width: 44rem;height: 10rem;flex-direction:column;align-items: center;justify-content: space-between;`} 
    ${({ theme }) => theme.MEDIA.upToMinimalSmall`width:32.5rem;height: 16rem;`} 
    padding: 0 1rem 1rem 1rem;
    font-family: 'smiley sans';
`
const animate = keyframes`
    0%{
        background-position-x: 0;
    }
    100%{
        background-position-x: 10rem;
    }
`
const InputOut = styled(FLEXTYPE.HorScatter)`
    width: 40rem;
    ${({ theme }) => theme.MEDIA.upToMedium`width: 37rem;`} 
    ${({ theme }) => theme.MEDIA.upToSmall`width: 44rem;`} 
    ${({ theme }) => theme.MEDIA.upToMinimalSmall`height:12rem;width: 32rem;flex-direction:column;align-items: center;justify-content: space-around; `} 
`
const InputIn = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width:20rem;
    ${({ theme }) => theme.MEDIA.upToMedium`width: 18.5rem;`}
    ${({ theme }) => theme.MEDIA.upToSmall`width: 22rem;`}
    ${({ theme }) => theme.MEDIA.upToMinimalSmall`width: 30rem;`} 
`
const InputBox = styled.div`
    position: relative;
    width: 10rem;
    input{
        width: 100%;
        background: transparent;
        color:${props => props.theme.text1};
        border: none;
        outline: none;
        box-shadow: none;
        font-size: 1.5em;
        letter-spacing: 1em;
        padding: 12px 0 6px; 
    }
    span{
        position: absolute;
        left: 0;
        padding: 10px 0 5px;
        color:${props => props.theme.text1};
        text-transform: uppercase;
        pointer-events: none;
        letter-spacing: 0.1em;
        font-size: 2em;
        transition: 0.55s;
        opacity: 0.7;
    }
    input:valid ~ span,
    input:focus ~ span{
        color: #2196f3;
        transform: translateY(-16px);
        font-size: 1.5em;  
    }

    i{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background:${props => props.theme.text1};
        overflow: hidden;
    }

    i::before{
        content: '';
        position: absolute;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg,#35cfe4,#1ab977,#e6831f,#bae73d,#35cfe4);
        animation: ${animate} 2s linear infinite;
        transition: 0.5s;  
    }
    input:valid ~ i::before,
    input:focus ~ i::before{
        left: 0;
    }
`
const ButOut = styled(FLEXTYPE.HorScatter)`
    width: 17rem;
    padding-left: 1rem;
    ${({ theme }) => theme.MEDIA.upToSmall`width: 44rem;padding-left: 0;`}
    ${({ theme }) => theme.MEDIA.upToMinimalSmall`width: 32rem;`}  
`
const BetButOut = styled(FLEXTYPE.HorCenter)`
    padding-top: 10px;
    ${({ theme }) => theme.MEDIA.upToMinimalSmall`width: 15rem;`} 
`
const BetButton = styled(BaseButton)`
    display: flex;
    align-items:center;
    justify-content: center;  
    width: 6rem;
    height: 2.5rem; 
    ${({ theme }) => theme.MEDIA.upToMedium`width: 5.5rem;`} 
    ${({ theme }) => theme.MEDIA.upToSmall`width: 20rem;height: 4rem; `}
    ${({ theme }) => theme.MEDIA.upToMinimalSmall`width: 15rem;`}
`
const BetButtonFront = styled(BaseButtonFront)`
    font-size: 2.5em;
    ${({ theme }) => theme.MEDIA.upToMedium`font-size: 2em;`} 
    ${({ theme }) => theme.MEDIA.upToSmall`font-size: 2.8em; `}
    ${({ theme }) => theme.MEDIA.upToMinimalSmall`font-size: 2.5em;`}
    color: ${props => props.theme.text2};
`
const ProMesOut = styled(FLEXTYPE.HorCenter)`
    padding-top: 10px; 
    max-width:17rem;
`
const ProMesFro = styled.span`
    font-size: 2em;
    font-weight: 600;
    color: red;
    opacity: 0.85;
`
const ConnectBetOut = styled(FLEXTYPE.HorScatter)`
    width: 54.5rem;
    padding:0 0.5rem 1rem 0.5rem;
    ${({ theme }) => theme.MEDIA.upToMedium`width: 51rem;`}   
    ${({ theme }) => theme.MEDIA.upToSmall`width: 44rem;max-height:14rem;gap:0.5rem;flex-direction:column;align-items: center;justify-content: space-between;`}
    ${({ theme }) => theme.MEDIA.upToMinimalSmall`width: 32.5rem;`}
`

export const BetStuContext = createContext()

export default function BetInput() {
    const [inputArray, setInputArray] = useState([0, 0, 0]); 
    const [inputValue, setInputValue] = useState('000'); 
    const [couple, setCouple] = useState(0); 
    const [coupleValue, setCoupleValue] = useState('0'); 
    const [isConfirm, setIsConfirm] = useState(false); 
    const [betStatus, setBet] = useState(false) 
    const [isBetting, setIsBetting] = useState(false) 

    const [value, setValue] = useState(0) 
    const [isAllEmpty, setIsAllEmpty] = useState(false) 
    const [isInput, setIsInput] = useState(false) 
    const [isNumber, setIsNumber] = useState(false) 
    const [isCouple, setIsCouple] = useState(false) 
    const coupleRef = useRef()
    const threeNumberRef = useRef()
    const { t } = useTranslation();
    const { chain } = useNetwork()

    console.log('address=',THREEDADDRESS[chain?.id])

    
    const { write: buyLottery, isLoading: buyLoading, isError: buyError, isSuccess: buySuccess } = useContractWrite({
        address: THREEDADDRESS[chain?.id],
        abi: ThreeDjson.abi,
        functionName: 'buyLottery',
        gas: 1_000_000n,
        args: [inputArray, couple],
        value: parseEther(value.toString()),
    })


    
    function handleInputChange(event) {
        setInputValue(event.target.value);
        setIsConfirm(false) 
    }

    
    function handleCoupleChange(event) {
        setCoupleValue(event.target.value);
        setIsConfirm(false) 
    }

    
    const generateThreeRandoms = () => {
        
        setIsInput(false)
        setIsNumber(false)
        setIsAllEmpty(false)
        setIsCouple(false)
        
        setIsConfirm(false)
        
        const digit1 = Math.floor(Math.random() * 10); 
        const digit2 = Math.floor(Math.random() * 10); 
        const digit3 = Math.floor(Math.random() * 10); 

        
        const randomNumber = digit1.toString() + digit2.toString() + digit3.toString()
        setInputValue(randomNumber)
        setCoupleValue('1')
    }
    
    const confirmInputs = () => {
        
        setInputArray([])
        setCouple(0)
        setValue(0)

        const regexInputNumber = /^\d{3}$/; 
        const regexCoupleNumber = /^[1-9]\d*$/; 
        const coupleNumber = coupleRef.current.value 
        const inputNumber = threeNumberRef.current.value 
        const valueCurrent = (1 * coupleNumber) / 1000 

        
        if (!!inputNumber === false && !!coupleNumber === false) {
            setIsAllEmpty(true)
            return
        } else if (!!inputNumber === true && !!coupleNumber === false) {
            setIsCouple(true)
            return
        } else if (!!inputNumber === false && !!coupleNumber === true) {
            setIsInput(true)
            return
            
        } else {
            let regexInput = regexInputNumber.test(inputNumber)
            let regexCouple = regexCoupleNumber.test(coupleNumber)
            
            
            if (regexInput === true && regexCouple === true) {
                const inputArrayNumber = inputNumber.split("").map(num => parseInt(num))
                setInputArray(inputArrayNumber)
                setCouple(coupleNumber)
                setValue(valueCurrent)
                setIsConfirm(true)
            } else if (regexInput === false && regexCouple === true) {
                setIsNumber(true)
                setIsCouple(false)
                return
            } else if (regexInput === true && regexCouple === false) {
                setIsCouple(true)
                setIsNumber(false)
                return
            } else {
                setIsNumber(true)
                setIsCouple(true)
                return
            }
        }
    }
    
    function GetInputShow() {
        if (isAllEmpty) {
            return (<ProMesOut><ProMesFro>{t('ProMes1')}</ProMesFro></ProMesOut>)
        } else if (isInput) {
            return (<ProMesOut><ProMesFro>{t('ProMes2')}</ProMesFro></ProMesOut>)
        } else if (isNumber) {
            return (<ProMesOut><ProMesFro>{t('ProMes3')}</ProMesFro></ProMesOut>)
        } else {
            return (
                
                <Littleball>
                    {
                        (inputValue.split("").map(num => parseInt(num))).map((number, index) => (
                            <BallRed key={index}><BallSpan>{number}</BallSpan></BallRed>
                        ))
                    }
                </Littleball >
            )
        }
    }

    
    function GetCoupleShow() {
        if (isAllEmpty) {
            return (<ProMesOut><ProMesFro>{t('ProMes1')}</ProMesFro></ProMesOut>)
        } else if (isCouple) {
            return (<ProMesOut><ProMesFro>{t('ProMes4')}</ProMesFro></ProMesOut>)
        } else {
            return (
                <BetNumOut>
                    <BetNumText>{t('BetNum1')}</BetNumText>
                    <BetNumber>{coupleValue}</BetNumber>
                    <BetNumText>{t('BetNum2')}</BetNumText>
                </BetNumOut>
            )
        }
    }

    
    const inputClick = (event) => {
        if (threeNumberRef.current && threeNumberRef.current.contains(event.target)) {
            setIsInput(false)
            setIsNumber(false)
            setIsAllEmpty(false)
        }
    }

    
    const coupleClick = (event) => {
        if (coupleRef.current && coupleRef.current.contains(event.target)) {
            setIsCouple(false)
            setIsAllEmpty(false)
        }
    }

    return (
        <Fragment>
            <BetInputOut>
                <InputOut>
                    <InputIn>
                        <InputBox onClick={inputClick}>
                            <input value={inputValue} ref={threeNumberRef} onChange={handleInputChange} type="text" required="required" />
                            <span>{t('Enter numbers')}</span>
                            <i></i>
                        </InputBox>
                        <GetInputShow />
                    </InputIn>
                    <InputIn>
                        <InputBox onClick={coupleClick}>
                            <input value={coupleValue} ref={coupleRef} onChange={handleCoupleChange} type="text" required="required" />
                            <span>{t('How much')}</span>
                            <i></i>
                        </InputBox>
                        <GetCoupleShow />
                    </InputIn>
                </InputOut>
                <ButOut>
                    <BetButOut>
                        <BetButton>
                            <BetButtonFront onClick={generateThreeRandoms}>{t('Random')}</BetButtonFront>
                        </BetButton>
                    </BetButOut>
                    <BetButOut>
                        <BetButton>
                            <BetButtonFront onClick={confirmInputs}>{t('Confirm')}</BetButtonFront>
                        </BetButton>
                    </BetButOut>
                </ButOut>
            </BetInputOut>
            <ConnectBetOut>
                <BetStuContext.Provider value={{ buyLottery, setBet, setIsBetting, isBetting, isConfirm, betStatus, buyLoading, buySuccess, buyError, coupleValue, inputValue }}>
                    <BettingButton />
                </BetStuContext.Provider>
                <DialogConnect />
            </ConnectBetOut>
        </Fragment>

    )
}