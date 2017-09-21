import React, { Component } from 'react';
import './App.css';

/**
 * Views
 */
import SongsListContainer from './Containers/SongsListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">

        <SongsListContainer/>
      </div>
    );
  }
}

export default App;
