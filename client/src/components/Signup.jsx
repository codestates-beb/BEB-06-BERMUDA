import { useState , React } from "react";
import axios from 'axios';

function Signup(props) {
    const [ id ,setId ] = useState();
    const [ password ,setPassword ] = useState();
    const [ password2 ,setPassword2 ] = useState();
    const [ nickName ,setNickName ] = useState();

    const onChangeId = (e) => {
      setId(e.target.value);
    }

    const onChangePassword = (e) => {
      setPassword(e.target.value);
    }

    const onChangePassword2 = (e) => {
      setPassword2(e.target.value);
    }

    const onChangeNickName = (e) => {
      setNickName(e.target.value);
    }

    const onSignUp = () => {

      if (password != password2 ) {
        alert("비밀번호와 비밀번호 확인이 같지 않습니다.");
      }

      const signUp = {
        user_id: id,
        password: password,
        nickname: nickName,
      };

      axios.post('http://localhost:8080/user/join', {signUp})
      .then(function(res){
        alert("회원가입 완료");
        props.onCloseSignIn();
      }).catch(function (error) {
        if ( error.response.data == "id") {
          alert("동일한 아이디가 존재합니다. 다른 아이디로 입력해주세요");
        } 
        if ( error.response.data == "name" ) {
          alert("동일한 닉네임이 존재합니다. 다른 닉네임으로 입력해주세요");
        }
      });

    }



    return (
      <div className="popup_layer" >
      <div className="dim" ></div>
        <div className="neon_buy_popup" >
            <div style={{ textAlign : "right" , color: "white" }}  onClick={props.onCloseSignIn} >
              <span className="material-symbols-outlined close">
                cancel
              </span>
            </div>

              <div className="login_title" >회원가입</div>

              <div className="relative">
                <input className="login_input"  placeholder="아이디"  onChange={onChangeId} value={id}  ></input>
                <span className="material-symbols-outlined">
                    person
                </span>
              </div>

              <div  className="relative">
                <input className="login_input" placeholder="닉네임" onChange={onChangeNickName}  value={nickName} ></input>
                <span className="material-symbols-outlined">
                  badge
                </span>
              </div>

              <div  className="relative">
                <input className="login_input"  placeholder="비밀번호" type="password" onChange={onChangePassword} value={password} ></input>
                <span className="material-symbols-outlined">
                  lock
                </span>
              </div>

              <div  className="relative">
                <input className="login_input"  placeholder="비밀번호 확인" type="password" onChange={onChangePassword2} value={password2}   ></input>
                <span className="material-symbols-outlined">
                 lock
                </span>
              </div>
              <div className="login_button"  onClick={onSignUp} >회원가입</div>
        </div>
      </div>
    );
  }
  
  export default Signup;
  