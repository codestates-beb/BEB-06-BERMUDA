import mysql from 'mysql';
import dotenv from "dotenv";
import Web3 from "web3"
import Abi from './Abi.js';
import SendToken from './SendToken.js';

const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
const contractHx = process.env.ERC20_CONTRACT_HX; // 고정
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

const WinBet = async (data, res) => {

  // ###### 토큰 잔액 확인 함수 ######
  async function getTOKENBalanceOf(address){
    return await contract.methods.balanceOf(address).call();                        
  }

  connection.query("USE webtoon", function (error, results, fields) {
      if (error) throw error;
  });

  connection.query(`SELECT * FROM vote WHERE tournament = "final"`, function(error, results, fields) { 
    if (error) throw error;

    const num_one_votes = parseInt(results[0].num_one);
    const num_two_votes = parseInt(results[0].num_two);

    var winner

    if(num_one_votes > num_two_votes){
      winner = "1"; // 1번 웹툰 승리
    }
    else if(num_one_votes < num_two_votes){
      winner = "2"; // 2번 웹툰 승리
    }
    else{
      winner = "0"; // 무승부
    }

    connection.query(`SELECT * FROM user WHERE user_id = "${data.user_id}"`, function(error, results, fields) {

      if (error) throw error;

      if(parseInt(winner)===results[0].isVoted){



        const doubleToken = parseInt(results[0].token_bet)*1.8
        console.log("@@@@@@@@@@@@@@@@@")
        SendToken(results[0].address, doubleToken)
        console.log("@@@@@@@@@@@@@@@@@")
        setTimeout(() => getTOKENBalanceOf(results[0].address)
        .then(
          req => connection.query(`UPDATE user SET token_bet=0, token_amount="${req}" WHERE user_id = "${data.user_id}"`, function(error, results, fields) {
          if (error) throw error;
          res.status(200).send(`배팅에서 이기셨습니다. \n배팅하신 토큰의 1.8배인 ${doubleToken} 토큰 전송완료.`)
        })), 30)

        // 트랜잭션 컨펌 속도보다 저장속도가 빨라, 토큰수량 업데이트 전 값이 DB로 들어가버림. 
        // 그래서 setTimeout 함수로 가나슈 컨펌속도 평균인 10ms를 고려해 조금 늦은시점에 업데이트 되도록 변경
      }
      else if(winner==='0'){

        SendToken(results[0].address, results[0].token_bet)
        setTimeout(() => getTOKENBalanceOf(results[0].address)
        .then(
          req => connection.query(`UPDATE user SET token_bet=0, token_amount="${req}" WHERE user_id = "${data.user_id}"`, function(error, results, fields) {
          if (error) throw error;
          res.status(500).send(`무승부입니다. \n배팅하신 토큰은 지갑으로 재전송됩니다.`)
        })), 30)

      }
      else{
        res.status(500).send(`배팅에서 패배하셨습니다.`)
      }
    })
    
  })
}

export default WinBet;
