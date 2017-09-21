import { connect } from 'react-redux';
import DebugLog from '../Utils/DebugLog';
import Overlay from '../Components/OverlayNavigation/OverlayNavigation';
import { closeNavigationOverlay, launchPage } from '../Actions';

const mapStateToProps = (state) => {

  // DebugLog('state',state);
  return {
    list: state.navigation.list,
    isOpenOverlay: state.navigation.isOpenOverlay,
    isFirstTimeOpen: state.navigation.isFirstTimeOpen,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //Detect outside clicks: https://stackoverflow.com/a/42234988
    onOutsideOverlayClicked: (isOpenOverlay) => {
      // DebugLog('onOutsideOverlayClicked', isOpenOverlay);
      if (isOpenOverlay){
        dispatch(closeNavigationOverlay());
      }
    },
    onClickNavigationListItem: (page) => {
      // DebugLog('onClickNavigationListItem page',page);
      dispatch(closeNavigationOverlay());
      // dispatch(launchPage(page));
    }
  }
}

const OverlayNavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Overlay)

export default OverlayNavigationContainer;
