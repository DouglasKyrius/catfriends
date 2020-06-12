import React, { Component } from 'react';

class Header extends Component {
  
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <h1 className='f1'>CatFriends</h1>
  }
}

export default Header;