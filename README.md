# BEB-06-SECOND-06

## USE STACK
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

### 1. .env.example 형식을 토대로 .env 파일을 생성
### 2. mysql 실행
$ mysql -u root -p </br>
### 3. 가나슈 실행 (default가 7545인 가나슈 gui 사용 추천)
**cli 사용시** </br>
$ npm install -g ganache-cli </br>
$ ganache-cli -d --port 7545 </br>
### 4. client 실행
/client $ npm start 
### 5. server 실행
/server $ npm start 
## FILE DESCRIPTION - SERVER

server / abi / Abi, Abi721 : ERC20과 ERC721의 스마트컨트랙트를 ABI 형식으로 치환해 객체형식으로 저장

. / controller / index.js : 각종 라우터 기능 포함

. / model / CreateDatabase : DB와 테이블을 생성할 수 있는 파일. 서버쪽을 노드로 돌리면 자동으로 실행

. / ... / getNftData : DB에 저장된 사용자의 NFT 데이터 BE2FE 연결

. / ... / GetSignUpData : 회원가입 할때 사용, 회원가입시 각종 에러 리턴

. / services / CreateWallet : web3를 이용해서 지갑생성

. / ... / Login : 로그인시 사용 nft 테이블과 조인해서 nft데이터를 함께 리턴 

. / ... / sendToken : 서버계정에서 타 지갑으로 ERC20 토큰 전송

. / ... / sendTokenU2S : 유저지갑에서 서버지갑으로 ERC20 토큰 전송

. / ... / tokenUse/Bet : 승리를 예상하는 팀에게 배팅할 수 있게 하는 기능. input에 값을 넣고 배팅버튼을 누르면 개인 지갑에 있던 토큰을 서버로 전송

. / ... / ... / Comment : 응원하는 사람들끼리 실시간 채팅을 하는 기능. 채팅을 치면 데이터베이스에 저장이 되고 데이터베이스에 있는 내용을 불러옴

. / ... / ... / faucet : 연결된 서버계정에서 사용자에게 전송. BE2FE 연결

. / ... / ... / minting : Nft 메타데이터 DB에 저장. user 의 지갑으로 erc20 토큰 지불 후 민팅

. / ... / ... / vote : 원하는 팀에 투표 및 투표집계를 위해 DB에 저장

. / ... / ... / WinBet : 배팅 승리시 1.8배의 토큰을 지급, 무승부면 배팅 금액 그대로 반환, 패배시 토큰 소각 

## FILE DESCRIPTION - CLIENT

/ client / src / App :각 페이지 별로 라우팅

. / components / Hedaer : 페이지 상단 고정되어있는 상단바

. / ... / ImgSlider : 메인페이지 중단에 있는 이미지 슬라이드

. / ... / Signup : 회원가입 팝업창

. / Pages / League : 웹툰끼리 투표해서 순위를 가리는 페이지 

. / ... / MainPage : 웹페이지 접속시 나타나는 첫 페이지 

. / ... / Mint : 팬아트를 민팅하는 페이지 

. / ... / MyPage : 보유하고 있는 토큰 nft를 확인 할 수 있는 마이페이지

. / ... / SignIn : 로그인 페이지 , 회원가입 가능 

. / ... / league_sub / RoundOf2 : 웹툰 대항전 결승

. / reducers / index : 리덕스 저장소

. / ... / reduce : 리덕스 제어 

. / resources / App.css : 모든 css 제어 



