import React from 'react';
import './App.css';
import Header from "./components/layout/header"
import Menubar from "./components/layout/menubar"
import Main from "./components/layout/main"
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
