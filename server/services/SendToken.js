import Web3 from "web3"
import Abi from '/home/seominseok/바탕화면/project/incentive-community/BEB-06-SECOND-06/server/services/Abi.js';

const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
const contractHx = '0x6c18ed0E81079BF3A81255b9f8194b75F546eBdc'; // 고정
const contract = new web3.eth.Contract(Abi, contractHx); // abi : 복사해서 그대로 // 고정
const accounts = await web3.eth.getAccounts();

// https://ethereum.stackexchange.com/questions/95218/how-can-i-transfer-tokens-of-my-erc20-automatically-from-the-server

const SendToken = async (to, amount) => {

  var transactionData = contract.methods.transfer(to, amount).encodeABI(); //Create the data for token transaction.
  var rawTransaction = {"to": contractHx, "gas": 100000, "data": transactionData }; 

  web3.eth.accounts.signTransaction(rawTransaction, process.env.SERVER_PRIVATE_KEY)
  .then(signedTx => web3.eth.sendSignedTransaction(signedTx.rawTransaction))
    //.then(function(receipt){ console.log("Transaction receipt: ", receipt); getETHBalanceOf();  })
}

export default SendToken;