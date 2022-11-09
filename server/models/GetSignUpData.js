import mysql from 'mysql';
import dotenv from "dotenv";
import Web3 from "web3"
import Abi from '../abi/Abi.js';
import SendToken from '../services/SendToken.js';
import CreateWallet from '../services/CreateWallet.js';

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

const GetSignUpData = (data, res) => {
  console.log(data)
  GetSignIdData(data,res);
};

const GetSignIdData = async (data,res) => {
  connection.query("USE webtoon", function (error, results, fields) {
    if (error) throw error;
    // console.log(results)
  });
  // ###### 이미 DB상에 USER_ID 또는 NICKNAME이 존재할때 에러 던지기 ########
  connection.query(`SELECT * FROM user WHERE user_id = "${data.user_id}"`, function(error, results, fields) {
    if (error) throw error;
    if (results.length !== 0){
      res.status(500).send('id');
    } else {
      GetSignNameData(data,res);
    }
  })
}

const GetSignNameData = (data,res) => {
 // ###### 이미 DB상에 USER_ID 또는 NICKNAME이 존재할때 에러 던지기 ########
  connection.query(`SELECT * FROM user WHERE nickname = "${data.nickname}"`, function(error, results, fields) {
    if (error) throw error;
    if (results.length !== 0){
      res.status(500).send('name');
    } else {
      GetSignUpDataEnd(data,res);
    }
  })
}

const GetSignUpDataEnd = (data,res) => {
  // ####### 문제 없다면 지갑 생성 #######
  const wallet = CreateWallet();
  // ####### 생성된 지갑으로 회원가입 축하 100 토큰 전송 #######
  SendToken(wallet.address, 100);
  connection.query( 
    `INSERT INTO user (user_id, password ,nickname, address, private_key, eth_amount, token_amount, token_bet, isVoted) 
    VALUES ("${data.user_id}", "${data.password}", "${data.nickname}", "${wallet.address}", "${wallet.privateKey}", "0", "100", "0", "0")`,
    function (error, results, fields) {
      if (error) throw error;
    }
  );
  res.status(200).send('complete');
  connection.end();
 }


export default GetSignUpData  ;