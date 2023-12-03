import React, { Fragment, useState, useContext, useEffect} from 'react'
import { MainContext } from '../Main';
import styled, { css } from 'styled-components'
import { BaseButton } from '../../BaseStyle'
import { HeadAccount } from '../NetAccount';
import { useTranslation } from 'react-i18next';
import { useAccount, useNetwork } from 'wagmi'
import { LOGO } from '../../themes';
import { DIALOG } from '../../BaseStyle/DialogSty';
import { HorStart } from '../../BaseStyle/LayoutSty';
import NetSelectDialog from './NetSelectDialog';


export default function DropDownAccAdd(props) {
    const [AccAddstatus, setAccAdd] = useState(false)

    function GetDropDown(props) {
        if (AccAddstatus) {
            return <DropDownAccAddkid setAccAdd={props?.setAccAdd} />
        } else {
            return null
        }
    }

    function openAccAdd() {
        setAccAdd(true)
    }


    return (
        <Fragment>
            <HeadAccount openAccAdd={openAccAdd} head={props?.head} />
            <GetDropDown setAccAdd={setAccAdd} />
        </Fragment>
    )
}


const DialogReOut = styled(DIALOG.DialogOut)`
    top: 20.4%;
    max-height: 20rem;
    ${props => props?.isEnglish
        ? css`
        width:23.2rem;
        left: 34%;
        ${({ theme }) => theme.MEDIA.upToMedium`left: 38%;`}
        ${({ theme }) => theme.MEDIA.upToSmall`left: 68%;`} 
     `
        : css`
        width:21rem;
        left: 34%;
        ${({ theme }) => theme.MEDIA.upToMedium`left: 38%;`}
        ${({ theme }) => theme.MEDIA.upToSmall`left: 68%;`}
     `}
`

const DialogReTitle = styled(DIALOG.DialogTitle)`
    height: 3rem;
    padding: 0 1rem 0 1rem;
`

const DialogReTitleText = styled(DIALOG.DialogTitleText)`
    font-size: 2em;
`

const DropDownTextOut = styled(HorStart)`
    padding: 1rem 0 1rem  0.5rem;
`

const DropDownText = styled.span`
    letter-spacing:1px; 
    font-size:2em; 
`

const DropChangeOut = styled(HorStart)`
    padding-left:1rem;
    padding-bottom:1rem;
`


const DropDownButtonOut = styled.div`
    cursor: pointer;
`

const DropDownButton = styled(BaseButton)`
   
    display :flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 6rem; 
    height: 2rem;
    box-shadow: inset 0px 0px 14px -3px ${props => props.theme.button2};

    text-shadow: inset 0px 1px 0px #ced9bf;
`

const DropDownFront = styled.div`
    font-size:2em;
    font-weight:9; 
    letter-spacing:1px; 
    text-align:center;
    padding: 0 0.5rem 0 0.5rem;

    color: ${props => props.theme.text2};
    opacity:0.8;
`

const DropChangeText = styled.span`
    font-size:2em;
    padding-left:1rem; 
`


const DropDownAddOut = styled(HorStart)`
    padding-left:1rem;
    padding-bottom:1rem;
`
// 下拉框地址logo
const DropDownAddLogo = styled.img`
    width:2rem;
    height: 2rem;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    transform: scale(1);
    :hover {
        transform: scale(1.2);
    } 
`

const DropDownAdd = styled.div`
    font-size:2em;
    padding-left:1rem;
`

const DropDownCopyOut = styled(HorStart)`
    padding-left:1rem;
    padding-bottom:1rem;
`

const DropDownCopyLogo = styled.img`
    width:2rem;
    height: 2rem;
    transition: transform 0.1s ease-in-out;
    cursor: pointer;
    transform: scale(1);
    :active {
        transform: scale(1.2);
    } 
`

const DropDownCopyText = styled.div`
    font-size:2em;
    padding-left:1rem;
`

const DropDownIEOut = styled(HorStart)`
    padding-left:1rem;
    padding-bottom:1rem;
`

const DropDownIELogo = styled.img`
    width:2rem;
    height: 2rem;
    cursor: pointer;
    transition: transform 0.1s ease-in-out;
    transform: scale(1);
    :active {
        transform: scale(1.2);
    }
`

const DropDownIEText = styled.div`
    font-size:2em;
    padding-left:1rem;
`
export function DropDownAccAddkid(props) {

    const { address, connector, isConnected } = useAccount()
    const { chain } = useNetwork()
    const { t } = useTranslation();
    const { isTrue } = useContext(MainContext)
    const [netList, setNetList] = useState(false)
    const [netLink, setnetLink] = useState('')
    const [connectorName, setConnectorName] = useState('')

    useEffect(() => {
        setConnectorName(connector?.name)
    }, [connector])

    useEffect(() => {
        const chainUrl = chain.rpcUrls.default.http[0]
        console.log('chainUrl', chainUrl)
        if (!!chainUrl) {
            setnetLink(chainUrl)
        } else {
            setnetLink("https://etherscan.io")
        }
    }, [chain])



    function DropParseAddress(_addr) {
        const addrlen = _addr.length;
        const newAddress = _addr.substring(0, 7) + "..." + _addr.substring(addrlen - 7)
        return newAddress
    }

    const isEnglish = () => {
        var isEn = t('DropDownAccount')
        if (isEn === "Account") {
            return true
        } else {
            return false
        }
    }

    function handleClickAccAdd(event) {
        if (event.target === event.currentTarget) {

            props.setAccAdd(false);
            document.body.style.overflow = "scroll";
        }
    }


    function uninstallAccAdd() {
        props.setAccAdd(false);
        document.body.style.overflow = "scroll";
    }

    const copyAddress = (_address) => {
        if (navigator.clipboard)
            navigator.clipboard.writeText(_address).catch(e => console.error(e));
        console.log("复制成功")
    }

    function GetNetworkList() {
        if (netList) {
            return <NetSelectDialog setNetList={setNetList} />
        } else {
            return null
        }
    }

    function openNetList() {
        setNetList(true)
    }

    return (
        <Fragment>
            <DIALOG.DialogContainer onClick={handleClickAccAdd}>
                <DialogReOut isEnglish={isEnglish()}>
                    <DIALOG.DialogOutBox >
                        <DialogReTitle>
                            <DialogReTitleText>
                                {t('DropDownAccount')}
                            </DialogReTitleText>
                            <DIALOG.DeleteButton onClick={uninstallAccAdd}>
                                <svg width="17" height="17" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sc-hrWEMg jaeDeS">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </DIALOG.DeleteButton>
                        </DialogReTitle>
                        <DropDownTextOut >
                            <DropDownText>
                                {connector?.name && t('Connected Wallet', { connectorName })}
                            </DropDownText>
                        </DropDownTextOut>
                        <DropChangeOut>
                            <DropDownButtonOut onClick={openNetList}>
                                <DropDownButton>
                                    <DropDownFront>{t('Change')}</DropDownFront>
                                </DropDownButton>
                            </DropDownButtonOut>
                            <DropChangeText>{t('Switch Networks')}</DropChangeText>
                        </DropChangeOut>
                        <DropDownAddOut>
                            {isTrue ? <DropDownAddLogo src={LOGO.AccountDay} /> : <DropDownAddLogo src={LOGO.AccountNight} />}
                            <DropDownAdd>
                                {
                                    (isConnected && !!connector !== false) ? DropParseAddress(address) : undefined
                                }
                            </DropDownAdd>
                        </DropDownAddOut>
                        <DropDownCopyOut onClick={copyAddress}>
                            {isTrue ? <DropDownCopyLogo src={LOGO.CopyDay} /> : <DropDownCopyLogo src={LOGO.CopyNight} />}
                            <DropDownCopyText>{t('Copy Address')}</DropDownCopyText>
                        </DropDownCopyOut>
                        <DropDownIEOut>
                            {isTrue ? < a href={netLink} ><DropDownIELogo src={LOGO.BrowserDay} /></ a> : < a href={netLink}><DropDownIELogo src={LOGO.BrowserNight}></DropDownIELogo></ a>}
                            <DropDownIEText>{t('Browser View')}</DropDownIEText>
                        </DropDownIEOut>
                    </DIALOG.DialogOutBox>
                </DialogReOut>
            </DIALOG.DialogContainer>
            <GetNetworkList />
        </Fragment>
    )
}