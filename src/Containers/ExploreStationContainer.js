import { connect } from 'react-redux';
// import DebugLog from '../Utils/DebugLog';
import ExploreStation from '../Components/ExploreStation/ExploreStation';
import {loadScene} from '../Actions';

const mapStateToProps = (state, ownProps) => {

  //ReactCursorPosition: https://github.com/ethanselzer/react-cursor-position#props-api
  //ReactCursorPosition: https://ethanselzer.github.io/react-cursor-position/#/

  return {
    // audio: state.audio.trainStation
    cursorPositionX: ownProps.position.x,
    cursorPositionY: ownProps.position.y,
    isVisible: state.scene.name === 'EXPLORE_STATION',
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

const ExploreStationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExploreStation)

export default ExploreStationContainer;
