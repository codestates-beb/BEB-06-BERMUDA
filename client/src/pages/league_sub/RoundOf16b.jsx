import { Fragment, React, useState } from "react";

function RoundOf16b(props) {

    return (
      <Fragment >
        { props.tournament == 16 && (
          <div className={"league_box" +  (props.tournament == 16 ? " on" : "" )   } >

            <div className="versus_box" >
              <div className="inlinblock" >
                <div className="win_icon" ></div>
                <div className="league_img on5" ></div>
                <div className="league_main_text">별이삼샵</div>
                <div className="league_button" >투표하기</div>
                <div className="league_button" >보러가기</div>
              </div>
                <div className="vs_text" >VS</div>
              <div className="inlinblock">
                <div className="league_img on12" ></div>
                <div className="league_main_text">이제 곧 죽습니다</div>
                <div className="league_button" >투표하기</div>
                <div className="league_button" >보러가기</div>
              </div>
            </div>

            <div className="versus_box on" >
              <div className="inlinblock" >
                <div className="league_img on6" ></div>
                <div className="win_icon" ></div>
                <div className="league_main_text">전지적 독자 시점</div>
                <div className="league_button" >투표하기</div>
                <div className="league_button" >보러가기</div>
              </div>
                <div className="vs_text" >VS</div>
              <div className="inlinblock">
                <div className="league_img on11" ></div>
                <div className="league_main_text">심연의 하늘</div>
                <div className="league_button" >투표하기</div>
                <div className="league_button" >보러가기</div>
              </div>
            </div>

            <div className="versus_box" >
              <div className="inlinblock" >
                <div className="league_img on7" ></div>
                <div className="win_icon" ></div>
                <div className="league_main_text">일렉시드</div>
                <div className="league_button" >투표하기</div>
                <div className="league_button" >보러가기</div>
              </div>
                <div className="vs_text" >VS</div>
              <div className="inlinblock">
                <div className="league_img on10" ></div>
                <div className="league_main_text">방백남녀</div>
                <div className="league_button" >투표하기</div>
                <div className="league_button" >보러가기</div>
              </div>
            </div>

            <div className="versus_box on" >
              <div className="inlinblock" >
                <div className="league_img on8" ></div>
                <div className="win_icon" ></div>
                <div className="league_main_text">빌드업</div>
                <div className="league_button" >투표하기</div>
                <div className="league_button" >보러가기</div>
              </div>
                <div className="vs_text" >VS</div>
              <div className="inlinblock">
                <div className="league_img on9" ></div>
                <div className="league_main_text">신도림</div>
                <div className="league_button" >투표하기</div>
                <div className="league_button" >보러가기</div>
              </div>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
  
  export default RoundOf16b;
  