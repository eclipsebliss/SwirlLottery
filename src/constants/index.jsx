import { LOGO } from '../themes';
import ThreeDjson from '../build/ThreeD.json'


export const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
export const TIMES = [0, 1, 2]; 
export const DIGITREGEXP = /\d/; 
export const THREEDADDRESS = { 
  1: '',
  56: null,
  5:'0x133b59c9a7CA35ffd94DC6EC1c07aadae62327Df',
  42161:null,
  1337:ThreeDjson.networks['5777'].address,
  11155111:'0x6f21f996C6F3A9954b728A2BbAf79B60A6d653D6'
}
export const TIMERANGE = 6 * 60 * 1000; 



export const THREEDCONTRACT = {
  address: THREEDADDRESS,
  abi: ThreeDjson.abi,
}


export const SUPPORTED_WALLET = {
  INJECTED: {
    name: 'Injected',
    icon: LOGO.InjectedLogo,
    description: "Injected Description",
  },
  METAMASK: {
    name: 'MetaMask',
    icon: LOGO.MetamaskLogo,
    description: "MetaMask Description",
  },
  WALLET_CONNECT: {
    name: 'WalletConnect',
    icon: LOGO.WalletconnectLogo,
    description: "WalletConnect Description",
    
  },
  COINBASE: {
    name: 'Coinbase Wallet',
    icon: LOGO.CoinbaseLogo,
    description: "Coinbase Wallet Description",
  }
}