import React, { Component } from 'react';

import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import SearchEngine from './components/SearchEngine';
import SearchResults from './components/SearchResults';

import Header from './components/Header';
import Footer from './components/Footer';

import Controller from './controllers/Controller';

import Loader from 'react-loader-advanced';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

/**
 * Main UI
 * @extends Component
 */

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      loading : false,
      msg: App.DEFAULT,
      search_results: [],
    }

  }
  componentDidMount(){
    document.title = "Git Repo Search"
  }

  /**
   * Sets loading(state)
   * @param {Boolean} bool Value to assign
   */
  setLoading = (bool) =>{
    console.log("set loading");
    this.setState({loading : bool});
  }

  /**
   * Sets search_results(state) to list, updates loading(state) and msg(state)
   * @param {Array} list Response from HTTP Request
   */
  setResult = (list) =>{
    const new_msg =  list.length === 0 ? App.NORESULTS : App.RESULTS;

    this.setState({
      loading : false,
      msg : new_msg,
      search_results : list
    });
  }

/*
<Route path='/' render={(props) => <SearchEngine {...props}
  setResult = {this.setResult} setLoading = {this.setLoading} />}/>

<SearchResults list={this.state.search_results} msg = {this.state.msg}/>
<Route path='/:query' component ={SearchResults}/>
<Route path = "/search" render={(props)=> <Controller setResult = {this.setResult}{...props}/>}/>
 */
  render(){
    return (
      <Router>
            <div className="App">
              <Loader show={this.state.loading} message={'loading'}>
                <Header/>
                  <SearchEngine />
                  <Route path = "/search" render = {(props) => <SearchResults setLoading = {this.setLoading} {...props}/>}/>
                <Footer/>
              </Loader>
            </div>

      </Router>
);
  }
}


App.DEFAULT= 'Please enter query and click SEARCH button above, results appear here.';
App.RESULTS = 'SEARCH results:';
App.NORESULTS = 'No search results found.';



export default App;
