import mysql from 'mysql';
import dotenv from "dotenv";
import Web3 from "web3"
import Abi from '/home/seominseok/바탕화면/project/incentive-community/BEB-06-SECOND-06/server/services/Abi.js';
import SendToken from './SendToken.js';
import CreateWallet from './CreateWallet.js';

const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
const contractHx = '0x6c18ed0E81079BF3A81255b9f8194b75F546eBdc'; // 고정
const contract = new web3.eth.Contract(Abi, contractHx); // abi : 복사해서 그대로 // 고정
const accounts = await web3.eth.getAccounts();

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
    "CREATE TABLE if not exists user(user_id varchar(255), password varchar(255), nickname varchar(255), address varchar(255), private_key varchar(255), eth_amount int, token_amount int, token_bet int, isVoted boolean, created_at timestamp) ",
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
  const wallet = CreateWallet();

  // ####### 생성된 지갑으로 회원가입 축하 100 토큰 전송 #######
  SendToken(wallet.address, 100);
  
  connection.query( 
    `INSERT INTO user (user_id, password ,nickname, address, private_key, eth_amount, token_amount, token_bet, isVoted) 
    VALUES ("${data.user_id}", "${data.password}", "${data.nickname}", "${wallet.address}", "${wallet.privateKey}", "0", "100", "0", false)`,
    function (error, results, fields) {
      if (error) throw error;
    }
  );
};

export default GetSignUpData;
