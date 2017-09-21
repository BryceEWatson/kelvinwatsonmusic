import React from 'react';
import DebugLog from '../../Utils/DebugLog';
// import IntroductionAnimationContainer from '../../Containers/IntroductionAnimationContainer';
import JourneyDialContainer from '../../Containers/JourneyDialContainer';
import computeImagePositionFromMousePosition from '../../Utils/ComputeImagePosition';
import cabin from '../../Images/cabin-min.png';
import './Cabin.css'

const Cabin = ({isVisible, audio, cursorPositionX, cursorPositionY, isDialHovered, isDimmed }) => {

  // DebugLog('TrainStation cursorPositionX', cursorPositionX);

  let coords = computeImagePositionFromMousePosition(cursorPositionX, cursorPositionY);
  let imgPositionStyle = {
    left: coords.x,
    top: coords.y
  };

  return (
    <section className={`Cabin__Section ${isVisible ? 'Cabin__Section--Show' : 'Cabin__Section--Hide'}`}>

      {/*}<img src={cabin} alt="Cabin"
        className="Cabin__MainImage Cabin__MainImage--Animation"
        style={imgPositionStyle}/>*/}

        <img src={cabin} alt="Animated Cabin"
          className={`Cabin__MainImage ${isVisible ? 'Cabin__MainImage--Animation' : ''}`}/>

        <img src={cabin} alt="Cabin"
          className={`Cabin__MainImage2 ${isVisible ? 'Cabin__MainImage2--Animation' : ''}
          ${isDimmed ? 'Cabin__MainImage2--Dimmer' : ''}
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

    </section>
  )
};

export default Cabin;
