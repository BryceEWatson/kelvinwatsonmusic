import React from 'react';
import DebugLog from '../../Utils/DebugLog';
import JourneyDialContainer from '../../Containers/JourneyDialContainer';
import computeImagePositionFromMousePosition from '../../Utils/ComputeImagePosition';
import explorestation from '../../Images/explorestation-min.jpg';
import './ExploreStation.css'

const ExploreStation = ({isVisible, audio, cursorPositionX, cursorPositionY, isDimmed}) => {

  let coords = computeImagePositionFromMousePosition(cursorPositionX, cursorPositionY);
  let imgPositionStyle = {
    left: coords.x,
    top: coords.y
  };

  return (
    <section className={`ExploreStation__Section ${isVisible ? 'ExploreStation__Section--Show' : 'ExploreStation__Section--Hide'}`}>
        <img src={explorestation} alt="ExploreStation"
          className={`ExploreStation__MainImage2 ${isVisible ? 'ExploreStation__MainImage2--Animation' : ''}
          ${isDimmed ? 'ExploreStation__MainImage2--Dimmer' : ''}
          `}
          style={imgPositionStyle}/>

        <JourneyDialContainer/>
    </section>
  )
};

export default ExploreStation;
