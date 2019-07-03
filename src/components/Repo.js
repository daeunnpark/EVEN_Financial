import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import '../table.css';
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



<div>

  <Table>
        <Thead>
          <Tr>
            <Th className = "he" ></Th>
            <Th className = "he" >Stars:</Th>
            <Th className = "he" >License:</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td className = "he" ><div><a href={this.props.url}>{this.props.name}</a> forked</div><div>{this.props.desc}</div></Td>
            <Td className = "he">{this.props.numStars}</Td>
            <Td className = "he">{this.props.license}</Td>
          </Tr>

        </Tbody>
      </Table>


</div>

);


}
}

export default Repo;
