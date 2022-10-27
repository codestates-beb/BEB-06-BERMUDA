
// import express from "express";
// import cors from "cors";
import mysql from 'mysql';
import dotenv from "dotenv";

dotenv.config();

var connection = mysql.createConnection({
  host: "localhost",
  user: process.env.sqluser,
  password: process.env.sqlpassword,
});

 // DB CONNECT
connection.connect();

const GetSignUpData = () => {

  debugger;

  // CREATE DATABASE NAME : incentive_community 
  // CAN UPDATE DATABASE NAME by using DB SCHEME AGREEMENT 

  connection.query("CREATE DATABASE if not exists incentive_community", (error, results, fields) => {
    if (error) throw error;
    console.log(results);
  });
  connection.query("USE incentive_community", function (error, results, fields) {
    if (error) throw error;
    console.log(results)
  });
  
  // ###### DB SCHEME AGREEMENT NOT YET ###### 
  // ###### MUST DECIDE AGREEMENT IN 22/10/28 #####

  // connection.query(
  //   "CREATE TABLE if not exists information(account varchar(255),artist varchar(255), collection varchar(255), name varchar(255), tokenUri varchar(255)) ",
  //   function (error, results, fields) {
  //     // error will be an Error if one occurred during the query
  //     // results will contain the results of the query
  //     // fields will contain information about the returned results fields (if any)
  //     if (error) throw error;
  //     console.log(results);
  //   }
  // );
  // connection.query( 
  //   `INSERT INTO information (account, artist ,collection, name, tokenUri) VALUES ("${req.body.account}", "${req.body.artist}", "${req.body.collection}", "${req.body.name}", "${req.body.tokenUri}")`,
  //   function (error, results, fields) {

  //     if (error) throw error;
  //     console.log(fields);
  //   }
  // );
};

export default GetSignUpData;