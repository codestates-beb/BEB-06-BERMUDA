import { Fragment } from "react";
import { useSelector } from "react-redux";
import axios from 'axios';

function MyPage(props) {

  const userData = useSelector( (state) => state.userData.userData );
  const userAddress = userData.address;
  console.log(userAddress);
  const clickFaucet = () => {
    axios.post("http://localhost:8080/faucet", {userAddress})
    .then(function(res){
      alert(res.data);
      console.log(res);
    })
  }
  

    return (
      <Fragment>
        <div className="mypage_top_box"  >
          <div className="my_img" ></div>
        </div>

        <div className="my_data" >
          <div>
          <div className="nick_name" >{userData.nickname}</div> 
          </div>

          <div className="address_box" >
            {userData.address?.substring(0, 7) +
                            "..." +
                            userData.address?.substring(37)}
          </div>
          <div>
            <div className="eth_box" > <div className="eth_img" ></div> {userData.eth_amount} eth</div>
            <div className="eth_box on" > aa Token : {userData.token_amount}</div>
          </div>
          <div className="faucet_button" onClick={clickFaucet}> faucet 받기 </div>
        </div>


        <div className="collected" >
            <div className="collected_menu_box" > 보유중인 NFT </div>

          {userData.nft.length == 0 ? (
            <div className="collected_nft" >
                 NFT가 없습니다
            </div>
          ) : (
            <div className="collected_nft" >
              {userData.nft.map((vlaue,key) => (
                <div className="nft_box" key={key} >
                  <img className="nft_img"  src={vlaue.img_url} />
                  <div className="nft_id" > {vlaue.nft_id} </div>
                </div>
                ))
              }
            </div>

          )}

        </div>


      </Fragment>
    );
  }
  
  export default MyPage;
  