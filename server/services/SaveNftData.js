import mysql from 'mysql';
import dotenv from "dotenv";
import express from "express";
const router = express.Router();
dotenv.config();

var connection = mysql.createConnection({
    host: "localhost",
    user: process.env.ID,
    password: process.env.PW,
  });
  
   // DB CONNECT
  connection.connect((err)=>{
    if(err)
    {
      console.log(err);
    } else {
      console.log("connected !");
    }
  });
  
  const SaveNftData = (req, res) => {
    // console.log(req.body);
    // console.log("55")
  
    connection.query("CREATE DATABASE if not exists webtoon", (error, results, fields) => {
      if (error) throw error;
      // console.log(results);
    });
    connection.query("USE webtoon", function (error, results, fields) {
      if (error) throw error;
      // console.log(results)
    });
    connection.query(
      "CREATE TABLE if not exists nftlist(user_id varchar(255), token_id varchar(255), img_id varchar(255))",
      function (error, results, fields) {
        if (error) throw error;
        // console.log(results);
    })
     // ###### 이미 DB상에 USER_ID 또는 NICKNAME이 존재할때 에러 던지기 ########
    // connection.query(`SELECT * FROM user WHERE token_id = "${req.body.token_id}"`, function(error, results, fields) {
    //   if (error) throw error;
    //   if (results.length !== 0){
    //     const id_err = "already exist token id";
    //     throw id_err;
    //   }
    // });
    
    connection.query( 
      `INSERT INTO nftlist(user_id, token_id, img_id) 
      VALUES ("${req.body.user_id}", "${req.body.token_id}", "${req.body.img_id}")`,
      function (error, results, fields) {
        if (error) throw error;
      }
    );
    res.send(req.body)
}

export default SaveNftData;