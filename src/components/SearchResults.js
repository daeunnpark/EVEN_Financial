import React, { Component } from 'react';

import Repo from './Repo'


class SearchResults extends Component{


render(){
  //console.log("search results--------");
  return this.props.list.map((repo) =>(
    <Repo key = {repo.id} name = {repo.full_name} ownerName = {repo.owner.login} url = {repo.html_url}
     desc = {repo.description} numStars = {repo.stargazers_count} license = {repo.license.name} isforked = {repo.fork}/>
  ));
}

}

export default SearchResults;
