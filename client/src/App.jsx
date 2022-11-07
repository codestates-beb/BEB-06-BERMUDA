import './resources/css/App.css';
import { React , useState }  from 'react';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Header from './components/Header.jsx'
import MainPage from './pages/MainPage.jsx'
import MyPage from './pages/MyPage.jsx'
import Mint from './pages/Mint.jsx'
import SignIn from './pages/SignIn.jsx'
import League from './pages/League.jsx'
import { useDispatch, useSelector } from 'react-redux'; // useDispatch 리덕스 함수 사용 , useSelector state 사용

function App() {

  const dispatch = useDispatch();

  const logOut = () => {
    dispatch({  type: "logout" });
    dispatch({  type: "delete" });
  }

  return (
    <div className="App">
      <BrowserRouter >
        <Header  logOut={logOut}   />
        <Routes >
          <Route path='/' element={<MainPage />} />
          <Route path='/mypage' element={<MyPage  />}  />
          <Route path='/mint' element={<Mint />} />
          <Route path='/signin' element={<SignIn />}/>
          <Route path='/League' element={<League />}/>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}


export default App;
