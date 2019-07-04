import React, { Component } from 'react';


import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import PropTypes from 'prop-types';
import '../table.css';
import '../App.css';


/**
 * Repo component representing github repository
 * @extends Component
 */
class Repo extends Component{
/* props contain:
- Repo name
- Repo owner's name
- URL to the repo
- Description
- Number of stars
- License
- isforked
*/

  render(){
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
                  <Td className = "he" >


                    <div>
                      <a href={this.props.url} style={{color: '#3E87C6'}} >{this.props.name}{this.props.isforked }</a>
                    <div></div>
                    <div>{this.props.desc}{this.props.isforked }</div></div> </Td>
                  <Td className = "he">{this.props.numStars}</Td>
                  <Td className = "he">{this.props.license}</Td>
                </Tr>
              </Tbody>
            </Table>
          </div> );
  }
}

export default Repo;
