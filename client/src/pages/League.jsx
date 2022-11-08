import { Fragment, React, useState } from "react";
import RoundOf16 from "./league_sub/RoundOf16";
import RoundOf16b from "./league_sub/RoundOf16b";
import RoundOf8 from "./league_sub/RoundOf8";
import RoundOf4 from "./league_sub/RoundOf4";
import RoundOf2 from "./league_sub/RoundOf2";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from 'axios';

function League() {

  // redux로 현재 로그인 된 유저 정보를 가져온다. 
  const userData = useSelector( (state) => state.userData.userData );

  const navigate = useNavigate();
  const [tournament, setTournament] = useState(17);
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [betEnd , setBetEnd] = useState(false);


  const onChangeValue = (e) => {
    let value = e.currentTarget.attributes.value.value;
    setTournament(value);
  }

  function CountDownTimer() {
    var end = new Date('11/9/2022');
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var now = new Date();
    var distance = end - now;
  
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);

    if(tournament === "2" && days===0 && hours===0 && minutes===0 && seconds===0){
      if(betEnd===false){
        setBetEnd(true);
        winner()
      }
    }
  }

  const winner = () => {
    axios.post('http://localhost:8080/user/win', {user_id: userData.user_id})
    .then(function(res){
      alert(res.data);
    }).catch(function (error) {
      console.log(error)
      alert(error.response.data);
    });
  }

  const onBetEnd = () => {
    setBetEnd(true);
    navigate("/myPage");
    winner();
  }

  useEffect(() => {
      let timer = setInterval(() => CountDownTimer()
      )

      return () => clearInterval(timer);
  });
  

    return (
      <div className="league" >
        <div className="league_title" >웹툰 최강자전</div>

        { tournament != 2 ? (
          <Fragment>
            <div className="last_arrow_text" >투표가 모두 끝난 페이지 입니다</div>
            <div className="arrow_icon" >
              <span className="material-symbols-outlined">
                double_arrow
              </span>
            </div>
            <div className="arrow_button" onClick={onChangeValue} value={2} > 결승전 보러가기 </div>
          </Fragment>
        ) : (
          <Fragment>
            {betEnd  == false ? ( 
              <div className="end_text_box" >
                <div className="end_text" >결승전 투표 마감 까지   </div>
                <div className="end_text2" > {days}일  : {hours}시 : {minutes}분 : {seconds}초  <div className="bet_end_button" onClick={onBetEnd}  >투표 강제 종료</div></div>  
              </div>
            ) : (
              <Fragment>
                <div className="last_arrow_text" >투표가 모두 끝난 페이지 입니다</div>
                <div className="arrow_icon" >
                  <span className="material-symbols-outlined">
                    double_arrow
                  </span>
                </div>
                <div className="arrow_button" onClick={onChangeValue} value={2} > 내 코인 확인하기 </div>
              </Fragment>
            )}
          </Fragment>
        )}

        <div className="league_menu" >
          <div className={"league_menu_one" + ( tournament == 17 ?  " on" : "")}  onClick={onChangeValue} value={17} >16강 A조</div>
          <div className={"league_menu_one" + ( tournament == 16 ?  " on" : "")}  onClick={onChangeValue} value={16} >16강 B조</div>
          <div className={"league_menu_one" + ( tournament == 8 ?  " on" : "")}  onClick={onChangeValue} value={8} >8강</div>
          <div className={"league_menu_one" + ( tournament == 4 ?  " on" : "")}  onClick={onChangeValue} value={4} >4강</div>
          <div className={"league_menu_one" + ( tournament == 2 ?  " on" : "")}  onClick={onChangeValue} value={2} >결승</div>
        </div>
        <RoundOf16 tournament={tournament} />
        <RoundOf16b tournament={tournament} />
        <RoundOf8 tournament={tournament} />
        <RoundOf4 tournament={tournament} />
        <RoundOf2 tournament={tournament} />
      </div>
    );
  }
  
  export default League;
  