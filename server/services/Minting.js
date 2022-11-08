import mysql from 'mysql';
import dotenv from "dotenv";
import Web3 from 'web3';
import erc20Abi from "./Abi.js";
import erc721Abi from "./Abi721.js";

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
  
  const MintingNft = async (req, res) => {

    console.log(req.body);
    connection.query("CREATE DATABASE if not exists webtoon", (error, results, fields) => {
      if (error) throw error;
    });

    connection.query("USE webtoon", function (error, results, fields) {
      if (error) throw error;
    });

    connection.query(
      'CREATE TABLE IF NOT EXISTS nft (id int NOT NULL AUTO_INCREMENT PRIMARY KEY, user_id varchar(255), nft_id varchar(255), img_url varchar(255), wallet_id varchar(255))',
      function (error, results, fields) {
        if (error) throw error;
    });

    connection.query( 
      `INSERT INTO nft(user_id, nft_id, img_url, wallet_id) 
      VALUES ("${req.body.user_id}", "${req.body.nft_id}", "${req.body.img_url}", "${req.body.wallet_id}")`,
      function (error, results, fields) {
        if (error) throw error;
      });

    connection.query(`SELECT private_key FROM user WHERE address = "${req.body.wallet_id}"`, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      if (results.length > 0) {
        mint(results[0]);
      }
    });

const mint = async (results) => {

      console.log(results.private_key);
      const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
  
      const erc20Addr =  process.env.ERC20_CONTRACT_HX;
      const erc721Addr = process.env.ERC721_CONTRACT_HX;
      const serverAddr = process.env.SERVER_ADDRESS;             //ganache[0]
      const serverKey = process.env.SERVER_PRIVATE_KEY; 
      // Set provider + new contract (abi, address)
      const userAddress = req.body.wallet_id;
      const tokenURI = req.body.token_id;
      const allowance = 70;
      const mintPrice = 10;
      const userPK = results.private_key
      console.log(tokenURI);

      
        try {
          //console.log(userPK);
          const tokenContract = new web3.eth.Contract(erc20Abi, erc20Addr, {from: userAddress, gasPrice: '2000000'});
          //console.log(tokenContract);
          const approveAllowance = tokenContract.methods.approve(erc721Addr, allowance).encodeABI();
          //console.log(approveAllowance);
          const tx = {
            "to": erc20Addr,
            "gas": 2000000,
            "data": approveAllowance,
          };
          //console.log(tx);
          const signedTxApprove = await web3.eth.accounts.signTransaction(tx, userPK)
          .then((signedTxApprove) =>  web3.eth.sendSignedTransaction(signedTxApprove.rawTransaction));
          console.log('HelloWorldaaaa');
          const nftContract = new web3.eth.Contract(erc721Abi, erc721Addr, {from: serverAddr, gasPrice: '2000000'});
          const mintNft = nftContract.methods.mintNFT(userAddress, tokenURI, mintPrice).encodeABI();
          const tx721 = {
            "to": erc721Addr,
            "gas": 2000000,
            "data": mintNft,
          };
          console.log('HelloWorldaa');
          console.log("4");
          const signedTxMint = await web3.eth.accounts.signTransaction(tx721, serverKey)
          .then((signedTxMint) => web3.eth.sendSignedTransaction(signedTxMint.rawTransaction));
  
            console.log(signedTxMint);
            console.log('HelloWorld');
          return signedTxMint;
        } catch (err) {
          console.log(err);
        }
        res.send("민트 성공!");
  }
}
  
export default MintingNft;