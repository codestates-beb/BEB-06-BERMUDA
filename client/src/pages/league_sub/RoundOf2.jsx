import { Fragment, React, useState } from "react";
import { useSelector } from "react-redux";
import axios from 'axios';

function RoundOf2(props) {

  // 배팅금액 텍스트 박스
  const [betValue, setBetValue] = useState('0')
  // redux로 현재 로그인 된 유저 정보를 가져온다. 
  const userData = useSelector( (state) => state.userData.userData );

  const setBet = (e) => {
    setBetValue(e.target.value);
    console.log(betValue)
  }

  const vote = () => {
    axios.post('http://localhost:8080/user/vote', {user_id: userData.user_id})
    .then(function(res){
      alert("투표 완료!")
    }).catch(function (error) {
      alert("투표는 한번만 가능합니다");
    });
  }

  const bet = () => {

    const data = {
      user_id: userData.user_id,
      token_bet: betValue
    }

    axios.post('http://localhost:8080/user/bet', data)
    .then(function(res){
      alert("배팅완료")
    }).catch(function (error) {
      alert("배팅할 수 없습니다. \n가스비 또는 보유 토큰이 충분한지 확인하십시오.");
    });
  }

    return (
      
      <Fragment >
         { props.tournament == 2 && (
          <Fragment>
            <div className={"league_box" +  (props.tournament == 2 ? " on" : "" )   } >

              <div className="final_img_box" >
                <div className="final_img" ></div>
                <div>
                  <div className="league_button" onClick={vote} >투표하기</div>
                  <input  className="bet_input" onChange={setBet} />
                  <div className="league_button" onClick={bet}>배팅하기</div>
                </div>
              </div>

              <div className="vs_text final" >VS</div>

              <div className="final_img_box" >
                 <div className="final_img f2" ></div>
                 <div>
                  <div className="league_button" onClick={vote}>투표하기</div>
                  <input  className="bet_input" onChange={setBet}/>
                  <div className="league_button" onClick={bet}>배팅하기</div>
                </div>
              </div>
            </div>

            <div className="comment_box">
              <div className="comment_title" > 실시간 채팅  
                 <span class="material-symbols-rounded">
                   arrow_drop_down
                 </span>
              </div>
              <div className="comment_text" ></div>
              <div className="comment_input_push" ></div>
            </div>
          </Fragment>
         )}
      </Fragment>
    );
  }
  
  export default RoundOf2;
  