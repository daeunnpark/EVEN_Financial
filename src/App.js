import React, { Component } from 'react';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import SearchResults from './components/SearchResults';
import { Navbar } from 'react-bootstrap';
import SearchEngine from './components/SearchEngine';
import TodoItem from './components/TodoItem';
import logo from './logo_resized.png'

class App extends Component{
  state = {
    search_results:[]
  }

  setResult = (list) =>{
    this.setState({search_results:list});
  }


  render(){
  return (
    <div className="App">

/*
      <Navbar bg="primary">
          <Navbar.Brand href="https://evenfinancial.com/">
            <img
              src={logo}
              className="d-inline-block align-top"
              alt="Even Financial logo"

            />
          </Navbar.Brand>
        </Navbar>
*/

      <SearchEngine setResult = {this.setResult}/>
      <SearchResults list={this.state.search_results}/>

    </div>

  );
}
}


export default App;
