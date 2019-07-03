import React, { Component } from 'react';

import logo from '../logo_resized.png'


class Header extends Component{
  
  render(){
    return (
       <div id= 'header' className = 'Banner' >
       <a href='https://evenfinancial.com'><img src={logo}  alt="Logo"/></a>
       </div>
    );
  }

}


export default Header;
