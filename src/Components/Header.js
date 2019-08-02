import React, { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 id='header'>UploadShare</h1>
      </div>
    );
  }
}

export default Header;
