
import express from "express";
import cors from "cors";
import mysql from 'mysql';
import dotenv from "dotenv";
import GetSignUpData from "../services/GetSignUpData.js";

dotenv.config();

var connection = mysql.createConnection({
  host: "localhost",
  user: process.env.sqluser,
  password: process.env.sqlpassword,
});

 // DB CONNECT
connection.connect();

const app = express();
app.use(express.json());
app.listen(4000);
app.use(cors());

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.get("/getsignup", function (req, res) {

  debugger;

  console.log(req.body);

  GetSignUpData();

});