import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const signUp = {
    user_id: "demon",
    password: "demon",
    nickname: "demon"
  };

  const signIn = {
    user_id: "tyy8282",
    password: "333"
  };

  const join = () => {
    axios.post('http://localhost:8080/user/join', {signUp})
    .then(function(res){
      console.log(res)
    }).catch(function (error) {
      console.log(error);
    });
  }

  const login = () => {
    axios.post('http://localhost:8080/user/login', {signIn})
    .then(function(res){
      console.log(res)
    }).catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="teal" onClick={join}>JOIN</button>
        <button className="teal" onClick={login}>LOGIN</button>
      </header>
    </div>
  );
}

export default App;
