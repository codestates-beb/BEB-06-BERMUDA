import mysql from 'mysql';
import dotenv from "dotenv";
import Web3 from "web3"

const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

dotenv.config();

var connection = mysql.createConnection({
  host: "localhost",
  user: process.env.ID,
  password: process.env.PW,
});

 // DB CONNECT
connection.connect();

const GetSignUpData = (data) => {

  debugger;
  
  console.log(data)
  // const test = 'sms';

  // CREATE DATABASE NAME : incentive_community 
  // CAN UPDATE DATABASE NAME by using DB SCHEME AGREEMENT 

  connection.query("CREATE DATABASE if not exists webtoon", (error, results, fields) => {
    if (error) throw error;
    // console.log(results);
  });
  connection.query("USE webtoon", function (error, results, fields) {
    if (error) throw error;
    // console.log(results)
  });
  connection.query(
    "CREATE TABLE if not exists user(user_id varchar(255), password varchar(255), nickname varchar(255), address varchar(255), private_key varchar(255), eth_amount int, token_amount int, token_bet int, created_at timestamp) ",
    function (error, results, fields) {
      if (error) throw error;
      // console.log(results);
    }
  );
  // ###### 이미 DB상에 USER_ID 또는 NICKNAME이 존재할때 에러 던지기 ########
  connection.query(`SELECT * FROM user WHERE user_id = "${data.user_id}"`, function(error, results, fields) {
    if (error) throw error;
    if (results.length !== 0){
      const id_err = "already exist user id";
      throw id_err;
    }
  })
  connection.query(`SELECT * FROM user WHERE nickname = "${data.nickname}"`, function(error, results, fields) {
    if (error) throw error;
    if (results.length !== 0){
      const nickname_err = "already exist nickname";
      throw nickname_err;
    }
  })

  // ####### 문제 없다면 지갑 생성 후 정보 저장 #######
  const wallet = web3.eth.accounts.create();
  console.log(wallet)
  
  connection.query( 
    `INSERT INTO user (user_id, password ,nickname, address, private_key, eth_amount, token_amount, token_bet) 
    VALUES ("${data.user_id}", "${data.password}", "${data.nickname}", "${wallet.address}", "${wallet.privateKey}", "0", "0", "0")`,
    function (error, results, fields) {
      if (error) throw error;
    }
  );
};

export default GetSignUpData;import mysql from 'mysql';

import dotenv from "dotenv";
import Web3 from "web3"
import Abi from '/home/seominseok/바탕화면/project/incentive-community/BEB-06-SECOND-06/server/services/Abi.js';

const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
const contractHx = '0x6c18ed0E81079BF3A81255b9f8194b75F546eBdc'; // 고정
const contract = new web3.eth.Contract(Abi, contractHx); // abi : 복사해서 그대로 // 고정

const accounts = await web3.eth.getAccounts();
const serverPrivateKey = accounts[0]

dotenv.config();

var connection = mysql.createConnection({
  host: "localhost",
  user: process.env.ID,
  password: process.env.PW,
});

 // DB CONNECT
connection.connect();

const GetSignUpData = (data) => {
  
  console.log(data)

  // CREATE DATABASE NAME : incentive_community 
  // CAN UPDATE DATABASE NAME by using DB SCHEME AGREEMENT 

  connection.query("CREATE DATABASE if not exists webtoon", (error, results, fields) => {
    if (error) throw error;
    // console.log(results);
  });
  connection.query("USE webtoon", function (error, results, fields) {
    if (error) throw error;
    // console.log(results)
  });
  connection.query(
    "CREATE TABLE if not exists user(user_id varchar(255), password varchar(255), nickname varchar(255), address varchar(255), private_key varchar(255), eth_amount int, token_amount int, token_bet int, created_at timestamp) ",
    function (error, results, fields) {
      if (error) throw error;
      // console.log(results);
  });
  // ###### 이미 DB상에 USER_ID 또는 NICKNAME이 존재할때 에러 던지기 ########
  connection.query(`SELECT * FROM user WHERE user_id = "${data.user_id}"`, function(error, results, fields) {
    if (error) throw error;
    if (results.length !== 0){
      const id_err = "already exist user id";
      throw id_err;
    }
  })
 
  connection.query(`SELECT * FROM user WHERE nickname = "${data.nickname}"`, function(error, results, fields) {
    if (error) throw error;
    if (results.length !== 0){
      const nickname_err = "already exist nickname";
      throw nickname_err;
    }
  })

  // ####### 문제 없다면 지갑 생성 #######
  const wallet = web3.eth.accounts.create();
  console.log(wallet)

  // ####### 생성된 지갑으로 회원가입 축하 100 토큰 전송 #######
  // https://ethereum.stackexchange.com/questions/95218/how-can-i-transfer-tokens-of-my-erc20-automatically-from-the-server

  var transactionData = contract.methods.transfer(wallet.address, 100).encodeABI(); //Create the data for token transaction.
  var rawTransaction = {"to": contractHx, "gas": 100000, "data": transactionData }; 
  web3.eth.accounts.signTransaction(rawTransaction, "d1d2f5e5876daaa794942475c9e24477c65e453a8f32b5519d5ebda2f04fe52d")
  .then(signedTx => web3.eth.sendSignedTransaction(signedTx.rawTransaction))
    //.then(function(receipt){ console.log("Transaction receipt: ", receipt); getETHBalanceOf();  })
  .then(req => { 
    /* The trx was done. Write your acctions here. For example getBalance */
    getTOKENBalanceOf(wallet.address).then ( balance => { 
      console.log(wallet.address + " Token Balance: " + balance); 
    });
    return true;  
  });      
      
  // ###### 토큰 잔액 확인 함수 : 위에서 호출 ######
  async function getTOKENBalanceOf(address){
      return await contract.methods.balanceOf(address).call();                        
  }   

  connection.query( 
    `INSERT INTO user (user_id, password ,nickname, address, private_key, eth_amount, token_amount, token_bet) 
    VALUES ("${data.user_id}", "${data.password}", "${data.nickname}", "${wallet.address}", "${wallet.privateKey}", "0", "100", "0")`,
    function (error, results, fields) {
      if (error) throw error;
    }
  );
};

export default GetSignUpData;
