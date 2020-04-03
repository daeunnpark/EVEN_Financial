import React, { useState, useEffect } from 'react';
import queryString from 'query-string'
import axios from 'axios'
import PropTypes from 'prop-types';
import Repo from './Repo'
import '../App.css';


function SearchResults(props){
const [list, setList] = useState([]);

const url = "/repositories?q=";

useEffect(() => {
  const query = () => {
    const parsed = queryString.parse(props.location.search);
    var q=parsed.text? parsed.text : "";
    q += parsed.stars? "+stars:"+parsed.stars : "";
    q += (parsed.license && parsed.license !== "all") ? "+license:"+ parsed.license : "";
    q += (parsed.fork && parsed.fork==="true")? "+fork:"+parsed.fork : "";
    return q;
  };

  const apiCall = (query) => {
    console.log(query);
    if(query){
      props.setLoading(true);
      axios.get(url+query)
      .then(res => {
          setList(res.data.items);
          props.setLoading(false);
        })
        .catch(error => {
          var errorMsg = "";
          if (error.response) {       // Server responds with status code out of range 2xx
          errorMsg += error.response.data + error.response.status + error.response.headers;
        } else if (error.request) {   // No response
          errorMsg += error.request;
        } else {                      // Error in Request
          errorMsg +=error.message;
        }
        props.setLoading(false);
          alert("Something went wrong. Please try again.\n" + errorMsg);
        });
    }
  }

  apiCall(query());
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
            license = {repo.license? repo.license.name : "None"}
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
