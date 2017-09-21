import { connect } from 'react-redux';
import DebugLog from '../Utils/DebugLog';
import Me from '../Components/Me/Me';
import { scrollDown, scrollUp } from '../Actions';

const mapStateToProps = (state) => {
  return {
    scrollDirection: state.scroll.scrollDirection,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickScrollChevron: () => {
      // DebugLog('onClickScrollChevron');
      dispatch(scrollDown());
    },
    onFinishScrollDown: () => {
      // DebugLog('onFinishScrollDown');
      dispatch(scrollUp());
    }
  }
}

const MeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Me)

export default MeContainer;
