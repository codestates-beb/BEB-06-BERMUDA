import express from "express";

import cors from "cors";
import GetSignUpData from "../services/GetSignUpData.js";
import Login from "../services/Login.js";
import Web3 from "web3"
// import dotenv from "dotenv";

const app = express();
const port = 8080;
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
const accounts = await web3.eth.getAccounts();
const serverAddress = accounts[0]

// dotenv.config();

async function getAccounts() {
  try {
      const accounts = await getWeb3().eth.getAccounts(); 
      console.log(accounts);
      return accounts;
  } catch (e) {
      console.log(e);
      return e;
  }
}

app.use(express.json());
// app.listen(4000);
app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/server/account", function (req, res) {
  res.send(res);
});

app.post("/user/join", function (req, res) {
  try {
      const userInfo = req.body.signUp;
      GetSignUpData(userInfo);
  } catch (error) {
    res.status(500).json({ error: error.toString() })
  }
    res.send({ result: "complete" });
  // const test = {
  //   user_id: "test20",
  //   password: "demon",
  //   nickname: "test20"
  // };
  // GetSignUpData(test);
});

app.post("/user/login", function (req, res) {
  const userInfo = req.body.signIn;
  res.send(Login(userInfo));
});

app.listen(port, () => {
  console.log('Ganache Local Network Connected : http://localhost:8080/');
});
