/* eslint-disable */

import { React, useState, useEffect } from "react";
import axios from "axios";
import { create } from "ipfs-http-client";
import { Buffer } from "buffer";
import erc721Abi from "../abi/erc721Abi";
import Web3 from "web3";

//IPFS - infura.io
const PROJECT_ID = "2GZ2MSI4YWvA2MXYwUabhDymfbB"; // ipfs 에서 받은 것
const API_KEY = "6b9fd85da75670013de850024f494b80"; // ipfs 에서 받은 것
const auth =
  "Basic " + Buffer.from(PROJECT_ID + ":" + API_KEY).toString("base64");

  const client = create({
    host: "infura-ipfs.io",
    port: 5001,
    protocol: "https",
    headers: {
    authorization: auth,
    },
  });

function Mint(props) {
  // const selectList = ["art", "sports", "photography"];
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [imageView, setImage] = useState(false);
  //const [tokenId, setTokenId] = useState();
  //const [theme, setTheme] = useState(["art", "sport", "photo"]);
  const [theme, setTheme] = useState("");
  const [account, setAccount] = useState();
  const [imgFile, setImgFile] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [tokenid, setTokenid] = useState(0);
  const [contractAddress, seta] = useState(
    "0xd8711970b278DD08C66B86D0A63a582a102c82D6"
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

  const onChangeDesc = (e) => {
    setDesc(e.target.value);
  };

  const onChangeTheme = (e) => {
    setTheme(e.target.value);
  };
  // 컴포넌트가 실행되면 userAddress 부터 받아오기
  useEffect(() => {
    console.log("useEffect component mounted");
    async function getUserAddress () {
      const result = // await axios.get('/user') 클라이언트 쪽에 저장된걸 가지고 온다 useState
      console.log(result);
      if (result == null) {
        console.log('sign in first')
      } else {
        setAccount = result.address;
        console.log(result.address);
      }
    };
  }, []);
    
  const minting = async () => {
      
    // Ipfs 에 사진이랑 올리고
      const imgUrl = await client.add(imgFile); // state에서 가져오기
      console.log("https://nft999.infura-ipfs.io/ipfs/" + imgUrl.path);
      setImgUrl(imgUrl);
      console.log(imgUrl);

    //메타 데이터
      const _json = { 
        name: name,
        description: desc,
        image: "https://nft999.infura-ipfs.io/ipfs/" + imgUrl.path,
      };
    console.log({_json});
    
    // Ipfs 에 메타데이터 올리고
      const metaData = await client.add(JSON.stringify(_json));
      const metaDataUrl =
        "https://nft999.infura-ipfs.io/ipfs/" + metaData.path;
      console.log(metaDataUrl); // 메타데이터(nft 데이터)

      
      // 메타 데이터 서버로 포스트 하기
      axios.post('/nft/create', {
        user_id: setUserAddress,
        token_id: metaDataUrl,
        img_id: imgUrl,
      })
      // 4. 서버 nft table 에 사용자 id, image url, token uri 보내고
      // 5. 서버 지갑으로 민팅 진행 (상대방 지갑주소)
      // 6. 서버에서 사용자 지갑 주소 가지고 오기 7.
      // 7. Nft 전송
      // 8. 마이 페이지에서 확인하시겠습니까?



      // const web3 = new Web3(window.ethereum);
      /* const web3 = new Web3('ws:127.0.0.1:7545')
      const accounts = await web3.eth.getAccounts(); // 대신 서버에서 개정 주소 받아오기
      setAccount(accounts[0]); */

      const transaction = {
        from: accounts[0],
        gas: 5000000,
        gasPrice: web3.utils.toWei("1.5", "gwei"),
      };
        // 가스비 설정

        //abi 컨트랙트 함수 모음
        //contractAddress contract 돌아가는 주소
      const ERC721Contract = new web3.eth.Contract(erc721Abi, contractAddress);

      const Minting = await ERC721Contract.methods
        .mintNFT(accounts[0], metaDataUrl)
        .send(transaction)
        .then((res) => {
          alert("minting success");
          afterMinting();
          setTokenid(tokenid + 1);
          console.log(tokenid);
        });

        return Minting;
    };

  const afterMinting = () => {
    const formData = new FormData();
    formData.append("image", imgFile);
    formData.append("owner", account);
    formData.append("name", name);
    formData.append("theme", theme);
    formData.append("tokenid", tokenid); //smartcontract 에서 정보 받아서 넘겨주기
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
        <div className="input_name">Webtoon</div>
        <select className="create_input" onChange={onChangeTheme} value={theme}>
          <option disabled={true} value="">
            Select webtoon...
          </option>
          <option value="mulwi">물위의 우리</option>
          <option value="engmu">앵무살수</option>
          <option value="nano">나노 마신</option>
          <option value="kubera">쿠베라</option>
          <option value="yeonye">연애혁명</option>
          <option value="janbule">잔불의 기사</option>
          <option value="sunjung">순정빌런</option>
          <option value="inseng">인생존망</option>
          <option value="byeole">별이삼샵</option>
          <option value="ijegot">이제 곧 죽습니다</option>
          <option value="illexid">일렉시드</option>
          <option value="bangbaek">방백남녀</option>
          <option value="jeongjijok">전지적 독자 시점</option>
          <option value="simyeon">심연의 하늘</option>
          <option value="buildup">빌드업</option>
          <option value="shindorim">신도림</option>
        </select>
        <div className="input_name">Description</div>
        <textarea
          className="description"
          onChange={onChangeDesc}
          placeholder="Description"
        />
      </div>
      <div className="button_box">
        <button className="create_button" onClick={minting}> 
        {/* onClick={minting} */}
          create
        </button>
      </div>
    </div>
  );
}

export default Mint;
