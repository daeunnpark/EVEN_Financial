import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Repo from './Repo'
import '../App.css';
import axios from 'axios'


class SearchResults extends Component{
  constructor(props){
    super(props);
    this.state = {
      search_results : [],
    };
  }

  componentDidMount() {
    this.search();
  }

  componentDidUpdate(prevProps){
    if(this.props.location.search!== prevProps.location.search){
      this.search();
    }
  }

  componentWillUnmount(){
    console.log("UNMOUNT");
  }

  search = () =>{
    const params = new URLSearchParams(this.props.location.search);
    var query = params.get('text') + "+stars:" + params.get('stars') + "+license:" + params.get('license') + "+fork:" + params.get('fork');

    this.props.setLoading(true);
    axios.get("https://api.github.com/search/repositories?q=" + query)
      .then(res => {
        this.setState({
          search_results:res.data.items
        });
        this.props.setLoading(false);
      })
      .catch(error => {
        console.log(error);
        this.props.setLoading(false);
        alert("Something went wrong. Please try again.");
      });

  }

  render(){
    return(
      <React.Fragment>
         <div className = 'searchMsg'>{this.state.search_results.length===0 ?SearchResults.NORESULTS : SearchResults.RESULTS}</div>

        {this.state.search_results.map((repo) =>(
            <Repo
              key = {repo.id}
              name = {repo.full_name}
              ownerName = {repo.owner.login}
              url = {repo.html_url}
              desc = {repo.description}
              numStars = {repo.stargazers_count}
              license = {repo.license.name}
              isforked = {repo.fork}>
            </Repo>
          ))
        }
     </React.Fragment>
   );
  }
}

SearchResults.propTypes = {
  list : PropTypes.array
}

SearchResults.RESULTS = 'SEARCH results:';
SearchResults.NORESULTS = 'No search results found.';

export default SearchResults;
