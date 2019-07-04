import React, { Component } from 'react';

import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import SearchEngine from './components/SearchEngine';
import SearchResults from './components/SearchResults';

import Header from './components/Header';
import Footer from './components/Footer';

import Loader from 'react-loader-advanced';
import { BrowserRouter as Router, Route} from 'react-router-dom';

/**
 * Main UI
 * @extends Component
 */

//<Route path = '/' component = {SearchEngine}/>
class App extends Component{

  state = {
    loading : false,
    msg: App.DEFAULT,
    search_results: [],
  }

  /**
   * Sets loading(state)
   * @param {Boolean} bool Value to assign
   */
  setLoading = (bool) =>{
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

  render(){
    return (
      <Router>
            <div className="App">
              <Loader show={this.state.loading} message={'loading'}>
                <Header/>
                {/*<Route path = '/' component = {SearchEngine}/>*/}

                  <Route path='/' render={(props) => <SearchEngine {...props}
                    setResult = {this.setResult} setLoading = {this.setLoading} />}/>

                  {/*<SearchEngine setResult = {this.setResult} setLoading = {this.setLoading}/>*/}
                  <SearchResults list={this.state.search_results} msg = {this.state.msg}/>

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
