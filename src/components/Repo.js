import React, { Component } from 'react';

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import '../table.css';
import '../App.css';


/**
 * Repo component representing github repository
 * @extends Component
 */
class Repo extends Component{

  render(){
    return(
          <div>
            <Table>
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th>Stars:</Th>
                  <Th>License:</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <div>
                      <a href={this.props.url} style={{color: '#3E87C6'}} >{this.props.name}{this.props.isforked}</a>
                      <div style= {{backgroundColor: '#3E87C6', color: '#fff'}}>{this.props.isforked&& 'Forked'}</div>
                      <div>{this.props.desc}</div>
                    </div>
                  </Td>
                  <Td>{this.props.numStars}</Td>
                  <Td>{this.props.license}</Td>
                </Tr>
              </Tbody>
            </Table>
          </div> );
  }
}

export default Repo;
