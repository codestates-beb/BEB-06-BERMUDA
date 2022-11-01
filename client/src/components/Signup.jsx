function Signup(props) {
    return (
      <div className="popup_layer" >
      <div className="dim" ></div>
        <div className="neon_buy_popup" >


            <div style={{ textAlign : "right" , color: "white" }}  onClick={props.onCloseSignIn} >
              <span class="material-symbols-outlined close">
                cancel
              </span>
            </div>
        {/* <div className="login" >
            <div className="login_box" > */}
              <div className="login_title" >회원가입</div>

              <div className="relative">
                <input className="login_input"  placeholder="아이디" ></input>
                <span className="material-symbols-outlined">
                    person
                </span>
              </div>

              <div  className="relative">
                <input className="login_input" placeholder="닉네임" ></input>
                <span class="material-symbols-outlined">
                  badge
                </span>
              </div>

              <div  className="relative">
                <input className="login_input"  placeholder="비밀번호"  ></input>
                <span className="material-symbols-outlined">
                  lock
                </span>
              </div>

              <div  className="relative">
                <input className="login_input"  placeholder="비밀번호 확인"  ></input>
                <span className="material-symbols-outlined">
                 lock
                </span>
              </div>

              <div className="login_button" >회원가입</div>
            {/* </div>
          </div>  */}
        </div>
      </div>
    );
  }
  
  export default Signup;
  