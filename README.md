# BEB-06-SECOND-06

## TECH STACK
<div align="center">

  <a href="CSS3">![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)</a>
  <a href="React">![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)</a>
  <a href="React Router">![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)</a>
  <a href="Redux">![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)</a>
  <a href="JavaScript">![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)</a>
  <a href="Axios">![Axios](https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white)</a>
  <a href="Express.js">![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)</a>
  <a href="MySQL">![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)</a>
  <a href="NodeJS">![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)</a>
  <a href="Solidity">![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white)</a>
  <a href="Notion">![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white)</a>
  <a href="GitHub">![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)</a>

</div>

## HOW TO USE

## FILE DESCRIPTION

### /server/services/bet
결승전에서 이길거라고 예상하는 팀에게 배팅할 수 있게 하는 기능. input 박스에 값을 넣고 배팅버튼을 누르면 개인 지갑에 있던 토큰을 서버로 전송

### /server/services/minting
Nft 메타데이터 DB에 저장. user 의 지갑으로 erc20 토큰 지불 후 민팅

### /server/services/faucet
Ganache 계정[1]에서 사용자에게 전송. BE2FE 연결

### /server/services/getNftData
DB에 저장된 사용자의 NFT 데이터 BE2FE 연결

### /server/services/Comment 
결승전을 응원하는 사람들끼리 실시간 채팅을 하는 기능.  채팅을 치면 데이터베이스에 저장이 되고 데이터베이스에 있는 내용을 불러와줌

### /server/services/GetSignUpData 
회원가입 할때 사용  , 회원가입시 각종 에러시 해당 리턴기능 포함 

### /server/services/Login
로그인시 사용 nft 테이블과 조인해서 nft데이터를 함께 리턴 

### /client/src/App.jsx
각 페이지 별로 라우팅

### /client/src/components/Hedaer.jsx
페이지 상단 고정되어있는 상단바

### /client/src/components/ImgSlider.jsx
메인페이지 중단에 있는 이미지 슬라이드

### /client/src/components/Signup.jsx
회원가입 팝업창

### /client/src/Pages/League.jsx
웹툰끼리 투표해서 순위를 가리는 페이지 

### /client/src/Pages/MainPage.jsx
웹페이지 접속시 나타나는 첫 페이지 

### /client/src/Pages/Mint.jsx
팬아트를 민팅하는 페이지 

### /client/src/Pages/MyPage.jsx
보유하고 있는 토큰 nft를 확인 할 수 있는 마이페이지

### /client/src/Pages/SignIn.jsx
로그인 페이지 , 회원가입 가능 

### /client/src/Pages/league_sub/RoundOf16bjsx
웹툰 대항전 16강B조 

### /client/src/Pages/league_sub/RoundOf16jsx
웹툰 대항전 16강A조 

### /client/src/Pages/league_sub/RoundOf8jsx
웹툰 대항전 8강 

### /client/src/Pages/league_sub/RoundOf4jsx
웹툰 대항전 4강 

### /client/src/Pages/league_sub/RoundOf2jsx
웹툰 대항전 결승

### /client/src/reducers/index.js
리덕스 저장소

### /client/src/reducers/reducer.js
리덕스 제어 

### /client/src/resources/App.css
모든 css 제어 



