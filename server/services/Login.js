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

const Login = (data) => {

	connection.query("USE webtoon", function (error, results, fields) {
		if (error) throw error;
		// console.log(results)
	});
	connection.query(`SELECT * FROM user WHERE user_id = "${data.user_id}"`, function(error, results, fields) {
		debugger;

		if (error) throw error;

    if (results.length === 0 || results[0].password !== data.password){
			// return으로 false값을 보내고싶음
    }
  })
	return true;
}

export default Login;
