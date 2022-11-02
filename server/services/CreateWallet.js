import Web3 from "web3"

const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
const accounts = await web3.eth.getAccounts();

const CreateWallet = () => {

  // ####### 문제 없다면 지갑 생성 #######
  const wallet = web3.eth.accounts.create();
  console.log(wallet)

  return wallet
}

export default CreateWallet;