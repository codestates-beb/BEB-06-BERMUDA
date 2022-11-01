import { Fragment, React, useState } from "react";

function RoundOf16(props) {

    return (
      <Fragment >
        { props.tournament == 17 && (
          <div className={"league_box" +  (props.tournament == 17 ? " on" : "" )   } >

            <div className="versus_box" >
              <div className="inlinblock" >
                <div className="league_img on1" ></div>
                <div className="league_main_text">물위의 우리</div>
                <div className="league_button" >투표하기</div>
                <div className="league_button" >보러가기</div>
              </div>
                <div className="vs_text" >VS</div>
              <div className="inlinblock">
                <div className="win_icon" ></div>
                {/* <div className="win_text" >승리</div> */}
                <div className="league_img on16" ></div>
                <div className="league_main_text">앵무살수</div>
                <div className="league_button" >투표하기</div>
                <div className="league_button" >보러가기</div>
              </div>
            </div>

            <div className="versus_box on" >
              <div className="inlinblock" >
                <div className="win_icon" ></div>
                <div className="league_img on2" ></div>
                <div className="league_main_text">연애혁명</div>
                <div className="league_button" >투표하기</div>
                <div className="league_button" >보러가기</div>
              </div>
                <div className="vs_text" >VS</div>
              <div className="inlinblock">
                <div className="league_img on15" ></div>
                <div className="league_main_text">잔불의 기사</div>
                <div className="league_button" >투표하기</div>
                <div className="league_button" >보러가기</div>
              </div>
            </div>

            <div className="versus_box" >
              <div className="inlinblock" >
                <div className="league_img on3" ></div>
                <div className="win_icon" ></div>
                <div className="league_main_text">나노 마신</div>
                <div className="league_button" >투표하기</div>
                <div className="league_button" >보러가기</div>
              </div>
                <div className="vs_text" >VS</div>
              <div className="inlinblock">
                <div className="league_img on14" ></div>
                <div className="league_main_text">쿠베라</div>
                <div className="league_button" >투표하기</div>
                <div className="league_button" >보러가기</div>
              </div>
            </div>

            <div className="versus_box on" >
              <div className="inlinblock" >
                <div className="league_img on4" ></div>
                <div className="league_main_text">순정빌런</div>
                <div className="league_button" >투표하기</div>
                <div className="league_button" >보러가기</div>
              </div>
                <div className="vs_text" >VS</div>
              <div className="inlinblock">
                <div className="win_icon" ></div>
                <div className="league_img on13" ></div>
                <div className="league_main_text">인생존망</div>
                <div className="league_button" >투표하기</div>
                <div className="league_button" >보러가기</div>
              </div>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
  
  export default RoundOf16;
  