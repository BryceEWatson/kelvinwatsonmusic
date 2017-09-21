import { connect } from 'react-redux';
import DebugLog from '../Utils/DebugLog';
import AudioPlayer from '../Components/AudioPlayer/AudioPlayer';
import { setAudioPlaying } from '../Actions';

const mapStateToProps = (state) => {

  //TODO: ADD PLAYLIST AS PROP
  // DebugLog('AnimatedBackground state',state);
  return {
    backgroundMusicUrl: state.music.backgroundMusicUrl,
    backgroundMusicTitle: state.music.backgroundMusicTitle,

    pauseAudio: state.audio.pauseAudio,
    playAudio: state.audio.playAudio,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPlay: () => {
      DebugLog('setAudioPlaying!!!');
      dispatch(setAudioPlaying(true));
    },
    onPause: ()=>{
      dispatch(setAudioPlaying(false));
    }
  }
}

const AudioPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer)

export default AudioPlayerContainer;
