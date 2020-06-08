import React, {Fragment} from 'react';
import './App.css';
import Header from "./components/layout/header"
import Menubar from "./components/layout/menubar"
import Main from "./components/layout/main"

function App() {
  return (
    <Fragment>
      <Header />
      <Menubar />
      <Main/>
    </Fragment>
  );
}

export default App;
