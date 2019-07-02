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
    search_results: [],
    msg: App.D
  }

  setResult = (list) =>{
    const search_msg =  list.length === 0 ? App.N : App.R;
    this.setState({msg: search_msg});
    this.setState({search_results:list});

  }


  render(){
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

      <SearchEngine setResult = {this.setResult} />
      <SearchResults list={this.state.search_results} msg = {this.state.msg}/>

    </div>

  );
}
}

/*
  const Defaultmsg = 'Please enter query and click SEARCH button above, results appear here.';
  const results_msg = 'SEARCH results:';
  const noResults_msg = 'No search results found.';
*/

// Maybe move to Constructor?
App.D= 'Please enter query and click SEARCH button above, results appear here.';
App.R = 'SEARCH results:';
App.N = 'No search results found.';



export default App;
