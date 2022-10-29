import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="Header">
      <div className="Header_box" >
        <Link to = "/">
          <div className={"logo" + (props.section == "login" ? " on" : "" )} >M</div>
        </Link>
        <div className="menu_box" >


          <Link to = "/SignIn">
            <div className={"menu_text"  + (props.section == "login" ? " on" : "" )} value={"login"}  onClick={props.onClickSection} >로그인</div> 
          </Link>
          <Link to = "/Mint">
            <div className="menu_text" >create</div>
          </Link>
          <Link to = "/League">
           <div className="menu_text" >최강자전</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
