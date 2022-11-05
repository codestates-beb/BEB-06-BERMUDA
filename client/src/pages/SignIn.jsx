import { Fragment , useState } from "react";
import Signup from "../components/Signup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SiginIn(props) {
    const [ signinOepn , setSigninOepn ] =  useState(false);
    const [ id ,setId ] = useState();
    const [ password ,setPassword ] = useState();

    const onChangeId = (e) => {
      setId(e.target.value);
    }

    const onChangePassword = (e) => {
      setPassword(e.target.value);
    }

    const onOpenSignIn = () => {
      setSigninOepn(true);
    }

    const onCloseSignIn = () => {
      setSigninOepn(false);
    }

    const navigate = useNavigate();

    const onSignIn = () => {

      const signIn = {
        user_id: id,
        password: password,
      };

        axios.post('http://localhost:8080/user/login', {signIn})
        .then(function(res){
          let data = res.data;
          let nft = [];

          for ( let i = 0; i < data.length; i++ ) {
            let resultdata = {};
            resultdata["token_id"] = data[i].token_id;
            resultdata["img_url"] = data[i].img_url;
            nft.push(resultdata);
          }

          let result = {};
          result["address"] = data[0].address;
          result["eth_amount"] = data[0].eth_amount;
          result["nickname"] = data[0].nickname;
          result["token_bet"] = data[0].token_bet;
          result["user_id"] = data[0].user_id;
          result["id"] = data[0].id;
          // result["private_key"] = data[0].private_key;  
          result["token_amount"] = data[0].token_amount;
          result["nft"] = nft;
          
          props.setUserData(result);
          props.setLogin(true);
          alert("로그인 성공!");
          navigate("/");
        }).catch(function (error) {
          alert("로그인 실패");
        });

        // const data = {
        //   nickname: "알파카",
        //   address : "0x60A1764c74eaCa63344D2235Ee5AC1fA0D59Cd9D",
        //   eth_amount : "1",
        //   token_bet : "20",
        //   nft: []
        // }

        // props.setUserData(data);
        // props.setLogin(true);
        // navigate("/");
        // alert("로그인 성공!");

    }


    return (
      <Fragment>
        <div className="login" >
          <div className="login_box" >
            <div className="login_title" >로그인</div>

            <div className="relative">
              <input className="login_input" placeholder="아이디" onChange={onChangeId} value={id}  ></input>
              <span className="material-symbols-outlined">
                  person
              </span>
            </div>

            <div  className="relative">
              <input className="login_input" placeholder="비밀번호"  onChange={onChangePassword} value={password}  type="password"  ></input>
              <span className="material-symbols-outlined">
              lock
              </span>
            </div>

            <div className="login_button" onClick={onSignIn} >로그인</div>
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
  