/*
 * @Author: Ocean 
 * @Date: 2023-06-23 12:22:24 
 * @Last Modified by: Ocean
 * @Last Modified time: 2023-11-27 22:21:24
 */

/*
 * dependencies：
 * web3@1.8.0
 */

/* 定义一个web3及合约实例的钩子 */
import Web3 from "web3";
const  useWeb3 = () => {
    const web3 = new Web3(
        Web3.givenProvider 
        || "http://localhost:8545" 
        || 'wss://sepolia.infura.io/ws/v3/592f02085c144f5ab6ef3477b5f1715e'
        || 'https://sepolia.infura.io/v3/592f02085c144f5ab6ef3477b5f1715e'
        );

    //先授权，并返回当前账户
    const getCount = async() =>{
        const accounts = await web3.eth.requestAccounts();
        return accounts[0]
    }


    //获取networkId
    const getNetworkId = async() =>{
        const networkId = await web3.eth.net.getId();
        return networkId
    }
    

    // const contractAbi =  合约ABI   // 通过任何方式获取合约ABI
    // const contractAddress = 合约地址  // 通过任何方式获取合约地址
    // const contract = await new web3.eth.Contract(contractAbi ,contractAddress);  // 实例化合约

    // console.log(exchange)
    return {
        web3, // 导出web3
        getCount, // 导出第一个账户方法
        getNetworkId,  // 导出networkId方法
        // contract, // 导出合约
    }
}

export default useWeb3;