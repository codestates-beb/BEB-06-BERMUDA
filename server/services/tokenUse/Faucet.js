import mysql from 'mysql';
import dotenv from "dotenv";
import express from "express";
import Web3 from "web3";

const router = express.Router();
dotenv.config();

var connection = mysql.createConnection({
    host: "localhost",
    user: process.env.ID,
    password: process.env.PW,
  });
  
   // DB CONNECT
  connection.connect((err)=>{
    if(err)
    {
      console.log(err);
    } else {
      console.log("connected !");
    }
  });

const Faucet = async (req, res) => {

  // Client 에서  user 지갑 주소 받기
  const data = req.body;
  const userAddress = data.userAddress;
  const faucetAddress = process.env.FAUCET_ADDRESS;
  const faucetPK = process.env.FAUCET_PRIVATE_KEY;
  const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
  const tx = {
    from: faucetAddress,
    to: userAddress,
    gas: 2000000,
    value: web3.utils.toWei("0.1", "ether"),
  };
  const signedTx = web3.eth.accounts.signTransaction(tx, faucetPK)
    .then((signedTx) => {
      const sendPromise = web3.eth.sendSignedTransaction(signedTx.rawTransaction, 
          async (err, res) => {
          if (err) {
            console.log("transaction fail:", err);
          } else {
            const balance = await web3.eth.getBalance(userAddress);
            console.log(`transfer to user: ${userAddress} || 0.1 ETH`);
            console.log(`balance: ${balance}`)
          }
        })
    })
    res.send(`0.1 eth sent: ${userAddress}`);
}
export default Faucet;