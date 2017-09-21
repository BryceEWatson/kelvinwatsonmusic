import React from 'react';
import DebugLog from '../../Utils/DebugLog';
import './AudioPlayer.css'

export default class AudioPlayer extends React.Component{

  constructor(props){
    super(props);


  }

  componentDidMount(){
    if (this.props.playAudio){
      DebugLog('componentDidMount PLAY AUDIO');
      this.audioPlayer.play();
    } else if (this.props.pauseAudio) {
      DebugLog('componentDidMount PAUSE AUDIO');
      this.audioPlayer.pause();
    }
  }

  componentWillReceiveProps(newProps){
    if (newProps.playAudio){
      DebugLog('componentWillReceiveProps PLAY AUDIO');
      this.audioPlayer.play();
      // this.props.onPlay();
    } else if (newProps.pauseAudio){
      DebugLog('componentWillReceiveProps PAUSE AUDIO');
      this.audioPlayer.pause();
      // this.props.onPause();
    }
  }

  render(){
    return (
      <section className="AudioPlayerSection">

        <audio ref={(node)=>this.audioPlayer=node} src={this.props.backgroundMusicUrl} onPlay={this.props.onPlay} onPause={this.props.onPause}></audio>
      </section>
    );
  }
}
