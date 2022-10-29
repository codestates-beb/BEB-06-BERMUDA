function SiginIn() {
    return (
      <div className="login" >
        <div className="login_box" >
          <div className="login_title" >로그인</div>
          <input className="login_input" ></input>
          <input className="login_input" ></input>
          <div className="login_button" >로그인</div>
          <div className="sign_up_page_text" > 아이디가 없다면 <span style={{ cursor : "pointer" , color:"#343434" }}  >회원가입</span>  </div>
        </div>
      </div>
    );
  }
  
  export default SiginIn;
  