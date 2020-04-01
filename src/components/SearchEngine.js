import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import '../App.css';

class SearchEngine extends Component{
  constructor(props){
    super(props);
    this.state = {
      text: '',
      stars: '',
      license: 'mit',
      incForked: false,
      msg:true
    };
  }

  componentDidMount(){

    const params = new URLSearchParams(this.props.location.search);
    const queryText = params.get('text');
    const queryStars = params.get('stars');
    const queryLicense = params.get('license');
    const queryFork = params.get('fork');

    if(queryText!=null && queryStars!=null && queryLicense!=null && queryFork!=null){
      this.setState({
        text: queryText,
        stars: queryStars,
        license: queryLicense,
        incForked: (queryFork ==="true")
      });
  }


  }


  onChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      msg:false
    });


    const params = new URLSearchParams({
      text: this.state.text,
      stars: this.state.stars,
      license: this.state.license,
      fork: this.state.incForked
    });
    
    this.props.history.push("search?"+ params);
  }

  render(){
    return  (<div className = "searchEngine">
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
                            checked={this.state.incForked}
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
              {this.state.msg ? <div className = 'searchMsg'>{SearchEngine.DEFAULT}</div>: (null)}
            </div>);

    }
}

SearchEngine.DEFAULT = 'Please enter query and click SEARCH button above, results appear here.';

export default withRouter(SearchEngine);
