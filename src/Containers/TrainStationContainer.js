import { connect } from 'react-redux';
import DebugLog from '../Utils/DebugLog';
import TrainStation from '../Components/TrainStation/TrainStation';
import {loadScene } from '../Actions';

const mapStateToProps = (state, ownProps) => {
  //ReactCursorPosition: https://github.com/ethanselzer/react-cursor-position#props-api
  //ReactCursorPosition: https://ethanselzer.github.io/react-cursor-position/#/

  return {
    // audio: state.audio.trainStation
    skip: state.intro.skip,
    cursorPositionX: ownProps.position.x,
    cursorPositionY: ownProps.position.y,
    isVisible: state.scene.name == 'TRAIN_STATION',
    isDimmed: state.dimmer.isSet,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (scene) => {
      dispatch(loadScene(scene));
    }
  }
}

const TrainStationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainStation)

export default TrainStationContainer;
