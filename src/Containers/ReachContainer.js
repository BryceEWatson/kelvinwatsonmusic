import { connect } from 'react-redux';
import DebugLog from '../Utils/DebugLog';
import Reach from '../Components/Reach/Reach';
import { reachSendMessage } from '../Actions';

const mapStateToProps = (state) => {
  return {
    clearFormFields: state.reach.clearFormFields,
    isSending: state.reach.isSending,
    isSentSuccessfully: state.reach.isSuccess,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFormSubmit: (name, email, message) => {
      dispatch(reachSendMessage(name, email, message));
    }
  }
}

const ReachContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Reach)

export default ReachContainer;
