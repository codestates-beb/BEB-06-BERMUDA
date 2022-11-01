/* eslint-disable */

import { React, useState } from "react";
// import axios from "axios";
// import { create } from "ipfs-http-client";
// import { Buffer } from "buffer";
// import abi from "../abi/erc721abi.json";
// import Web3 from "web3";

//IPFS
const PROJECT_ID = "2Ga3H3IrS2dUcN0JZHXUkXg0IvV"; // ipfs 에서 받은 것
const API_KEY = "d49056eba0f599b71e267f370f433752"; // ipfs 에서 받은 것
// const auth =
//   "Basic " + Buffer.from(PROJECT_ID + ":" + API_KEY).toString("base64");

// const client = create({
//   host: "ipfs.infura.io",
//   port: 5001,
//   protocol: "https",
//   headers: {
//     authorization: auth,
//   },
// });

function Mint(props) {
  const selectList = ["art", "sports", "photography"];
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [imageView, setImage] = useState(false);
  const [price, setPrice] = useState();
  // const [tokenId, setTokenId] = useState();
  // const [theme, setTheme] = useState(["art", "sport", "photo"]);
  const [theme, setTheme] = useState("");
  const [account, setAccount] = useState();
  const [imgFile, setImgFile] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [tokenid, setTokenid] = useState(0);
  const [contractAddress, seta] = useState(
    "0x395FFcA1B7CA2d98A06B89a750F0fB1626D6d4Ef"
  );

  const uploadImage = (e) => {
    let file = e.target.files[0];
    const file_url = URL.createObjectURL(file);
    document.querySelector(".uploadImage").src = file_url;
    setImgFile(file);
    setImage(true);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const onChangeDesc = (e) => {
    setDesc(e.target.value);
  };

  const onChangeTheme = (e) => {
    setTheme(e.target.value);
  };

  // const minting = async () => {
  //   const imgUrl = await client.add(imgFile); // state에서 가져오기
  //   // console.log("https://openseahello.infura-ipfs.io/ipfs/" + imgUrl.path);
  //   setImgUrl(imgUrl);

  //   //메타 데이터
  //   const _json = {
  //     name: name,
  //     description: desc,
  //     image: "https://openseahello.infura-ipfs.io/ipfs/" + imgUrl.path,
  //   };

  //   const metaData = await client.add(JSON.stringify(_json));
  //   const metaDataUrl =
  //     "https://openseahello.infura-ipfs.io/ipfs/" + metaData.path;
  //   console.log(metaDataUrl); // 메타데이터(nft 데이터)

  //   const web3 = new Web3(window.ethereum);
  //   const accounts = await web3.eth.getAccounts();
  //   setAccount(accounts[0]);

  //   const transaction = {
  //     from: accounts[0],
  //     gas: 5000000,
  //     gasPrice: web3.utils.toWei("1.5", "gwei"),
  //   };
  //   // 가스비 설정

  //   //abi 컨트랙트 함수 모음
  //   //contractAddress contract 돌아가는 주소
  //   const ERC721Contract = new web3.eth.Contract(abi, contractAddress);

  //   const Minting = await ERC721Contract.methods
  //     .mintNFT(accounts[0], metaDataUrl, price)
  //     .send(transaction)
  //     .then((res) => {
  //       alert("minting success");
  //       afterMinting();
  //       setTokenid(tokenid + 1);
  //       console.log(tokenid);
  //     });

  //   return Minting;
  // };

  const afterMinting = () => {
    const formData = new FormData();
    formData.append("image", imgFile);
    formData.append("owner", account);
    formData.append("name", name);
    formData.append("theme", theme);
    formData.append("tokenid", tokenid); //smartcontract 에서 정보 받아서 넘겨주기
    formData.append("price", price);
    formData.append("description", desc);
    formData.append("url", imgUrl);
    formData.append("originalname", ".jpg");

    axios
      .post("http://localhost:8080/nft/create", formData, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="main_text">팬아트 NFT 민팅하기</div>
      <div className="create_main">
        <div className="imageFile">
          <label className="file_box" htmlFor="ex_file">
            <div className="file_label_div"></div>
          </label>
          <input
            type="file"
            id="ex_file"
            onChange={uploadImage}
            name="image"
            style={{ display: "none" }}
          />
          <img className={"uploadImage" + (imageView ? " on" : "")} />
        </div>
        <div className="input_name">Name</div>
        <input
          className="create_input"
          onChange={onChangeName}
          type="text"
          placeholder="NFT Name"
        />
        <div className="input_name">Price</div>
        <input
          className="create_input"
          onChange={onChangePrice}
          type="text"
          placeholder="Price"
        />
        <div className="input_name">Theme</div>
        <select className="create_input" onChange={onChangeTheme} value={theme}>
          <option disabled={true} value="">
            Select theme...
          </option>
          <option value="art">art</option>
          <option value="sports">sports</option>
          <option value="photography">photography</option>
        </select>
        <div className="input_name">Description</div>
        <textarea
          className="description"
          onChange={onChangeDesc}
          placeholder="Description"
        />
      </div>
      <div className="button_box">
        <button className="create_button" > 
        {/* onClick={minting} */}
          create
        </button>
      </div>
    </div>
  );
}

export default Mint;
