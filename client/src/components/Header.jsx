import { Fragment } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="Header">
      <div className="Header_box" >
        <Link to = "/">
          <div className={"logo" + (props.section == "login" ? " on" : "" )}  value={"main"}  onClick={props.onClickSection} >M</div>
        </Link>
        <div className="menu_box" >

          { !props.login ? ( 
          <Link to = "/SignIn">
            <div className={"menu_text"  + (props.section == "login" ? " on" : "" )} value={"login"}  onClick={props.onClickSection} >로그인</div> 
          </Link>
          ) : (
           <Fragment>
              <Link to = "/mypage">
               <div className={"menu_text"  + (props.section == "mypage" ? " on" : "" )} value={"mypage"}  onClick={props.onClickSection} >마이페이지</div> 
              </Link>
              <div className={"menu_text"} onClick={props.logOut} > 로그아웃 </div>
            </Fragment>
          )}


          <Link to = "/Mint">
            <div  className={"menu_text"  + (props.section == "create" ? " on" : "" )} value={"create"} onClick={props.onClickSection}  >create</div>
          </Link>
          <Link to = "/League">
           <div  className={"menu_text"  + (props.section == "league" ? " on" : "" )} value={"league"}  onClick={props.onClickSection} >최강자전</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
