import { connect } from 'react-redux';
import DebugLog from '../Utils/DebugLog';
import AnimatedBackground from '../Components/AnimatedBackground/AnimatedBackground';

const mapStateToProps = (state) => {

  // DebugLog('AnimatedBackground state',state);
  return {
    theme: state.theme.color,
    isDimmed: state.dimmed.isDimmed,
    page: state.navigation.page
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onFormSubmit: (gaymerName, streamPlatform) => {
//       dispatch(fetchTwitchIdFromName(gaymerName, streamPlatform));
//     }
//   }
// }

const AnimatedBackgroundContainer = connect(
  mapStateToProps,
  // mapDispatchToProps
)(AnimatedBackground)

export default AnimatedBackgroundContainer;
