import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import MainDisplay from './components/MainDisplay/MainDisplay';
import { useAppSelector } from "./app/hooks";


function App() {
  const globalState = useAppSelector(state => state.global);

    return (
      <div className='container-fluid' id='root-container'>
        <div className="App">
          {globalState.loggedIn === true && <Header />}
          {globalState.loggedIn === true && <MainDisplay />}
          {/* {globalState.loggedIn === false && <logInDisplay />} */}
          
        </div>
      </div>
    );
}

export default App;
