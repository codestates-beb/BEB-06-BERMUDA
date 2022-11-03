import mysql from 'mysql';
import dotenv from "dotenv";

dotenv.config();

var connection = mysql.createConnection({
  host: "localhost",
  user: process.env.ID,
  password: process.env.PW,
});

// DB CONNECT
connection.connect();

const Login = async (data) => {

	connection.query("USE webtoon", function (error, results, fields) {
		if (error) throw error;
	});

  await connection.query(`SELECT * FROM user WHERE user_id = "${data.user_id}"`, function(error, results, fields) {
		if (error) throw error;
		if (results.length !== 0 || results[0].password === data.password){
			return results;
		}
  })
  
}
export default Login;
