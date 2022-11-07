import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { onChangeSection } from '../reducers/reducer';


function Header(props) {

  const dispatch = useDispatch();
  const section = useSelector( (state) => state.section.section );
  const login = useSelector( (state) => state.login.login );

  return (
    <div className="Header">
      <div className="Header_box" >
        <Link to = "/">                                                                                    
          <div className={"logo" + (section == "login" ? " on" : "" )}  onClick={ () =>  dispatch( onChangeSection( "main" ) )} >M</div>
        </Link>
        <div className="menu_box" >

          { !login ? ( 
          <Link to = "/SignIn">
            <div className={"menu_text"  + (section == "login" ? " on" : "" )} onClick={ () =>  dispatch( onChangeSection( "login" ) )} >로그인</div> 
          </Link>
          ) : (
           <Fragment>
              <Link to = "/mypage">
               <div className={"menu_text"  + (section == "mypage" ? " on" : "" )}   onClick={ () =>  dispatch( onChangeSection( "mypage" ) )} >마이페이지</div> 
              </Link>
              <div className={"menu_text"} onClick={props.logOut} > 로그아웃 </div>
            </Fragment>
          )}


          <Link to = "/Mint">
            <div  className={"menu_text"  + (section == "create" ? " on" : "" )}  onClick={ () =>  dispatch( onChangeSection( "create" ) )}  >create</div>
          </Link>
          <Link to = "/League">
           <div  className={"menu_text"  + (section == "league" ? " on" : "" )}   onClick={ () =>  dispatch( onChangeSection( "league" ) )} >최강자전</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
