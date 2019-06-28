import React, { Component } from 'react';
import './App.css';



import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
/*import 'bootstrap/dist/css/bootstrap-theme.css';*/

import { Navbar } from 'react-bootstrap';

import SearchEngine from './components/SearchEngine';

import TodoItem from './components/TodoItem';

import logo from './logo_resized.png'

function App() {
  return (
    <div className="App">


      <Navbar bg="primary">
          <Navbar.Brand href="https://evenfinancial.com/">
            <img
              src={logo}
              className="d-inline-block align-top"
              alt="Even Financial logo"

            />
          </Navbar.Brand>
        </Navbar>


      <SearchEngine/>

    </div>

  );
}

export default App;
