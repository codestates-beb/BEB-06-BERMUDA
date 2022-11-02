import './resources/css/App.css';
import { React , useState }  from 'react';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Header from './components/Header.jsx'
import MainPage from './pages/MainPage.jsx'
import MyPage from './pages/MyPage.jsx'
import Mint from './pages/Mint.jsx'
import SignIn from './pages/SignIn.jsx'
import League from './pages/League.jsx'



function App() {
  const [section, setSection] = useState("main");
  const [ login , setLogin ] = useState(false);
  const [userData , setUserData] = useState({});


  const onClickSection = (e) =>{ 
    let value = e.currentTarget.attributes.value.value;
    setSection(value);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header  onClickSection={onClickSection}  section={section} />
        <Routes >
          <Route path='/' element={<MainPage />} />
          <Route path='/mypage' element={<MyPage section={section} />} />
          <Route path='/mint' element={<Mint />} />
          <Route path='/signin' element={<SignIn setLogin={setLogin} setUserData={setUserData} />}/>
          <Route path='/League' element={<League />}/>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
