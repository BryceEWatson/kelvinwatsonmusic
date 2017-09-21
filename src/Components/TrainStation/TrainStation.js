import React from 'react';
import DebugLog from '../../Utils/DebugLog';
import IntroductionAnimationContainer from '../../Containers/IntroductionAnimationContainer';
import JourneyDialContainer from '../../Containers/JourneyDialContainer';
import computeImagePositionFromMousePosition from '../../Utils/ComputeImagePosition';
import station from '../../Images/station-min.jpg';
import './TrainStation.css'

const TrainStation = ({isVisible, skip, audio, cursorPositionX, cursorPositionY, isDimmed}) => {

  // DebugLog('TrainStation cursorPositionX', cursorPositionX);
  // DebugLog('TrainStation cursorPositionY', cursorPositionY);

  let coords = computeImagePositionFromMousePosition(cursorPositionX, cursorPositionY);
  let imgPositionStyle = {
    left: coords.x,
    top: coords.y
  };

  return (
    <section className={`TrainStation__Section ${isVisible ? 'TrainStation__Sectio--Shown' : 'TrainStation__Section--Hide'}`}>
      <img src={station} alt="Animated Train Station"
        className={`TrainStation__MainImage ${skip ? 'TrainStation__MainImage--SkipAnimation' : 'TrainStation__MainImage--Animation'}`}/>

      <img src={station} alt="Train Station"
        className={`TrainStation__MainImage2 ${skip ? 'TrainStation__MainImage2--SkipAnimation' : 'TrainStation__MainImage2--Animation'}
        ${isDimmed ? 'TrainStation__MainImage2--Dimmer': ''}
        `}
        style={imgPositionStyle}/>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="TrainStation__GlitchSvg">
        <defs>
          <filter id="glitch" x="0" y="0">
              <feColorMatrix in="SourceGraphic" mode="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="r" />

            <feOffset in="r" result="r" dx="-5">
              <animate attributeName="dx" attributeType="XML" values="0; -5; 0; -18; -2; -4; 0 ;-3; 0" dur="0.2s" repeatCount="30"/>
            </feOffset>
            <feColorMatrix in="SourceGraphic" mode="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="g"/>
            <feOffset in="g" result="g" dx="-5" dy="1">
              <animate attributeName="dx" attributeType="XML" values="0; 0; 0; -3; 0; 8; 0 ;-1; 0" dur="0.15s" repeatCount="30"/>
            </feOffset>
            <feColorMatrix in="SourceGraphic" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="b"/>
            <feOffset in="b" result="b" dx="5" dy="2">
              <animate attributeName="dx" attributeType="XML" values="0; 3; -1; 4; 0; 2; 0 ;18; 0" dur="0.35s" repeatCount="30"/>
            </feOffset>
            <feBlend in="r" in2="g" mode="screen" result="blend" />
            <feBlend in="blend" in2="b" mode="screen" result="blend" />
          </filter>
        </defs>
      </svg>

      <JourneyDialContainer/>

      <IntroductionAnimationContainer/>

    </section>
  )
};

export default TrainStation;
