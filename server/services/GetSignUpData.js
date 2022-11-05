import mysql from 'mysql';

import dotenv from "dotenv";
import SendToken from './SendToken.js';
import CreateWallet from './CreateWallet.js';

dotenv.config();

var connection = mysql.createConnection({
  host: "localhost",
  user: process.env.ID,
  password: process.env.PW,
});

 // DB CONNECT

// connection.connect();

const GetSignUpData =  (data ,res) => {
  // CREATE DATABASE NAME : incentive_community 
  // CAN UPDATE DATABASE NAME by using DB SCHEME AGREEMENT 

  connection.query("CREATE DATABASE if not exists webtoon", (error, results, fields) => {
    if (error) throw error;
  });
  connection.query("USE webtoon", function (error, results, fields) {
    if (error) throw error;
  });
  connection.query(
    "CREATE TABLE if not exists user(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, user_id varchar(255), password varchar(255), nickname varchar(255), address varchar(255), private_key varchar(255), eth_amount int, token_amount int, token_bet int, created_at timestamp) ",
    function (error, results, fields) {
      if (error) throw error;
  });

  connection.query(
    "CREATE TABLE if not exists nft(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, user_id int, token_id int,img_url varchar(255))",
    function (error, results, fields) {
      if (error) throw error;
  });
  GetSignIdData(data,res);
};


const GetSignIdData = async (data,res) => {
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
    `INSERT INTO user (user_id, password ,nickname, address, private_key, eth_amount, token_amount, token_bet) 
    VALUES ("${data.user_id}", "${data.password}", "${data.nickname}", "${wallet.address}", "${wallet.privateKey}", "0", "100", "0")`,
    function (error, results, fields) {
      if (error) throw error;
    }
  );
  res.status(200).send('complete');
  connection.end();
 }
 



export default GetSignUpData  ;
