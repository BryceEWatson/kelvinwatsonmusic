import { connect } from 'react-redux';
import DebugLog from '../Utils/DebugLog';
import Timeline from '../Components/Timeline/Timeline';
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

const TimelineContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline)

export default TimelineContainer;
