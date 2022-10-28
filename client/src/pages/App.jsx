import '../resources/css/App.css';
import Header from './compoents/Header.jsx'
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Header from './MainPage.jsx'
import Header from './MyPage.jsx'
import Header from './Mint.jsx'
import Header from './SignIn.jsx'

function Main() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes path='/' element={<MainPage />} />
      <Routes path='/mypage' element={<MyPage />} />
      <Routes path='/mint' element={<Mint />} />
      <Routes path='/signin' element={<SignIn />}/>
      </BrowserRouter>
    </div>
  );
}

export default Main;
