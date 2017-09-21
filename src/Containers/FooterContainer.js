import { connect } from 'react-redux';
import DebugLog from '../Utils/DebugLog';
import Footer from '../Components/Footer/Footer';

const mapStateToProps = (state) => {

  return {
    backgroundMusicUrl: state.music.backgroundMusicUrl,
    backgroundMusicTitle: state.music.backgroundMusicTitle,

    //social icons
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)

export default FooterContainer;
