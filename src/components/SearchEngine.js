import React, { Component } from 'react';

import PropTypes from 'prop-types';
import axios from 'axios'
import '../App.css';
import queryString from 'query-string'


/**
 * SearchEngine Component with search options represented in state
 * @extends Component
 */
class SearchEngine extends Component{
  constructor(props){
    super(props);

    // Default values
    this.state = {
      text: '',
      stars: '',
      license: 'mit',
      incForked: false,
    }
  }

  /**
   * Parses URL and update Search Engine and Search Results
   */
  componentDidMount() {

    var arr = this.props.location.search.split('+');

      // Query is present in URL
      if(arr.length===4){

          // Parse each param
          var temp_text = arr[0];
          var temp_stars = arr[1];
          var temp_license = arr[2];
          var tmp_fork = arr[3];

          arr[0] = temp_text.substring(1);
          arr[1] = decodeURI(temp_stars.substring(6));
          arr[2] = temp_license.substring(8);
          arr[3] = tmp_fork.includes("true") ? true : false; // Boolean type

          // Update user inputs in UI
          this.setState({
            text: arr[0],
            stars: arr[1],
            license:arr[2],
            incForked: arr[3]
          });


          const APIurl = "https://api.github.com/search/repositories";


          // Read https://developer.github.com/v3/search/#constructing-a-search-query for details
          // q = SEARCH_KEYWORD+stars:N+license:LICENSENAME+fork:BOOLEAN

          var query = `${arr[0]} stars:${arr[1]} license:${arr[2]} fork:${arr[3]}`;

          // Make HTTP GET Request
          axios.get( APIurl , {
           params: {
             q: query
           }
          })
          .then(res =>{                                         // Success
                 //console.log(res.data.items);
                 this.props.setResult(res.data.items) })
          .catch(function (error) {                             // Error
           //console.log(error);
           alert("Something went wrong. Please try again.");
          });

        } else { // Missing params in query
            if( arr.length >1){
              alert("Please check your query.");
            }
        }

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

    var query = `?${this.state.text}+stars:${this.state.stars}+license:${this.state.license}+fork:${this.state.incForked}`;


    this.props.history.push({
      search: query
    })


      console.log("herereee11111");
      window.location.reload();
      this.componentDidMount();

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
                            defaultChecked={this.state.incForked}
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
