import React, { Component } from 'react';
//import axios from 'axios';
import PropTypes from 'prop-types';


class SearchEngine extends Component{
  state = {
        text: '',
        stars: '',
        license: 'mit', // by default
        incForked: false
  }


  onChange = (event) => {
    //e.preventDefault();

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  }


  onSubmit  = (event) => {
    event.preventDefault();
    console.log("submitted");
    console.log(this.state);

/*
    jquery in:name
    stars:500
    stars:10..20
    	stars:>=500 fork:true
      >, >=, <, and <=
      license:apache-2.0
*/

/*
    axios.get('https://api.github.com/search/repositories', {
        params: {
            q: 'EVEN_Financial+user:daeunnpark'
        }
    }).then(res => console.log(res.data))
*/

const axios = require('axios');

    const text = this.state.text;
    const stars = this.state.stars;
    const license = this.state.license;
    var incForked = this.state.incForked;

    console.log("incForked is" + this.state.incForked);
    /*
    if(this.state.incForked){
      incForked = "fork:true";
    }
    console.log("incForked is" + incForked);
*/



//`${text} stars:${stars} `
//'hello stars:100'
//`${base_url}q=${text}+stars:${stars}+license:${license}${incForked}`
    axios.get('https://api.github.com/search/repositories', {
        params: {
          q: `${text} stars:${stars} license:${license} fork:${incForked}`
        }
      })
      .then(function (response) {
        console.log(response);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });

      //You can use paramsSerializer and serialize parameters with https://www.npmjs.com/package/qs

/*
      var base_url = "https://api.github.com/search/repositories?";
      var final_url = `${base_url}q=${text}+stars:${stars}+license:${license}${incForked}`;


      console.log("FINAL URL IS "+ final_url);

      axios.get(final_url)
        .then(function (response) {
          // handle success
          //console.log(response);
          console.log(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed

        });

*/
  }

  render(){


    /* Search Engine */
  return  <div className = "searchEngine">
      <h3>Even Financial GitHub Repository Search</h3>

      <form onSubmit={this.onSubmit}>
        <div>

          {/* inputsContainer*/}
          <div className = "inputsContainer">
            <div className = "container">
              <div className="form-group">
                <label>
                  Text
                  <input
                    type="text"
                    name = "text"
                    value={this.state.text}
                    onChange={this.onChange}
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Stars
                  <input
                    type="text"
                    name = "stars"
                    value={this.state.stars}
                    onChange={this.onChange}
                  />
                </label>
              </div>
            </div>

            <div className = "container">
              <div className="form-group">
                <label>
                  License
                  <select name ="license" value={this.state.license} onChange={this.onChange}>
                    <option value="mit">MIT</option>
                    <option value="isc">ISC</option>
                    <option value="apache-2.0">Apache</option>
                    <option value="gpl">GPL</option>
                  </select>
                </label>
              </div>
              <div className="form-check">
                <label>
                  Include Forked
                  <input
                    name="incForked"
                    type="checkbox"
                    value={this.state.incForked}
                    onChange={this.onChange}
                  />
                </label>
              </div>
            </div>

          </div>
          {/* inputsContainer */}

          <button type="submit" className="btn btn-primary">SEARCH</button>

        </div>
      </form>
    </div>
    {/* Search Engine */}


    /*

    return <form onSubmit = {this.onSubmit} >
    <input
      type = "text"
      name = "text"
      value = {this.state.text}
      onChange = {this.onChange}
    />
    <input
      type = "text"
      name = "stars"
      value = {this.state.stars}
      onChange = {this.onChange}
    />
    <input
      type = "submit"
      value = "Submit"
      name = "title"
    />
    </form>
    */
  }
}


export default SearchEngine;


  /*
state = {
    searchOptions : '',
      text: '',
      stars: '',
      license: '',
      incForked: false

    }
*/
