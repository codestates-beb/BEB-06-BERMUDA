import { Fragment, React, useState } from "react";

function RoundOf4(props) {

    return (
      <Fragment >
        { props.tournament == 4 && (
          <div className={"league_box" +  (props.tournament == 4 ? " on" : "" )   } >

            <div className="versus_box" >
              <div className="inlinblock" >
                <div className="win_icon" ></div>
                <div className="league_img on2" ></div>
                <div className="league_main_text">연애혁명</div>
                <div className="league_button" >투표하기</div>
                <div className="league_button" >보러가기</div>
              </div>
                <div className="vs_text" >VS</div>
              <div className="inlinblock">
                <div className="league_img on13" ></div>
                <div className="league_main_text">인생존망</div>
                <div className="league_button" >투표하기</div>
                <div className="league_button" >보러가기</div>
              </div>
            </div>

            <div className="versus_box on" >
              <div className="inlinblock" >
                <div className="win_icon" ></div>
                <div className="league_img on6" ></div>
                <div className="league_main_text">전지적 독자 시점</div>
                <div className="league_button" >투표하기</div>
                <div className="league_button" >보러가기</div>
              </div>
                <div className="vs_text" >VS</div>
              <div className="inlinblock">
                <div className="league_img on8" ></div>
                <div className="league_main_text">빌드업</div>
                <div className="league_button" >투표하기</div>
                <div className="league_button" >보러가기</div>
              </div>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
  
  export default RoundOf4;
  