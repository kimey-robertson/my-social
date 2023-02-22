import { React, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import MainDisplay from './components/MainDisplay/MainDisplay';
import LoginDisplay from './components/LoginDisplay/LoginDisplay';
import CreateAccount from './components/CreateAccount/CreateAccount';
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn } from './features/userSlice';


function App() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('profile')) {
      dispatch(setLoggedIn(true))
    }
  }, []);

    return (
      <div className='container-fluid' id='root-container'>
        <div className="App">
          <Header />
          {user.loggedIn === true && <MainDisplay />}
          {user.loggedIn === false && user.createAccountDisplay === false && <LoginDisplay />}
          {user.createAccountDisplay === true && <CreateAccount />}
          
        </div>
      </div>
    );
}

export default App;
