import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Repo from './Repo'
import '../App.css';
import axios from 'axios'

function SearchResults(props){
  const [list, setList] = useState([]);
  const url = "/repositories?q=";

  useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    var query = params.get('text') + "+stars:" + params.get('stars') + "+license:" + params.get('license') + "+fork:" + params.get('fork');
    props.setLoading(true);

    axios.get(url+query)
    .then(res => {
        setList(res.data.items);
        props.setLoading(false);
      })
      .catch(error => {
        console.log(error);
        props.setLoading(false);
        alert("Something went wrong. Please try again.");
      });
  },[props.location.search]);


  return(
    <React.Fragment>
       <div className = 'searchMsg'>{list.length===0 ?SearchResults.NORESULTS : SearchResults.RESULTS}</div>
      {list.map((repo) =>(
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

export default SearchResults;

SearchResults.propTypes = {
  list : PropTypes.array
}

SearchResults.RESULTS = 'SEARCH results:';
SearchResults.NORESULTS = 'No search results found.';
