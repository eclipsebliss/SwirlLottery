// 引入合约
// eslint-disable-next-line no-undef
const ThreeD = artifacts.require('ThreeD.sol')
// 部署合约
module.exports = async function(deployer){
    // eslint-disable-next-line no-undef
    const accounts = await web3.eth.getAccounts(); //获取当前所有账户
    await deployer.deploy(ThreeD,accounts[2]);
    console.log("收费地址为:",accounts[2])
}