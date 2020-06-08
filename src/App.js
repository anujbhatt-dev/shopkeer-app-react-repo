import React from 'react';
import './App.css';
import Header from "./components/UI/header"
import { BrowserRouter } from 'react-router-dom';
import Content from './components/content/content';


function App() {
  return (
    <BrowserRouter>
      <Header />
     <Content/>
    </BrowserRouter>
  );
}

export default App;
