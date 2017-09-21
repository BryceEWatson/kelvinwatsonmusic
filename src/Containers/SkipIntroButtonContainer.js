import { connect } from 'react-redux';
import DebugLog from '../Utils/DebugLog';
import SkipIntroButton from '../Components/SkipIntroButton/SkipIntroButton';
import { skipIntro } from '../Actions';

const mapStateToProps = (state) => {

  // DebugLog('state',state);
  return {
    // page: state.navigation.page
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickSkipIntroButton: () => {
      dispatch(skipIntro());
    }
  }
}

const SkipIntroButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SkipIntroButton)

export default SkipIntroButtonContainer;
