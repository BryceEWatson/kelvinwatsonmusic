import { connect } from 'react-redux';
import DebugLog from '../Utils/DebugLog';
import SongsList from '../Components/SongsList/SongsList';

const mapStateToProps = (state) => {

  // DebugLog('state',state);
  return {
    status: state.songs.status,
    music: state.music.list
  }
}

const SongsListContainer = connect(
  mapStateToProps,
)(SongsList)

export default SongsListContainer;
