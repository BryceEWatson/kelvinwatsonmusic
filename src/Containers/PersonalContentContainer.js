import { connect } from 'react-redux';
// import DebugLog from '../Utils/DebugLog';
import PersonalContent from '../Components/PersonalContent/PersonalContent';
import { closeNavigationOverlay  } from '../Actions';

const mapStateToProps = (state) => {

  // DebugLog('state',state);
  return {
    page: state.page.name,
    isLaunching: state.page.isLaunching,
    launchComplete: state.page.launchComplete,
    launchFailure: state.page.launchFailure,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const PersonalContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalContent)

export default PersonalContentContainer;
