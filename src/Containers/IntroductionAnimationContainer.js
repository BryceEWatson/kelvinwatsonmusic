import { connect } from 'react-redux';
import DebugLog from '../Utils/DebugLog';
import IntroductionAnimation from '../Components/IntroductionAnimation/IntroductionAnimation';

const mapStateToProps = (state) => {

  // DebugLog('IntroductionAnimation state',state);
  return {
    skip: state.intro.skip
  }
}


const IntroductionAnimationContainer = connect(
  mapStateToProps,
  // mapDispatchToProps
)(IntroductionAnimation)

export default IntroductionAnimationContainer;
