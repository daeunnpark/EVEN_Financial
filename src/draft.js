import React, { Component } from 'react';

import Repo from './Repo'


class SearchResults extends Component{


render(){
  //console.log("search results--------");
  return this.props.list.map((repo) =>(
    <Repo key = {repo.id} name = {repo.name} ownerName = {repo.owner.login} url = {repo.html_url}
     desc = {repo.description} numStars = {repo.stargazers_count} license = {repo.license.name} isforked = {repo.fork}><Repo/>
  ));
}

}

export default SearchResults;





/*
- Repo name
- Repo owner's name
- URL to the repo
- Description
- Number of stars
- License
- Whether or not the repo is forked
*/




//SearchEngine.js


onChange  = (event) => {
  //e.preventDefault();

  //this.props.addTodo(this.state.tex);
  /*this.setState({text: ''});*/

  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  //console.log("******");
  //console.log(this.state);

  //console.log("----------");

  this.setState({
    [name]: value
  });

  //console.log(this.state);
}


var final_url = 'https://api.github.com/search/repositories?q=hello+stars:>=100license:mit'

axios.get(final_url)
  .then(function (response) {
    // handle success
    //console.log(response);
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed

  });
