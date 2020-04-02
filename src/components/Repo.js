import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import '../table.css';
import '../App.css';

const Repo = (props) =>{
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
                      <a href={props.url} style={{color: '#3E87C6'}} >{props.name}{props.isforked}</a>
                      <div style= {{backgroundColor: '#3E87C6', color: '#fff'}}>{props.isforked&& 'Forked'}</div>
                      <div>{props.desc}</div>
                    </div>
                  </Td>
                  <Td>{props.numStars}</Td>
                  <Td>{props.license}</Td>
                </Tr>
              </Tbody>
            </Table>
          </div> );
}

export default Repo;
