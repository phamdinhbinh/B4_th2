import React, { Component } from 'react';
import './App.css';
import Box from './Box';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplay: true
    };
  }

  onRemoveBox = () => {
    this.setState({ isDisplay: false });
  };

  render() {
    return (
      <div className='container'>
        {this.state.isDisplay && <Box />}
        <div onClick={this.onRemoveBox}>Xoá component Box</div>
      </div>
    );
  }
}

export default App;