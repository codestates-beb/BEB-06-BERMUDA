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

export default GetSignUpData;