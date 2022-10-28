import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import GetSignUpData from "../services/GetSignUpData.js";
import Web3 from "web3"

const app = express();
const port = 8080;
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
const accounts = await web3.eth.getAccounts();
const serverAddress = accounts[0]

// console.log("Server Address:", serverAddress);
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
app.listen(4000);
app.use(cors());

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.get("/server/account", function (req, res) {
  res.send(serverAddress);
});

app.get("/user/join", function (req, res) {

  // console.log(req.body);
  GetSignUpData();
  res.send(req.body);

});

app.listen(port, () => {
	console.log('Ganache Local Network Connected : http://localhost:8080/');
});