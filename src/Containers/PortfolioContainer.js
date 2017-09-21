import { connect } from 'react-redux';
import DebugLog from '../Utils/DebugLog';
import Portfolio from '../Components/Portfolio/Portfolio';
import { scrollDown, scrollUp } from '../Actions';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const PortfolioContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio)

export default PortfolioContainer;
