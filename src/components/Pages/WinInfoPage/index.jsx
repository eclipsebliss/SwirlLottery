
import React, { useState, useEffect, useRef } from 'react'
import { utils } from 'ethers'
import styled from 'styled-components'
import { useContractRead, useAccount } from 'wagmi'
import { THREEDADDRESS } from '../../../constants'
import ThreeDjson from '../../../build/ThreeD.json'
import { VerScatter } from '../../../BaseStyle/LayoutSty'
import { useNetwork } from 'wagmi'

const WinInfoOut = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    width: 25%;
    height: 93vh;
    transform:translateY(7vh);
    ${({theme }) => theme.MEDIA.upToLarge`width: 100%;justify-content: center;`}
    ${({theme }) => theme.MEDIA.upToMinimalSmall` height: 100vh; transform:translateY(0);`}
   
   
`
const WinInfo = styled(VerScatter)`
    width: 30rem;
    max-height: 38rem;
    border: 1px solid ${props => props.theme.button1};
    border-radius: 12px;
    box-shadow: inset 0px 0px 14px -3px ${props => props.theme.button2};
    position: relative;
    ${({ theme }) => theme.MEDIA.upToLarge` margin-top:2px; margin-left:0;`}
   
    margin-left:10rem;
    z-index: 5;
`
const WinInfoIn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 38rem;
`
const Titile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 30rem;
    height: 4rem;
    border-bottom: 1px solid ${props => props.theme.button1};
`
const TitileText = styled.span`
    font-size: 3em;
    font-weight: 600;
    letter-spacing:1px; 
    color:${props => props.theme.text4};
    opacity:0.85;
`
const InputCouShow = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    width: 29rem;
    padding: 0.5rem 0.5rem 0 0.5rem;
    height: 3rem;
`
const ShowCouOut = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
    width: 10rem;
    gap:5px;
`
const InputCouOut = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
    width: 9rem;
`
const SeachButOut = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
    width: 9rem;
`
const MiddleText = styled.span`
    font-size: 2.5em; 
    font-weight: 600;
    color:${props => props.theme.text2};
    letter-spacing:1px; 
    opacity:0.85; 
`
const CoupleNumber = styled.span`
    font-size: 4em;
    font-weight: 550;
    letter-spacing:1px; 
    color:${props => props.theme.text1};
    padding: 0 0 1px 0;
    opacity:0.85; 
`
const InputCouSty = styled.input`
    background: transparent;
    border:1px solid ${props => props.theme.button1};
    color:${props => props.theme.text1};
    height: 2rem;
    width: 3rem;
    padding-left:3px;
   
`
const SeachButton = styled.div`
   
    display :flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 5rem; 
    height: 2.2rem;
    border: 1px solid ${props => props.theme.button1};
    border-radius: 15px;
    box-shadow: inset 0px 0px 14px -3px ${props => props.theme.button2};
   
    text-shadow: inset 0px 1px 0px #ced9bf;
    position: relative;
    cursor: pointer;
    :hover {
            background: linear-gradient(${props => props.theme.button3},${props => props.theme.button4});
     }
`
const SeachButFront = styled.span`
    font-size:1.5em;
    font-weight:9; 
    letter-spacing:1px; 
    text-align:center;
    padding:0 5px 0 5px;
   
    color: ${props => props.theme.text2};
    opacity:1;
`
const WinContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding:0 0.5rem 0.5rem 0.5rem;
    width: 29rem;
    height: 15rem;
`
const WinDetailOut = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-between;
    width: 28rem;
    height:15rem;
    color: ${props => props.theme.text1};
    border-bottom: 1px solid ${props => props.theme.button1};
`
const WinDetailSig = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 21rem;
    height: 2rem;   
`
const SmallText = styled(MiddleText)`
    font-size: 2em;
`
const WinInfoNumber = styled(CoupleNumber)`
    font-size: 2em;
`

const IntroductOut = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.5rem 0.5rem 0.5rem;
    width: 29rem;
    height: 16rem;   
`
const IntroContent = styled.p`
    font-size: 2em; 
    font-weight: 600;
    color:${props => props.theme.text1};
    text-indent: 2em; 
    opacity:0.85;   
`

const Prompt = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 30rem;
    height: 15rem;
`

export default function WinInfoPage() {
    const { connector, isConnected } = useAccount();
    const [winPeriod, setWinPeriod] = useState('');
    const [winPerValue, setWinPerValue] = useState('')
    const [isWinInput, setIsWinInput] = useState(false)
    const winInputRef = useRef(null)
    const { chain } = useNetwork()
    
    const { data: round } = useContractRead({
        address: THREEDADDRESS[chain?.id],
        abi: ThreeDjson.abi,
        functionName: 'round',
        watch: true,
    })
    
    const { data: IndexHis, isSuccess, isError, isLoading } = useContractRead({
        address: THREEDADDRESS[chain?.id],
        abi: ThreeDjson.abi,
        functionName: 'readLotteriesHis',
        args: [winPeriod],
        watch: true,
    })

    
    useEffect(() => {
        if (isConnected && !!connector !== false) {
            setWinPerValue(Number(round) - 1)
            setWinPeriod(Number(round) - 1)
        } else {
            setWinPerValue('')
            setWinPeriod('')
        }
        
    }, [connector, round])

    
    useEffect(() => {
        if (isConnected && !!connector !== false) {
            if (isWinInput) {
                setWinPeriod(winPerValue)
            } else {
                return
            }
        } else {
            setWinPeriod('')
        }
        
    }, [isWinInput, IndexHis])

    
    function handlePeriodKeyUp(event) {
        
        if (event.key !== 'Enter') return;
        
        if (!winPerValue) return;
        if (winPerValue > 0) {
            setWinPerValue(winPerValue)
        } else {
            setWinPerValue(1);
        }
        setIsWinInput(false) 
        winInputRef.current.blur() 
    }

    
    function handlePeriodBlur() {
        
        if (!winPerValue) return;
        if (winPerValue > 0) {
            setWinPerValue(winPerValue)
        } else {
            setWinPerValue(1);
        }
        setIsWinInput(false) 
        winInputRef.current.blur() 
    }

    
    function winSeachSub() {
        setIsWinInput(true)
    }

    return (
        <WinInfoOut>
            <WinInfo>
                <WinInfoIn>
                    <Titile>
                        <TitileText>中奖总榜</TitileText>
                    </Titile>
                    <InputCouShow>
                        <ShowCouOut>
                            <MiddleText>第</MiddleText>
                            <CoupleNumber>{winPeriod ? winPeriod.toString() : ''}</CoupleNumber>
                            <MiddleText>期</MiddleText>
                        </ShowCouOut>
                        <InputCouOut>
                            <MiddleText>期数：</MiddleText>
                            <InputCouSty ref={winInputRef} value={winPerValue} onBlur={handlePeriodBlur} onKeyUp={handlePeriodKeyUp} onChange={e => setWinPerValue(e.target.value)} type="number" required="required" />
                        </InputCouOut>
                        <SeachButOut>
                            <SeachButton onClick={winSeachSub}>
                                <SeachButFront>查询</SeachButFront>
                            </SeachButton>
                        </SeachButOut>
                    </InputCouShow>
                    <WinContent>
                        {
                            (isConnected && !!connector !== false) ? (
                                isLoading ? (
                                    <Prompt>
                                        <MiddleText>加载中...</MiddleText>
                                    </Prompt>

                                ) : isError ? (
                                    <Prompt>
                                        <MiddleText>发生错误...</MiddleText>
                                    </Prompt>
                                ) : isSuccess ? (
                                    <WinDetailOut>
                                        <WinDetailSig>
                                            <SmallText>本期中奖号码:</SmallText>
                                            <WinInfoNumber style={{ "letterSpacing": "3px" }}>{IndexHis[0].map((nub) => (nub.toString()))}</WinInfoNumber>
                                        </WinDetailSig>
                                        <WinDetailSig>
                                            <SmallText>本期奖金池:</SmallText>
                                            <WinInfoNumber >{utils.formatEther(IndexHis[1].toString()).substring(0, 5)}</WinInfoNumber>
                                            <SmallText>ETH</SmallText>
                                        </WinDetailSig>
                                        <WinDetailSig>
                                            <SmallText>本期总中奖注数:</SmallText>
                                            <WinInfoNumber>{(IndexHis[2] + IndexHis[3] + IndexHis[4]).toString()}</WinInfoNumber>
                                            <SmallText>注</SmallText>
                                        </WinDetailSig>
                                        <WinDetailSig>
                                            <SmallText>一等奖中奖注数:</SmallText>
                                            <WinInfoNumber>{IndexHis[2].toString()}</WinInfoNumber>
                                            <SmallText>注</SmallText>
                                        </WinDetailSig>
                                        <WinDetailSig>
                                            <SmallText>二等奖中奖注数:</SmallText>
                                            <WinInfoNumber>{IndexHis[3].toString()}</WinInfoNumber>
                                            <SmallText>注</SmallText>
                                        </WinDetailSig>
                                        <WinDetailSig>
                                            <SmallText>三等奖中奖注数:</SmallText>
                                            <WinInfoNumber>{IndexHis[4].toString()}</WinInfoNumber>
                                            <SmallText>注</SmallText>
                                        </WinDetailSig>
                                    </WinDetailOut>
                                ) :
                                    undefined
                            ) : (
                                <Prompt>
                                    <MiddleText>请连接钱包...</MiddleText>
                                </Prompt>

                            )
                        }
                    </WinContent>
                    <IntroductOut>
                        <MiddleText>玩法介绍：</MiddleText>
                        <IntroContent>区块链3D彩票：透明公正，合约已公开，欢迎使用。</IntroContent>
                        <IntroContent>玩家：每次选取0-9的三个数字小球（三个小球可以相同），可以投多注，每注消耗0.001ETH。</IntroContent>
                        <IntroContent>开奖：每10分钟自动开奖一次，三个小球数字全中，为一等奖。两个小球数字全中，为二等奖。一个小球数字全中，为三等奖。以上均不限顺序。</IntroContent>

                    </IntroductOut>
                </WinInfoIn>
            </WinInfo>
        </WinInfoOut>
    )
}
