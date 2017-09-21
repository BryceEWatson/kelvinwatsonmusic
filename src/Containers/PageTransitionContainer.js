import { connect } from 'react-redux';
import DebugLog from '../Utils/DebugLog';
import PageTransition from '../Components/PageTransition/PageTransition';
import {  } from '../Actions';

const mapStateToProps = (state) => {

  // DebugLog('state',state);
  return {
    page: state.navigation.page
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const PageTransitionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageTransition)

export default PageTransitionContainer;
