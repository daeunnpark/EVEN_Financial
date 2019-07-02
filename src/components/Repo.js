import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Repo extends Component{
// props

/*
- Repo name
- Repo owner's name
- URL to the repo
- Description
- Number of stars
- License
- Whether or not the repo is forked
*/

render(){
  //console.log("repooooo");
  return(

  <div>REPO
  <p>{this.props.name} {this.props.ownerName}{this.props.url} {this.props.desc}</p>
  <p>{this.props.numStars} {this.props.license}{this.props.isforked} </p>
  </div>
);


}
}

export default Repo;
