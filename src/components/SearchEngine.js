import React, { Component } from 'react';
import axios from 'axios'
import '../App.css';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';



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
    this.onSubmit = this.onSubmit.bind(this);
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
  onSubmit(event) {
    event.preventDefault();
    //this.props.setLoading(true);
    const params = new URLSearchParams({
      text: this.state.text,
      stars: this.state.stars,
      license: this.state.license,
      fork: this.state.incForked
    });
    this.props.history.push("search?"+ params);
  }


  render(){
    return  <div className = "searchEngine">
              <h3>GitHub Repository Search</h3>
              <form>
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
                  <button onClick={this.onSubmit} className="btn btn-primary">SEARCH</button>
                </div>
              </form>
              <hr/>
            </div>

    }
}

export default withRouter(SearchEngine);


/*
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
 */
