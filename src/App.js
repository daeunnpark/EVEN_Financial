import React, { Component } from 'react';

import SearchEngine from './components/SearchEngine';
import SearchResults from './components/SearchResults';
import Header from './components/Header';
import Footer from './components/Footer';

import Loader from 'react-loader-advanced';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      loading : false,
      msg: App.DEFAULT,
    }

  }
  componentDidMount(){
    document.title = App.TITLE;
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
      <Router>
            <div className="App">
              <Loader show={this.state.loading} message={'Loading'}>
                <Header/>
                  <Route path = "/" component = {SearchEngine}/>
                  <Route path = "/search" render = {(props) => <SearchResults setLoading = {this.setLoading} {...props}/>}/>
                <Footer/>
              </Loader>
            </div>

      </Router>
);
  }
}




App.TITLE = "Git Repo Search";



export default App;
