import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SearchEngine extends Component{
  state = {
        text: '',
        stars: '',
        license: '',
        incForked: false
  }

  //onChange = (e) => this.setState({[e.target.name]: e.target.value});

  onChange  = (e) => {
    //e.preventDefault();
    console.log(this.state);

    if(e.target.type === 'checkbox'){
      this.setState({[e.target.name]: !e.target.value});
    }
    //this.
    //this.props.addTodo(this.state.tex);
    /*this.setState({text: ''});*/
  }


  onSubmit  = (e) => {
    e.preventDefault();
    console.log(this.state);
    //this.
    //this.props.addTodo(this.state.tex);
    /*this.setState({text: ''});*/
  }

  render(){



    /* Search Engine */
  return  <div className = "searchEngine">
      <h3>Even Financial GitHub Repository Search</h3>

      <form onSubmit={this.handleSubmit}>
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
                  Text
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
                  <select value={this.state.license} onChange={this.onChange}>
                    <option value="FIRST">FIRST</option>
                    <option value="SECOND">SECOND</option>
                    <option value="THIRD">THIRD</option>
                    <option value="FOURTH">FOURTH</option>
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
