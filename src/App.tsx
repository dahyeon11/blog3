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
    </div>
  );
}

export default App;
