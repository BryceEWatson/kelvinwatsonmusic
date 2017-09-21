import React from 'react';
import DebugLog from '../../Utils/DebugLog';
import visualizer from '../../Images/visualizer.gif';
import './AudioVisualizer.css'

export default class AudioVisualizer extends React.Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    DebugLog('clicked visualizer', this.props.isAudioPlaying);

    this.props.onClickAudioVisualizer(this.props.isAudioPlaying);
  }

  render(){
    return (
      <img src={visualizer} className="AudioVisualizer" onClick={this.onClick}/>
    )
  }

}
