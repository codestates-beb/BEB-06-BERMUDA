import mysql from 'mysql';

var connection = mysql.createConnection({
  host: "localhost",
  user: process.env.ID,
  password: process.env.PW,
});

 // DB CONNECT
connection.connect();

const CreateDatabase = () => {

  //@@@@@@@@ 데이터베이스 생성 @@@@@@@@
  connection.query("CREATE DATABASE if not exists webtoon", (error, results, fields) => {
    if (error) throw error;
    // console.log(results);
  });
  connection.query("USE webtoon", function (error, results, fields) {
    if (error) throw error;
    // console.log(results)
  });

  //@@@@@@@@ 테이블 생성 @@@@@@@@
  connection.query(
    "CREATE TABLE if not exists nft(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, user_id varchar(255), nft_id varchar(255),img_url varchar(255), wallet_id varchar(255))",
    function (error, results, fields) {
      if (error) throw error;
      // console.log(results);
  });
  connection.query(
    "CREATE TABLE if not exists user(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, user_id varchar(255), password varchar(255), nickname varchar(255), address varchar(255), private_key varchar(255), eth_amount int, token_amount int, token_bet int, isVoted int, created_at timestamp) ",
    function (error, results, fields) {
      if (error) throw error;
  });
  // @@@@@ tournament 는 명목상 semi-final, final 등이 들어갈예정 @@@@@
  connection.query("CREATE TABLE if not exists vote(tournament varchar(255), num_one int, num_two int)", 
    function (error, results, fields) {
      if (error) throw error;
  });
  // @@@@@ 테이블이 처음 생성되는 시점에 한번만 실행되도록 하기위함. cuz : 1행만 필요하기때문 @@@@@
  connection.query(`SELECT * FROM vote WHERE tournament = "final"`, function(error, results, fields) { 
    if (error) throw error;
    if (results.length === 0){
      connection.query(  
        `INSERT INTO vote VALUES ("final", "0", "0")`,
        function (error, results, fields) {
          if (error) throw error;
      });
    }
  })
}

export default CreateDatabase