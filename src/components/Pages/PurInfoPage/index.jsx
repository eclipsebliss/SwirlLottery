
import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useContractRead, useAccount } from 'wagmi'
import { utils } from 'ethers'
import { THREEDADDRESS } from '../../../constants'
import ThreeDjson from '../../../build/ThreeD.json'
import { VerScatter } from '../../../BaseStyle/LayoutSty'
import { useNetwork } from 'wagmi'

const PurInfoOut = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    width: 25%;
    height: 93vh;
    transform:translateY(7vh);
    ${({ theme }) => theme.MEDIA.upToLarge`width: 100%;justify-content: center;`}
    ${({ theme }) => theme.MEDIA.upToMinimalSmall` height: 100vh; transform:translateY(0);`}
   
   
`
const PurInfo = styled(VerScatter)`
    width: 30rem;
    max-height: 38rem;
    border: 1px solid ${props => props.theme.button1};
    border-radius: 12px;
    box-shadow: inset 0px 0px 14px -3px ${props => props.theme.button2};
    position: relative;
    ${({ theme }) => theme.MEDIA.upToLarge` margin-top:2px; margin-right:0;`}
   
    margin-right:10rem;
    z-index: 5;
`
const PurInfoIn = styled.div`
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
const InputCouAdd = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    width: 29rem;
    padding: 0.5rem 0.5rem 0 0.5rem;
    height: 3rem;
`
const InputCouOut = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
    width: 9rem;
`
const InputAddOut = styled.div`
    display: flex;
    flex-direction:row;
    align-items: flex-end;
    justify-content: center;
    width: 14rem;
`
const SeachButOut = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
    width: 6rem;
`
const MiddleText = styled.span`
    font-size: 2.5em; 
    font-weight: 600;
    color:${props => props.theme.text2};
    letter-spacing:1px; 
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
const SeachAddText = styled.span`
    font-size: 1.5em; 
    font-weight: 600;
    color:${props => props.theme.text1};
    letter-spacing:1px; 
    opacity:0.85; 
    padding-bottom:2px;
`
const PurContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding:0.5rem 1rem 1rem 1rem;
    width: 28rem;
    height: 24rem;
`
const PurDetailOut = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
    width: 28rem;
    height: 12rem;
    color: ${props => props.theme.text1};
    border-bottom: 1px solid ${props => props.theme.button1};
`
const PurDetailSig = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 28rem;
    height: 2rem;   
`
const PurDetail = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 14rem;
    height: 2rem;   
`

const SmallText = styled(MiddleText)`
    font-size: 2em;
`
const NumberText = styled.span`
    font-size: 2em;
    font-weight: 550;
    color:${props => props.theme.text1};
    opacity:0.85;
`
const Prompt = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 28rem;
    height: 15rem;
`
const PageOut = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
    width: 29rem;
    padding: 0 0.5rem 0.5rem 0.5rem;
    height: 3rem;
    gap: 2rem;
`
const PageIn = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    width: 7rem;
    height: 3rem;
`
const PageInput = styled(InputCouSty)`
    height: 1.8rem;
    width: 1.8rem;
    padding: 0;
    text-align: center;
    margin-top:2px;
`
export default function PurInfoPage() {
    const { address, connector, isConnected } = useAccount();
    const [purPeriod, setPurPeriod] = useState('');
    const [purPerValue, setPurPerValue] = useState('');
    const [isPerInput, setIsPerInput] = useState(false);
    const [maxPage, setMaxPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const perInputRef = useRef(null);
    const pageSize = 2; 
    const pageInputRef = useRef(null);
    const { chain } = useNetwork()

    
    const { data: round } = useContractRead({
        address: THREEDADDRESS[chain?.id],
        abi: ThreeDjson.abi,
        functionName: 'round',
        watch: true,
    })
    
    const { data: DetailHis, isSuccess, isError, isLoading } = useContractRead({
        address: THREEDADDRESS[chain?.id],
        abi: ThreeDjson.abi,
        functionName: 'readAllHis',
        args: [purPeriod, address],
        watch: true,
    })
    
    const { data: IndexHis } = useContractRead({
        address: THREEDADDRESS[chain?.id],
        abi: ThreeDjson.abi,
        functionName: 'readLotteriesHis',
        args: [purPeriod],
        watch: true,
    })


    
    useEffect(() => {
        if (isConnected && !!connector !== false) {
            setPurPerValue(Number(round) - 1)
            setPurPeriod(Number(round) - 1)
        } else {
            setPurPerValue('')
            setPurPeriod('')
            setMaxPage('')
        }
        
    }, [connector, round, address])
    
    useEffect(() => {
        if (isConnected && !!connector !== false) {
            if (isPerInput) {
                setPurPeriod(purPerValue)
                if (!!DetailHis) { 
                    const pageCount = Math.ceil(DetailHis.length / pageSize); 
                    setMaxPage(pageCount)
                } else {
                    setMaxPage(0)
                }
            } else {
                return
            }
        } else {
            setPurPeriod('')
        }
        
    }, [isPerInput, DetailHis])

    
    useEffect(() => {
        if (isConnected && !!connector !== false) {
            if (!!DetailHis) {
                const pageCount = Math.ceil(DetailHis.length / pageSize); 
                setMaxPage(pageCount)
            } else {
                setMaxPage(0)
            }
        } else {
            setMaxPage('')
        }
        
    }, [connector, round, address, DetailHis])

    
    function handlePeriodKeyUp(event) {
        
        if (event.key !== 'Enter') return;
        
        if (!purPerValue) return;
        if (purPerValue > 0) {
            setPurPerValue(purPerValue);
        } else {
            setPurPerValue(1);
        }
        setIsPerInput(false) 
        perInputRef.current.blur() 
    }

    
    function handlePeriodBlur() {
        
        if (!purPerValue) return;
        if (purPerValue > 0) {
            setPurPerValue(purPerValue);
        } else {
            setPurPerValue(1);
        }
        setIsPerInput(false) 
        perInputRef.current.blur() 
    }

    
    function purSeachSub() {
        setIsPerInput(true)
    }

    
    function handlePageKeyUp(event) {
        
        if (event.key !== 'Enter') return;
        
        if (!currentPage) return;
        
        if (currentPage > 0 && currentPage <= maxPage) {
            setCurrentPage(currentPage);
        } else {
            setCurrentPage(1);
        }
        pageInputRef.current.blur() 
    }

    
    function handlePageBlur() {
        
        if (!currentPage) return;
        
        if (currentPage > 0 && currentPage <= maxPage) {
            setCurrentPage(currentPage);
        } else {
            setCurrentPage(1);
        }
        pageInputRef.current.blur() 
    }

    
    function parseAddress(_addr) {
        if (!!_addr) {
            const addrlen = _addr.length;
            const newAddress = _addr.substring(0, 4) + "..." + _addr.substring(addrlen - 4)
            return newAddress
        } else {
            return ''
        }
    }

    function getAwardType(_indexNumber) {
        switch (_indexNumber) {
            case '1':
                return "一等奖"
            case '2':
                return "二等奖"
            case '3':
                return "三等奖"
            case '0':
                return "未中奖"
            default:
                break;
        }
    }


    function getAmount(_indexNumber, _betsCouple) {
        if (!!IndexHis) {
            const totalAmount = Number(IndexHis[1])
            if (_indexNumber === '1') {
                if (IndexHis[2] > 0) {
                    return (totalAmount * 0.4 / (Number(IndexHis[2]))) * (Number(_betsCouple))
                } else {
                    return 0
                }
            } else if (_indexNumber === '2') {
                if (IndexHis[3] > 0) {
                    return (totalAmount * 0.2 / (Number(IndexHis[3]))) * (Number(_betsCouple))
                } else {
                    return 0
                }
            } else if (_indexNumber === '3') {
                if (IndexHis[4] > 0) {
                    return (totalAmount * 0.1 / (Number(IndexHis[4]))) * (Number(_betsCouple))
                } else {
                    return 0
                }
            } else if (_indexNumber === '0') {
                return 0
            } else {
                return 0
            }
        } else {
            return 0
        }
    }
    return (
        <PurInfoOut>
            <PurInfo>
                <PurInfoIn>
                    <Titile>
                        <TitileText>中奖记录</TitileText>
                    </Titile>
                    <InputCouAdd>
                        <InputCouOut>
                            <MiddleText>期数：</MiddleText>
                            <InputCouSty ref={perInputRef} value={purPerValue} onBlur={handlePeriodBlur} onKeyUp={handlePeriodKeyUp} onChange={e => setPurPerValue(e.target.value)} type="number" required="required" />
                        </InputCouOut>
                        <InputAddOut>
                            <MiddleText>地址：</MiddleText>
                            <SeachAddText>{address ? parseAddress(address) : ''}</SeachAddText>
                        </InputAddOut>
                        <SeachButOut>
                            <SeachButton onClick={purSeachSub}>
                                <SeachButFront>查询</SeachButFront>
                            </SeachButton>
                        </SeachButOut>
                    </InputCouAdd>
                    <PurContent>
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
                                    DetailHis?.slice((currentPage - 1) * pageSize, (currentPage - 1) * pageSize + pageSize).map((item, index) => (
                                        <PurDetailOut key={index}>
                                            <PurDetailSig>
                                                <PurDetail><SmallText>中奖状态：</SmallText></PurDetail>
                                                <PurDetail><NumberText>{item?.claimed === true ? '是' : '否'}</NumberText></PurDetail>
                                            </PurDetailSig>
                                            <PurDetailSig>
                                                <PurDetail><SmallText>投注号码：</SmallText></PurDetail>
                                                <PurDetail><NumberText style={{ "letterSpacing": "3px" }}>{item.numbers?.map((nub) => (nub.toString()))}</NumberText></PurDetail>
                                            </PurDetailSig>
                                            <PurDetailSig>
                                                <PurDetail><SmallText>中奖类型：</SmallText></PurDetail>
                                                <PurDetail><NumberText >{getAwardType(item.prizeType?.toString())}</NumberText></PurDetail>
                                            </PurDetailSig>
                                            <PurDetailSig>
                                                <PurDetail><SmallText>购买注数：</SmallText></PurDetail>
                                                <PurDetail><NumberText >{item.couple?.toString()}</NumberText></PurDetail>
                                            </PurDetailSig>
                                            <PurDetailSig>
                                                <PurDetail><SmallText>中奖金额：</SmallText></PurDetail>
                                                <PurDetail>
                                                    <NumberText >{utils.formatEther(getAmount(item.prizeType?.toString(), Number(item?.couple))?.toString()).substring(0, 9)}</NumberText>
                                                    <SmallText style={{ 'paddingLeft': '5px', "fontSize": "1.5em" }}>ETH</SmallText>
                                                </PurDetail>
                                            </PurDetailSig>
                                        </PurDetailOut>))
                                ) : undefined
                            ) : (
                                <Prompt>
                                    <MiddleText>请连接钱包...</MiddleText>
                                </Prompt>
                            )
                        }
                    </PurContent>
                    <PageOut>
                        <PageIn>
                            <MiddleText>第</MiddleText>
                            <PageInput ref={pageInputRef} value={currentPage} onBlur={handlePageBlur} onKeyUp={handlePageKeyUp} onChange={e => setCurrentPage(e.target.value)} required="required" />
                            <MiddleText>页</MiddleText>
                        </PageIn>
                        <PageIn>
                            <MiddleText>共</MiddleText>
                            <NumberText style={{ "fontSize": "2.5em", "paddingTop": "3px" }}>{maxPage}</NumberText>
                            <MiddleText>页</MiddleText>
                        </PageIn>
                    </PageOut>
                </PurInfoIn>
            </PurInfo>
        </PurInfoOut>
    )
}