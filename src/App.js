import React, { useState, useEffect } from 'react';

import SearchEngine from './components/SearchEngine';
import SearchResults from './components/SearchResults';
import Header from './components/Header';
import Footer from './components/Footer';

import Loader from 'react-loader-advanced';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    document.title = App.TITLE;
  }, []);

    return (
      <Router>
            <div className="App">
              <Loader show={loading} message="">
                <Header/>
                  <Route path = "/" component = {SearchEngine}/>
                  <Route path = "/" render = {(props) => <SearchResults {...props} setLoading = {setLoading} />}/>
                <Footer/>
              </Loader>
            </div>
      </Router>
    );

}

App.TITLE = "Git Repo Search";

export default App;
