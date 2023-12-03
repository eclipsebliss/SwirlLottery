import React, { useState, createContext, useEffect } from 'react'
import { Fragment } from 'react'
import HeaderMain from './HeaderMain'
import ContentMain from './ContentMain'
import styled, { ThemeProvider } from 'styled-components'
import mainTheme from '../../themes'
import { useContractRead, useContractWrite, useAccount } from 'wagmi'
import { THREEDADDRESS } from '../../constants'
import ThreeDjson from '../../build/ThreeD.json'
import BottomMain from './BottomMain'
import MediaQuery from 'react-responsive'
import { useNetwork } from 'wagmi'

const Body = styled.div`
     width: 100%;
     height: 100%; 
     display: flex;
     flex-direction: column;
`


export const MainContext = createContext()

export default function Main() {
    
    const [isTrue, setIsTrue] = useState(false);
    
    const [isDisabled, setIsDisabled] = useState(false);
    
    const [isHeiEnough, setIsHeiEnough] = useState(false);
    
    const [selectedValue, setSelectedValue] = useState('中文简体');
    const { connector, isConnected } = useAccount();
    const { chain } = useNetwork()

    useEffect(() => {
        const fristHeight = window.innerHeight
        if (fristHeight < 600) {
            setIsHeiEnough(true)
        }
    }, []);
    
    const setColor = () => {
        setIsTrue(!isTrue)
    }

    
    const { data: lastWinNumbers } = useContractRead({
        address: THREEDADDRESS[chain?.id],
        abi: ThreeDjson.abi,
        functionName: 'readLastWinNumbers',
        watch: true,
    })

    
    const { write: drawLottery } = useContractWrite({
        address: THREEDADDRESS[chain?.id],
        abi: ThreeDjson.abi,
        functionName: 'drawLottery',
        gas: 6_000_000n,
        onSuccess() {
            alert('开奖成功')
        },
        onError(error) {
            alert(`开奖失败,发生错误${error}`);

        }
    })

    return (
        <Fragment >
            <ThemeProvider theme={isTrue ? mainTheme() : mainTheme('darkMode')}>
                <MainContext.Provider value={{ setColor, setIsDisabled, drawLottery, setSelectedValue, isTrue, isDisabled, lastWinNumbers, connector, isConnected, selectedValue,isHeiEnough }}>
                    <Body>
                        <HeaderMain />
                        {/* 大于1230不渲染 */}
                        <MediaQuery query="(min-device-width: 1230px)">
                            <ContentMain />
                        </MediaQuery>
                        {/* 小于1230渲染 */}
                        <MediaQuery query="(max-device-width: 1230px)">
                            <BottomMain />
                        </MediaQuery>
                    </Body>
                </MainContext.Provider>
            </ThemeProvider>
        </Fragment>
    )
}
