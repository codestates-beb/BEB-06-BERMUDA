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

const Login = (data ,res) => {

	console.log(data)

	connection.query("USE webtoon", function (error, results, fields) {
		if (error) throw error;
	});

	connection.query(` SELECT A.* , B.nft_name , B.img_url FROM user as A LEFT JOIN nft as B  ON A.id = B.user_id where A.user_id = "${data.user_id}" `, function(error, results, fields) {
		if (error) throw error;

		if (results.length === 0 || results[0].password !== data.password){
			res.status(500).send("fail");
		}else{
			res.status(200).send(results);
		}
  	})
}
export default Login;
