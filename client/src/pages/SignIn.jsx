import { Fragment , useState } from "react";
import Signup from "../components/Signup";

function SiginIn() {
    const [ signinOepn , setSigninOepn ] =  useState(false);

    const onOpenSignIn = () => {
      setSigninOepn(true);
    }

    const onCloseSignIn = () => {
      setSigninOepn(false);
    }


    return (
      <Fragment>
        <div className="login" >
          <div className="login_box" >
            <div className="login_title" >로그인</div>

            <div className="relative">
              <input className="login_input" placeholder="아이디" ></input>
              <span className="material-symbols-outlined">
                  person
              </span>
            </div>

            <div  className="relative">
              <input className="login_input" placeholder="비밀번호"  ></input>
              <span className="material-symbols-outlined">
              lock
              </span>
            </div>

            <div className="login_button" >로그인</div>
            <div className="sign_up_page_text" onClick={onOpenSignIn}  > 아이디가 없다면 <span style={{ cursor : "pointer" , color:"#343434" }}  >회원가입</span>  </div>
          </div>
        </div>

      { signinOepn && (
        <Signup  onCloseSignIn = {onCloseSignIn} />
      )}

      </Fragment>
    );
  }
  
  export default SiginIn;
  