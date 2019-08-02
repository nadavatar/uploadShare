import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloudUploadAlt,
  faAt,
  faEnvelopeOpen
} from '@fortawesome/free-solid-svg-icons';

const HeaderStyle = styled.div`
  #header {
    margin-bottom: 150px;
    margin-top: 75px;
    font-size: 400%;
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HeaderStyle>
        <h1 id='header'>
          <FontAwesomeIcon icon={faCloudUploadAlt} />
          UploadShare
          <FontAwesomeIcon icon={faEnvelopeOpen} />
        </h1>
      </HeaderStyle>
    );
  }
}

export default Header;
