import React, { Component } from 'react';

import Repo from './Repo'


class SearchResults extends Component{



/*

  render () {
     return (
         <div>
             {stations.map(station => <div> {station} </div>)}
         </div>
     );
  }



  return (
      <React.Fragment>
          <h1>Page title</h1>
          <ContentComponent />
          {this.props.showFooter && (
              <footer>(c) stackoverflow</footer>
          )}
      </React.Fragment>
  )



*/

render(){
  //console.log("search results--------");

  return(
    <React.Fragment>

    <div>{this.props.msg}</div>
    {this.props.list.map((repo) =>(
    <Repo key = {repo.id} name = {repo.full_name} ownerName = {repo.owner.login} url = {repo.html_url}
     desc = {repo.description} numStars = {repo.stargazers_count} license = {repo.license.name} isforked = {repo.fork}></Repo>))}
     
   </React.Fragment>
   );
}

}

export default SearchResults;
