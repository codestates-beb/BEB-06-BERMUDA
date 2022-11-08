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

const getComment = (res) => {

	connection.query("USE webtoon", function (error, results, fields) {
		if (error) throw error;
	});


    connection.query(
        "CREATE TABLE if not exists comment(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, user_id varchar(255), comment varchar(255), time timestamp not null default now())",
        function (error, results, fields) {
          if (error) throw error;
    });
    

	connection.query("select * from webtoon.comment", function(error, results, fields) {
		if (error) throw error;

		res.status(200).send(results);
  })
}

const saveComment = (data ,res) => {

	connection.query("USE webtoon", function (error, results, fields) {
		if (error) throw error;
	});
    

	connection.query(`insert into comment ( user_id , comment ) VALUES  ( "${data.user_id}" ,  "${data.comment}" )`, function(error, results, fields) {
		if (error) throw error;

        getComment(res);
    })
}




export { getComment , saveComment };
