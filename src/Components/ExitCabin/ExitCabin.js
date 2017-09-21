import React from 'react';
import DebugLog from '../../Utils/DebugLog';
import JourneyDialContainer from '../../Containers/JourneyDialContainer';
import computeImagePositionFromMousePosition from '../../Utils/ComputeImagePosition';
import exitcabin from '../../Images/exitcabin-min.jpg';
import './ExitCabin.css'

const ExitCabin = ({isVisible, audio, cursorPositionX, cursorPositionY, isDimmed}) => {

  let coords = computeImagePositionFromMousePosition(cursorPositionX, cursorPositionY);
  let imgPositionStyle = {
    left: coords.x,
    top: coords.y
  };

  return (
    <section className={`ExitCabin__Section ${isVisible ? 'ExitCabin__Section--Show' : 'ExitCabin__Section--Hide'}`}>
        <img src={exitcabin} alt="Exit Cabin"
          className={`ExitCabin__MainImage2 ${isVisible ? 'ExitCabin__MainImage2--Animation' : ''}
          ${isDimmed ? 'ExitCabin__MainImage2--Dimmer' : ''}`}
          style={imgPositionStyle}/>

        <JourneyDialContainer/>
    </section>
  )
};

export default ExitCabin;
