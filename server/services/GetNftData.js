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
  
  const GetNftData = (req, res) => {

    connection.query("USE webtoon", function (error, results, fields) {
        if (error) throw error;
        // console.log(results)
      });

    connection.query(
        `SELECT img_id FROM nftlist WHERE user_id=?`,
        [req.params.user_id],
        (err, results, fields) => {
          if (err) throw err;
          console.log('results: ', results);
    
          res.json(results);
        });
    };

export default GetNftData;