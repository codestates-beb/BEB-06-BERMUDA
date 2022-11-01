import { Fragment, React, useState } from "react";

function RoundOf8(props) {

    return (
      <Fragment >
        { props.tournament == 8 && (
          <div className={"league_box" +  (props.tournament == 8 ? " on" : "" )   } >

            <div className="versus_box" >
              <div className="inlinblock" >
                <div className="league_img on16" ></div>
                <div className="league_main_text">앵무살수</div>
                <div className="league_button" >투표하기</div>
                <div className="league_button" >보러가기</div>
              </div>
                <div className="vs_text" >VS</div>
              <div className="inlinblock">
                <div className="win_icon" ></div>
                <div className="league_img on2" ></div>
                <div className="league_main_text">연애혁명</div>
                <div className="league_button" >투표하기</div>
                <div className="league_button" >보러가기</div>
              </div>
            </div>

            <div className="versus_box on" >
              <div className="inlinblock" >
                <div className="league_img on3" ></div>
                <div className="league_main_text">나노마신</div>
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

            <div className="versus_box" >
              <div className="inlinblock" >
                <div className="league_img on5" ></div>
                <div className="league_main_text">별이삼샵</div>
                <div className="league_button" >투표하기</div>
                <div className="league_button" >보러가기</div>
              </div>
                <div className="vs_text" >VS</div>
              <div className="inlinblock">
                <div className="league_img on6" ></div>
                <div className="win_icon" ></div>
                <div className="league_main_text">전지적 독자 시점</div>
                <div className="league_button" >투표하기</div>
                <div className="league_button" >보러가기</div>
              </div>
            </div>

            <div className="versus_box on" >
              <div className="inlinblock" >
                <div className="league_img on7" ></div>
                <div className="league_main_text">일렉시드</div>
                <div className="league_button" >투표하기</div>
                <div className="league_button" >보러가기</div>
              </div>
                <div className="vs_text" >VS</div>
              <div className="inlinblock">
                <div className="win_icon" ></div>
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
  
  export default RoundOf8;
  