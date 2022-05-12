import React from 'react';
import logo from './logo.svg';
import './App.css';
import useAjax from './hooks/useajax';
import Header from './components/header';
import GlobalStyle from './styles/global-style';
import Main from './pages/main';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/login';
import Article from './pages/article';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/article/:id' element={<Article />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
