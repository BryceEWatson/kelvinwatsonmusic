import { connect } from 'react-redux';
import DebugLog from '../Utils/DebugLog';
import AudioVisualizer from '../Components/AudioVisualizer/AudioVisualizer';
import { playAudio, pauseAudio } from '../Actions';

const mapStateToProps = (state) => {

  return {
    isAudioPlaying: state.audio.isPlaying,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAudioVisualizer: (isPlaying) => {
      //toggle play / pause
      DebugLog('onClickAudioVisualizer, isPlaying', isPlaying);
      if (isPlaying){
        dispatch(pauseAudio());
      }
      else {
        dispatch(playAudio());
      }
    }
  }
}

const AudioVisualizerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioVisualizer)

export default AudioVisualizerContainer;
