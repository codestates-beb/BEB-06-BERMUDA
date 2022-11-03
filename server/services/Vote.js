import mysql from 'mysql';
import dotenv from "dotenv";
import SendToken from './SendToken.js';
import Web3 from "web3"
import Abi from '/home/seominseok/바탕화면/project/incentive-community/BEB-06-SECOND-06/server/services/Abi.js';

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

const Vote = async (data) => {

  // ###### 토큰 잔액 확인 함수 ######
  async function getTOKENBalanceOf(address){
    return await contract.methods.balanceOf(address).call();                        
  }

	connection.query("USE webtoon", function (error, results, fields) {
		if (error) throw error;
	});

	connection.query(`SELECT * FROM user WHERE user_id = "${data.user_id}"`, function(error, results, fields) {

		if (error) throw error;

		if (results[0].isVoted === 0){

    SendToken(results[0].address, 20)
    setTimeout(() => getTOKENBalanceOf(results[0].address)
    .then(
      req => connection.query(`UPDATE user SET isVoted=0, token_amount="${req}" WHERE user_id = "${data.user_id}"`, function(error, results, fields) {
      if (error) throw error;
    })), 30)

    // 트랜잭션 컨펌 속도보다 저장속도가 빨라, 토큰수량 업데이트 전 값이 DB로 들어가버림. 
    // 그래서 setTimeout 함수로 가나슈 컨펌속도 평균인 10ms를 고려해 조금 늦은시점에 업데이트 되도록 변경
      
		}
  })
}

export default Vote;
