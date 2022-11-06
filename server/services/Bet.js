import mysql from 'mysql';
import dotenv from "dotenv";
import Web3 from "web3"
import Abi from './Abi.js';
import SendTokenU2S from './SendTokenU2S.js';

const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
const contractHx = process.env.SERVER_TRANSACTION_HX; // 고정
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

const Bet = async (data, res) => {

  // ###### 토큰 잔액 확인 함수 ######
  async function getTOKENBalanceOf(address){
    return await contract.methods.balanceOf(address).call();                        
  }

	connection.query("USE webtoon", function (error, results, fields) {
		if (error) throw error;
	});

	connection.query(`SELECT * FROM user WHERE user_id = "${data.user_id}"`, function(error, results, fields) {

		if (error) throw error;

    if(results[0].token_amount >= data.token_bet){
      SendTokenU2S(results[0].private_key, "0x1A09A97b8906dA57204C1bE28Aa7238B76179e61", data.token_bet)
      setTimeout(() => getTOKENBalanceOf(results[0].address)
      .then(
        req => { 
          const total_betted = parseInt(results[0].token_bet) + parseInt(data.token_bet);
          connection.query(`
          UPDATE user 
          SET token_bet="${total_betted}", token_amount="${req}" 
          WHERE user_id = "${data.user_id}"`
        )}), 30) // 30ms 지연
    }    
    // 트랜잭션 컨펌 속도보다 저장속도가 빨라, 토큰수량 업데이트 전 값이 DB로 들어가버림. 
    // 그래서 setTimeout 함수로 가나슈 컨펌속도 평균인 10ms를 고려해 조금 늦은시점에 업데이트 되도록 변경

    else{ // 배팅하기에 충분한 토큰이 없다면
      res.send("Not Enough Token For Bet")
    }
  })
}

export default Bet;
