import Web3 from "web3"
import Abi from './Abi.js';
import dotenv from "dotenv";
dotenv.config();

const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
const contractHx = process.env.ERC20_CONTRACT_HX; // 고정
const contract = new web3.eth.Contract(Abi, contractHx); // abi : 복사해서 그대로 // 고정
const accounts = await web3.eth.getAccounts();

// https://ethereum.stackexchange.com/questions/95218/how-can-i-transfer-tokens-of-my-erc20-automatically-from-the-server

const SendToken = (to, amount) => {

  var transactionData = contract.methods.transfer(to, amount).encodeABI(); //Create the data for token transaction.
  var rawTransaction = {"to": contractHx, "gas": 100000, "data": transactionData }; 

  web3.eth.accounts.signTransaction(rawTransaction, process.env.SERVER_PRIVATE_KEY)
  .then(signedTx => web3.eth.sendSignedTransaction(signedTx.rawTransaction))
    //.then(function(receipt){ console.log("Transaction receipt: ", receipt); getETHBalanceOf();  })
  .then(req => { 
    /* The trx was done. Write your acctions here. For example getBalance */
    getTOKENBalanceOf(to).then ( balance => { 
      console.log(to + " Token Balance: " + balance); 
    });
    return true;  
  });      

  // ###### 토큰 잔액 확인 함수 : 위에서 호출 ######
  async function getTOKENBalanceOf(address){
    return await contract.methods.balanceOf(address).call();                        
  }
}

export default SendToken;