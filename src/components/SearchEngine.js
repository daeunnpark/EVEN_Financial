import React, { Component } from 'react';
import axios from 'axios'
import '../App.css';


const APIurl = "https://api.github.com/search/repositories";

/**
 * SearchEngine Component with search options represented in state
 * @extends Component
 */
class SearchEngine extends Component{
  constructor(props){
    super(props);
    this.state = {
      text: '',
      stars: '',
      license: 'mit',
      incForked: false,
    };
  }

  /**
   * Parses URL and updates SearchEngine and SearchResults
   */
  componentDidMount() {

    var arr = this.props.location.search.split('+');

      if(arr.length===4){

          var temp_text = arr[0];
          var temp_stars = arr[1];
          var temp_license = arr[2];
          var tmp_fork = arr[3];

          arr[0] = temp_text.substring(1);
          arr[1] = decodeURI(temp_stars.substring(6));
          arr[2] = temp_license.substring(8);
          arr[3] = tmp_fork.includes("true") ? true : false;

          this.setState({
            text: arr[0],
            stars: arr[1],
            license:arr[2],
            incForked: arr[3]
          });

          var query = `${arr[0]} stars:${arr[1]} license:${arr[2]} fork:${arr[3]}`;

          axios.get( APIurl , {
           params: {
             q: query
           }
          })
          .then(res =>{ this.props.setResult(res.data.items) })
          .catch(function (error) {
           alert("Something went wrong. Please try again.");
          });
        } else {
          if( this.props.location.search !=='' ||arr.length >1){
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
    this.props.setLoading(true);
    var query = `?${this.state.text}+stars:${this.state.stars}+license:${this.state.license}+fork:${this.state.incForked}`;
    this.props.history.push({
      search: query
    })
    window.location.reload();
    this.componentDidMount();
  }

  render(){
    return  <div className = "searchEngine">
              <h3>GitHub Repository Search</h3>
              <form onSubmit={this.onSubmit}>
                <div>
                  <div className = "inputsContainer">
                    <div className = "container">
                      <div id = "inputText" className="form-group">
                        <label className = "label">
                          Text
                        </label><br/>
                        <input
                          className = "inputClass"
                          type="text"
                          name = "text"
                          value={this.state.text}
                          onChange={this.onChange}
                          required
                          />
                      </div>
                      <div id = "inputStars" className="form-group">
                        <label className = "label">
                          Stars
                        </label><br/>
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
                    <div className = "container" id = "container2">
                      <div id = "inputLicense" className="form-group">
                        <div>
                          <label className = "label">
                            License
                          </label><br/>
                          <select className = "inputClass"name ="license" value={this.state.license} onChange={this.onChange}>
                            <option value="mit">MIT</option>
                            <option value="isc">ISC</option>
                            <option value="apache-2.0">Apache</option>
                            <option value="gpl">GPL</option>
                          </select>
                        </div>
                      </div>
                      <div id = "inputForked" className="form-group">
                          <input
                            id = "checkbox"
                            name="incForked"
                            type="checkbox"
                            defaultChecked={this.state.incForked}
                            onChange={this.onChange}
                            />
                          <label id ="checkboxLabel">
                          Include Forked
                          </label><br/>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">SEARCH</button>
                </div>
              </form>
              <hr/>
            </div>

    }
}


export default SearchEngine;
