import express from "express";
import cors from "cors";
import GetSignUpData from "../services/GetSignUpData.js";
import Login from "../services/Login.js";
import Web3 from "web3"
import Vote from "../services/Vote.js";
import SaveNftData from "../services/SaveNftData.js";
import GetNftData from "../services/GetNftData.js"
// import dotenv from "dotenv";

const app = express();
const port = 8080;
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
const accounts = await web3.eth.getAccounts();
const serverAddress = accounts[0]

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
  const data = req.body.signUp;
  GetSignUpData(data,res);
});

app.post("/user/login", function (req, res) {
  const userInfo = req.body;
  res.send(Login(userInfo));
});

app.get("/user/vote", function (req, res) {
  const test = {
    user_id: "test2"
  };
  Vote(test);
});

app.post('/nft/create', SaveNftData);
app.get('/nft/:user_id', GetNftData);

app.listen(port, () => {
  console.log('Ganache Local Network Connected : http://localhost:8080/');
});
