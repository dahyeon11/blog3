import React from 'react';
import logo from './logo.svg';
import './App.css';
import useAjax from './hooks/useajax';
import Header from './components/header';
import GlobalStyle from './styles/global-style';
import Main from './pages/main';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Main />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
