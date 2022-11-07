import mysql from 'mysql';
import dotenv from "dotenv";
import Web3 from "web3"
import Abi from './Abi.js';
import SendTokenU2S from './SendTokenU2S.js';

const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
const contractHx = '0xE02ECe608A839Bef998CeE567059a83CE2D4b566'; // 여기도 undefined로 뜸 // 그래서 직접 넣기로 결정
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
      SendTokenU2S(results[0].private_key, process.env.SERVER_ADDRESS, data.token_bet)
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

    else{ // 배팅 불가할때 (가스비 부족, 토큰 부족 등 이유)
      res.status(500).send("Can't Bet")
    }
  })
}

export default Bet;
