import React, { Component } from 'react';

import Repo from './Repo'
import '../App.css';

/**
 * SearchResults Component maps SearchResults to Repo Components
 * @extends Component
 */
class SearchResults extends Component{

render(){
  return(
    <React.Fragment>

      <div className = 'searchMsg'>{this.props.msg}</div>

      { this.props.list.map((repo) =>(
      <Repo key = {repo.id} name = {repo.full_name} ownerName = {repo.owner.login}
        url = {repo.html_url} desc = {repo.description} numStars = {repo.stargazers_count}
        license = {repo.license.name} isforked = {repo.archived}></Repo>))
      }

   </React.Fragment>
   );
 }

}

export default SearchResults;
