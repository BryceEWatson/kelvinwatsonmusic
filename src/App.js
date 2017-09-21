import React, { Component } from 'react';
import ReactCursorPosition from 'react-cursor-position';

/**
 * Views
 */
import CabinContainer from './Containers/CabinContainer';
import ExploreStationContainer from './Containers/ExploreStationContainer';
import ExitCabinContainer from './Containers/ExitCabinContainer';
import HallwayContainer from './Containers/HallwayContainer';
import OutdoorsContainer from './Containers/OutdoorsContainer';
import PersonalContentContainer from './Containers/PersonalContentContainer';
import TrainStationContainer from './Containers/TrainStationContainer';

/*
 * Styles
 */
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <ReactCursorPosition>
          <TrainStationContainer/>
          <CabinContainer/>
          <OutdoorsContainer/>
          <HallwayContainer/>
          <ExploreStationContainer/>
          <ExitCabinContainer/>
        </ReactCursorPosition>
      </div>
    );
  }
}

export default App;
