import React, { Component } from 'react';
//import axios from 'axios';
import PropTypes from 'prop-types';
import '../App.css';


class SearchEngine extends Component{

  state = {
        text: '',
        stars: '',
        license: 'mit', // Default value
        incForked: false,

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


  onSubmit = (event) => {

    event.preventDefault();

    this.props.setLoading(true);

    console.log("submitted");
    console.log(this.state);

    const axios = require('axios');

    var base_url = "https://api.github.com/search/repositories";

    // https://developer.github.com/v3/search/#constructing-a-search-query
    axios.get(base_url, {
        params: {
          q: `${this.state.text} stars:${this.state.stars} license:${this.state.license} fork:${this.state.incForked}`
        }
    })
    .then(res =>{console.log(res.data.items); this.props.setResult(res.data.items)})
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });

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
                <label className = "label">
                  Text
                </label>
                <input
                  type="text"
                  name = "text"
                  value={this.state.text}
                  onChange={this.onChange}
                  required
                />


              </div>
              <div className="form-group">
                <label className = "label">
                  Stars
                </label>
                <input
                    type="text"
                    name = "stars"
                    value={this.state.stars}
                    onChange={this.onChange}
                    required
                    pattern="(>|<|>=|<=)?[0-9]+"
                />
              </div>
            </div>

            <div className = "container">
              <div className="form-group">
                <div>
                <label className = "label">
                  License
                </label>
                  <select name ="license" value={this.state.license} onChange={this.onChange}>
                    <option value="mit">MIT</option>
                    <option value="isc">ISC</option>
                    <option value="apache-2.0">Apache</option>
                    <option value="gpl">GPL</option>
                  </select>

                </div>
              </div>
              <div className="form-group">
                <label id ="checkbox">
                  <input
                    name="incForked"
                    type="checkbox"
                    value={this.state.incForked}
                    onChange={this.onChange}
                  />
                Include Forked
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

  }
}


export default SearchEngine;
