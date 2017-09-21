import { connect } from 'react-redux';
import DebugLog from '../Utils/DebugLog';
import JourneyDial from '../Components/JourneyDial/JourneyDial';
import { fetchScene, setDimmer, unsetDimmer } from '../Actions';

const mapStateToProps = (state) => {
  return {
    skipIntro: state.intro.skip,
    dial: state.navigation.dial,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickJourneyDialSelection: (source, destination) => {
      DebugLog('onClickJourneyDialSelection source', source);
      DebugLog('onClickJourneyDialSelection destination', destination);
      dispatch(fetchScene(destination));
    },
    setDimmer: (scene, set) => {
      if (set) {
        dispatch(setDimmer(scene));
      } else {
        dispatch(unsetDimmer(scene));
      }
    },

  }
}

const JourneyDialContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(JourneyDial)

export default JourneyDialContainer;
