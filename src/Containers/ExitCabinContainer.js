import { connect } from 'react-redux';
// import DebugLog from '../Utils/DebugLog';
import ExitCabin from '../Components/ExitCabin/ExitCabin';
import {loadScene} from '../Actions';

const mapStateToProps = (state, ownProps) => {

  //ReactCursorPosition: https://github.com/ethanselzer/react-cursor-position#props-api
  //ReactCursorPosition: https://ethanselzer.github.io/react-cursor-position/#/

  return {
    // audio: state.audio.trainStation
    cursorPositionX: ownProps.position.x,
    cursorPositionY: ownProps.position.y,
    isVisible: state.scene.name === 'EXIT_CABIN',
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

const ExitCabinContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExitCabin)

export default ExitCabinContainer;
