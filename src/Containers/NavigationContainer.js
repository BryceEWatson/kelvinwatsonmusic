import { connect } from 'react-redux';
import DebugLog from '../Utils/DebugLog';
import Navigation from '../Components/Navigation/Navigation';
import { openNavigationOverlay, closeNavigationOverlay } from '../Actions';

const mapStateToProps = (state) => {

  // DebugLog('state',state);
  return {
    page: state.navigation.page,
    isOpenOverlay: state.navigation.isOpenOverlay
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNavigationMenuIconClicked: (isOpenOverlay) => {
      // DebugLog('clicked nav menu icon', isOpenOverlay);
      if (isOpenOverlay){
        dispatch(closeNavigationOverlay());
      } else {
        dispatch(openNavigationOverlay());
      }
    },
  }
}

const NavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)

export default NavigationContainer;
