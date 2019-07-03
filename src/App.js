import React, { Component } from 'react';

import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import SearchEngine from './components/SearchEngine';
import SearchResults from './components/SearchResults';

import Header from './components/Header';
import Footer from './components/Footer';

import Loader from 'react-loader-advanced';



class App extends Component{

  state = {
    loading : false,
    msg: App.DEFAULT,
    search_results: [],
  }

  setLoading = (bool) =>{
    this.setState({loading : bool});
  }

  setResult = (list) =>{
    const new_msg =  list.length === 0 ? App.NORESULTS : App.RESULTS;

    this.setState({
      loading : false,
      msg : new_msg,
      search_results : list
    });
  }

  render(){
    return (
              <Loader show={this.state.loading} message={'loading'}>
                <Header/>
                  <SearchEngine setResult = {this.setResult} setLoading = {this.setLoading}/>
                  <SearchResults list={this.state.search_results} msg = {this.state.msg}/>

                <Footer/>
              </Loader>
      );
  }
}


App.DEFAULT= 'Please enter query and click SEARCH button above, results appear here.';
App.RESULTS = 'SEARCH results:';
App.NORESULTS = 'No search results found.';



export default App;
