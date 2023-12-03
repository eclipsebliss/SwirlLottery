import React,{ Fragment,useState, createContext }  from 'react'

import DialogSelectKid from './Dialogkid/DialogSelect'
import DialogLoadingKid from './Dialogkid/DialogLoading'
import DialogErrorKid from './Dialogkid/DialogError'
import DialogDisconnectKid from './Dialogkid/DialogDisconnect'

import ConnectButton from '../ConnectButton'

import { useAccount } from 'wagmi'

import { SUPPORTED_WALLET } from '../../constants';


export const StatusContext = createContext()

export default function DialogConnect(props) {

  
  const [selectstatus, setSelect] = useState(false) 
  const [loadingstatus, setLoading] = useState(false) 
  const [errorstatus, setError] = useState(false) 
  const [disconnectstatus, setDisconnect] = useState(false) 

  
  const [isError, setisError] = useState(false) 
  const [pendingConnector, setpendingConnector] = useState(false) 
  const { connector: activeConnector, isConnected, isConnecting } = useAccount() 

  
  
  function GetDialog() {
    if (selectstatus && !isConnecting && !isError && !isConnected) {
      setLoading(true); 
      return <DialogSelectKid />
    } else if (loadingstatus && isConnecting && !isError) {
      return <DialogLoadingKid />
    } else if (errorstatus && !!isError) {
      return <DialogErrorKid />
    } else if (disconnectstatus){
      return <DialogDisconnectKid/>
    } else {
      return null
    }

  }

  
  function openDialogUn() {
    
    document.body.style.overflow = "hidden";
    setSelect(true);
    setError(true);
  }

  
  function openDialogEd() {
    console.log('调用了')
    
    document.body.style.overflow = "hidden";
    setSelect(false);
    setLoading(false);
    setisError(false);
    setDisconnect(true)
  }

  function getpendingConnector(_pendingConnector) {
    setpendingConnector(_pendingConnector);

  }

  function getisError(isError) {
    setisError(isError);
  }

  
  const getConnectorInfo = (_connectorName, _connectorType) => {
    if (!!_connectorName) {
      switch (_connectorName) {
        case 'MetaMask':
          return SUPPORTED_WALLET.METAMASK[_connectorType]
        case 'Coinbase Wallet':
          return SUPPORTED_WALLET.COINBASE[_connectorType]
        case 'WalletConnect':
          return SUPPORTED_WALLET.WALLET_CONNECT[_connectorType]
        case 'Injected':
          return SUPPORTED_WALLET.INJECTED[_connectorType]
        default:
          return SUPPORTED_WALLET.INJECTED[_connectorType]
      }
    } else {
      return undefined
    }
  }

  if (!!pendingConnector) {
    console.log('pendingConnector', pendingConnector.connector.name, 'isError:', isError, 'isConnecting:', isConnecting, 'isConnected:', isConnected)
  }

  return (
    <Fragment>
      {/* 使用 Context 的 Provider 暴露 setStatus 方法 */}
      <StatusContext.Provider value={{ setSelect, setLoading, setError, setisError, setDisconnect, getisError, getpendingConnector, getConnectorInfo, isConnected, pendingConnector, isError, activeConnector}}>
        {/* 传递打开函数到按钮组件*/}
        <ConnectButton head={props?.head}  openDialog={isConnected ? openDialogEd : openDialogUn} />
        <GetDialog />
      </StatusContext.Provider>
    </Fragment>
  )
}