import React, { Component } from 'react';

import PropTypes from 'prop-types';
import axios from 'axios'
import '../App.css';


/**
 * SearchEngine Component with search options represented in state
 * @extends Component
 */
class SearchEngine extends Component{

  state = {
    text: '',
    stars: '',
    license: 'mit', // Default value
    incForked: false,

  }

  /**
   * Updates state according to user inputs
   * @param  {Event} event Current event
   */
  onChange = (event) => {

    event.preventDefault();

    const target = event.target;

    // For checkbox type, value is a boolean
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  }


  /**
   * Makes HTTP GET request to API with user inputs and sets results to the response
   * @param  {Event} event Current event
   */
  onSubmit = (event) => {

    event.preventDefault();

    // Show loading page while HTTP request
    this.props.setLoading(true);

    const APIurl = "https://api.github.com/search/repositories";


    // Read https://developer.github.com/v3/search/#constructing-a-search-query for details about search query
    // q = SEARCH_KEYWORD+stars:N+license:LICENSENAME+fork:BOOLEAN

    // Make HTTP GET Request
    axios.get( APIurl , {
      params: {
        q: `${this.state.text} stars:${this.state.stars} license:${this.state.license} fork:${this.state.incForked}`
      }
    })
    .then(res =>{                         // Success
            console.log(res.data.items);                //DELETE
            this.props.setResult(res.data.items) })
    .catch(function (error) {                           // Error
      console.log(error);
    });

  }

  render(){
    return  <div className = "searchEngine">

              <h3>Even Financial GitHub Repository Search</h3>

              <form onSubmit={this.onSubmit}>
                <div>

                  {/* inputsContainer*/}
                  <div className = "inputsContainer">

                    <div className = "container">
                      <div id = "div1" className="form-group">
                        <label className = "label">
                          Text
                        </label>
                        <input
                          className = "inputClass"
                          type="text"
                          name = "text"
                          value={this.state.text}
                          onChange={this.onChange}
                          required
                          />
                      </div>
                      <div id = "div2" className="form-group">
                        <label className = "label">
                          Stars
                        </label>
                        <input
                          className = "inputClass"
                          type="text"
                          name = "stars"
                          value={this.state.stars}
                          onChange={this.onChange}
                          required
                          pattern="(>|<|>=|<=)?[0-9]+"
                          />
                      </div>
                    </div>
                    <br/>
                    <div className = "container">
                      <div id = "div3" className="form-group">
                        <div>
                          <label className = "label">
                            License
                          </label>
                          <select className = "inputClass"name ="license" value={this.state.license} onChange={this.onChange}>
                            <option value="mit">MIT</option>
                            <option value="isc">ISC</option>
                            <option value="apache-2.0">Apache</option>
                            <option value="gpl">GPL</option>
                          </select>

                        </div>
                      </div>
                      <div  id = "div4"className="form-group22">
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

    }
}


export default SearchEngine;
