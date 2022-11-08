import { React, useState } from "react";
import axios from "axios";
import { create } from "ipfs-http-client";
import { Buffer } from "buffer";
import { useSelector } from "react-redux";


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

  function Mint() {
    const userData = useSelector( (state) => state.userData.userData );
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [imageView, setImage] = useState(false);
    const [theme, setTheme] = useState("");
    const [imgFile, setImgFile] = useState();
    const [imgUrl, setImgUrl] = useState();
  
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


      console.log(userData.address);
      console.log(setName);
      console.log(_json.name);
      // 메타 데이터 서버로 포스트 하기
      // const preMint = {
      //   user_id: userData.user_id,
      //   token_id: metaDataUrl,
      //   nft_id: _json.name,
      //   img_url: "https://nft999.infura-ipfs.io/ipfs/" + imgUrl.path,
      //   wallet_id: userData.address,
      // }
     // console.log(preMint);
      axios.post("http://localhost:8080/nft/mint", {
        user_id: userData.user_id,
        token_id: metaDataUrl,
        nft_id: _json.name,
        img_url: "https://nft999.infura-ipfs.io/ipfs/" + imgUrl.path,
        wallet_id: userData.address,
    }).then(function(res){
        alert(res.data);
        console.log(res);
      })
      
  }

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
          <img alt="nft_image" className={"uploadImage" + (imageView ? " on" : "")} />
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
