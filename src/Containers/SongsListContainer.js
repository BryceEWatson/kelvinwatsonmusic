import { connect } from 'react-redux';
import DebugLog from '../Utils/DebugLog';
import SongsList from '../Components/SongsList/SongsList';

const mapStateToProps = (state) => {

  DebugLog('state',state);
  return {
    status: state.getSongs.status,
    songs: state.getSongs.songs
  }
}

const SongsListContainer = connect(
  mapStateToProps,
)(SongsList)

export default SongsListContainer;
