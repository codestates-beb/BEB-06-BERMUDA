import { Fragment, React, useState } from "react";

function RoundOf2(props) {

    return (
      <Fragment >
         { props.tournament == 2 && (
            <div className={"league_box" +  (props.tournament == 2 ? " on" : "" )   } >

              <div className="final_img_box" >
                <div className="final_img" ></div>
                <div>
                  <div className="league_button" >투표하기</div>
                  <input  className="bet_input"  />
                  <div className="league_button" >배팅하기</div>
                </div>
              </div>

              <div className="vs_text final" >VS</div>

              <div className="final_img_box" >
                 <div className="final_img f2" ></div>
                 <div>
                  <div className="league_button" >투표하기</div>
                  <input  className="bet_input" />
                  <div className="league_button" >배팅하기</div>
                </div>
              </div>

              
            </div>
         )}
      </Fragment>
    );
  }
  
  export default RoundOf2;
  