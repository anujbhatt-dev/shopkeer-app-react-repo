import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/content/layout';


function App() {
  return (
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>
  );
}

export default App;
