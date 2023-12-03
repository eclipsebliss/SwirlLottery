



import { createConfig, configureChains } from 'wagmi'


import { mainnet, bsc, goerli, arbitrum, localhost, sepolia } from 'wagmi/chains'




import { alchemyProvider } from 'wagmi/providers/alchemy'
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'


import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'


const { chains, publicClient, webSocketPublicClient } = configureChains(
  
  [mainnet, bsc, goerli, arbitrum, localhost, sepolia],
  
  [
    alchemyProvider({ apiKey: 'BUwt2j22r7m4TU_Gl3NaT-VZNJv-W2eo' }),
    infuraProvider({ apiKey: '592f02085c144f5ab6ef3477b5f1715e' }),
    publicProvider()
  ],
  
  { stallTimeout: 10000 },
)



const config = createConfig({
  autoConnect: true,   
  publicClient,
  webSocketPublicClient,
  
  connectors: [
    
    new MetaMaskConnector({ chains }),
    
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    
    new WalletConnectConnector({
      chains,
      options: {
        projectId: 'ac24e7c208f25572a6728846e35e5471',
      },
    }),
    
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
})


export default config