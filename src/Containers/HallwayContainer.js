import { connect } from 'react-redux';
import DebugLog from '../Utils/DebugLog';
import Hallway from '../Components/Hallway/Hallway';
import {loadScene} from '../Actions';

const mapStateToProps = (state, ownProps) => {

  //ReactCursorPosition: https://github.com/ethanselzer/react-cursor-position#props-api
  //ReactCursorPosition: https://ethanselzer.github.io/react-cursor-position/#/

  return {
    cursorPositionX: ownProps.position.x,
    cursorPositionY: ownProps.position.y,
    isVisible: state.scene.name === 'EXPLORE_CABIN',
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

const HallwayContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Hallway)

export default HallwayContainer;
