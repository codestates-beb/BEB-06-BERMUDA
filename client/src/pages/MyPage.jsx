import { Fragment } from "react";

function MyPage(props) {
    return (
      <Fragment>
        <div className="mypage_top_box"  >
          <div className="my_img" ></div>
        </div>

        <div className="my_data" >
          <div>
          <div className="nick_name" >{props.userData.nickname}</div> 
          </div>

          <div className="address_box" >
            {props.userData.address?.substring(0, 7) +
                            "..." +
                            props.userData.address?.substring(37)}
          </div>
          <div>
            <div className="eth_box" > <div className="eth_img" ></div> {props.userData.eth_amount} eth</div>
            <div className="eth_box on" > aa Token : {props.userData.token_bet}</div>
          </div>
        </div>


        <div className="collected" >
            <div className="collected_menu_box" > 보유중인 NFT </div>

            <div className="collected_nft" >
                 NFT가 없습니다
            </div>

        </div>


      </Fragment>
    );
  }
  
  export default MyPage;
  