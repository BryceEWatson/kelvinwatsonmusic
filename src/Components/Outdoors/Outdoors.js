import React from 'react';
import DebugLog from '../../Utils/DebugLog';
import JourneyDialContainer from '../../Containers/JourneyDialContainer';
import computeImagePositionFromMousePosition from '../../Utils/ComputeImagePosition';
import outdoors from '../../Images/outdoors-min.jpg';
import './Outdoors.css'

const Outdoors = ({isVisible, audio, cursorPositionX, cursorPositionY, isDimmed}) => {

  let coords = computeImagePositionFromMousePosition(cursorPositionX, cursorPositionY);
  let imgPositionStyle = {
    left: coords.x,
    top: coords.y
  };

  return (
    <section className={`Outdoors__Section ${isVisible ? 'Outdoors__Section--Show' : 'Outdoors__Section--Hide'}`}>
        <img src={outdoors} alt="Outdoors"
          className={`Outdoors__MainImage2 ${isVisible ? 'Outdoors__MainImage2--Animation' : ''}
          ${isDimmed ? 'Outdoors__MainImage2--Dimmer' : ''}`}
          style={imgPositionStyle}/>

        <JourneyDialContainer/>
    </section>
  )
};

export default Outdoors;
