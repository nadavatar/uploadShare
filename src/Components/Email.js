import React, { Component } from 'react';
import Axios from 'axios';
import styled from 'styled-components';

const Styling = styled.div`
  #email-input {
    margin: 0 auto;
    margin-top: 30px;
  }
`;

class Email extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailAddress: ''
    };
  }

  handleChange = e => {
    this.setState({ emailAddress: e.target.value });
  };

  handleClick = async e => {
    e.preventDefault();

    const emailAddress = this.state.emailAddress;
    const downloadUrl = this.props.downloadUrl;

    const jsonToUpload = {
      emailAddress: emailAddress,
      downloadUrl: downloadUrl
    };
    try {
      const response = await Axios.post(
        'http://localhost:4001/api/sendEmail/',
        jsonToUpload
      );
      if (response.status.toString().startsWith('2')) {
        alert(
          'Your file was sent successfully!\nit might take a couple of minutes for it to arrive...'
        );
      } else {
        alert('Something went wrong!');
        console.error(`Got status ${response.status} from the server...`);
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong!');
    }
  };

  render() {
    return (
      <div>
        <Styling>
          <h4 id='mini-header' className='mt-5'>
            Enter Your Email Address:
          </h4>
          <form>
            <div className='form-group'>
              <input
                type='email'
                placeholder='Enter your email address...'
                onChange={this.handleChange}
                className='form-control w-50 text-left border'
                id='email-input'
              />
              <input
                className='btn btn-success mt-4 rounded'
                type='submit'
                onClick={this.handleClick}
                id='button'
              />
            </div>
          </form>
        </Styling>
      </div>
    );
  }
}

export default Email;
