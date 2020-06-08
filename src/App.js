import React from 'react';
import './App.css';
import Header from "./components/UI/header"
import Menubar from "./components/UI/menubar"
import Main from "./components/mains/main"
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Menubar />
      <Main/>
    </BrowserRouter>
  );
}

export default App;
