import React from 'react';
import AnimatedBorderButton from '../AnimatedBorderButton/AnimatedBorderButton';
import './SkipIntroButton.css'

const SkipIntroButton = ({ onClickSkipIntroButton }) => {

  return (
    <section className="SkipIntroButtonSection" >
      <AnimatedBorderButton text="Skip Intro" onClick={onClickSkipIntroButton}/>
      {/*}<button onClick={onClickSkipIntroButton}>Skip Intro</button>*/}
    </section>
  )
};

export default SkipIntroButton;
