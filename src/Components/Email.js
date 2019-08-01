import React, { Component } from 'react';
import Axios from 'axios';

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

    const response = await Axios.post(
      'http://localhost:4001/api/sendEmail/',
      jsonToUpload
    );
    if (response.status.toString().startsWith('2')) {
      alert(
        'Your file was succesfully sent to your email address!\nit might take a few moments...'
      );
    } else {
      alert('Something went wrong');
      console.error(`Got ${response.status} status from the server`);
    }
  };

  render() {
    return (
      <div>
        <h4>Enter Your Email Address:</h4>
        <form>
          <input
            type='email'
            placeholder='Enter your email address...'
            onChange={this.handleChange}
          />
          <input type='submit' onClick={this.handleClick} />
        </form>
      </div>
    );
  }
}

export default Email;
