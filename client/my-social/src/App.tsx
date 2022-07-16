import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import MainDisplay from './components/MainDisplay/MainDisplay';

function App() {
    return (
      <div className='container-fluid' id='root-container'>
        <div className="App">
          <Header />
          < MainDisplay />
          
        </div>
      </div>
    );
}

export default App;
