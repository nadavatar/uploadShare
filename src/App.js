import React, { Component } from 'react';
import Header from './Components/Header';
import Uploader from './Components/Uploader';
import Email from './Components/Email';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { downloadUrl: '' };
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Uploader
          id='file'
          name='file'
          onChange={file => {
            console.log('File changed: ', file);

            if (file) {
              file.progress(info =>
                console.log('File progress: ', info.progress)
              );
              file.done(info => console.log('File uploaded: ', info));
            }
          }}
          onUploadComplete={info => this.setState({ downloadUrl: info.cdnUrl })}
        />
        {/* <Email downloadUrl={this.state.downloadUrl} /> */}
        {this.state.downloadUrl && (
          <Email downloadUrl={this.state.downloadUrl} />
        )}
      </div>
    );
  }
}

export default App;
