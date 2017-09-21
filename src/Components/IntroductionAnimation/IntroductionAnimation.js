import React from 'react';
import SkipIntroButtonContainer from '../../Containers/SkipIntroButtonContainer';
import DebugLog from '../../Utils/DebugLog';
import './IntroductionAnimation.css'

const IntroductionAnimation = ({skip}) => {

  // DebugLog('skip', skip);
  let introAnim =
    <div>
      <section className="IntroductionAnimationSection">
        <div className="IntroductionAnimation-Text-Wrapper animation">
          <p>Life is a journey...<br/>Where will my music take you?</p>
        </div>
      </section>
      <SkipIntroButtonContainer/>
    </div>;
  if (skip){
    introAnim = <section className="IntroductionAnimationSection--Skip"></section>
  }

  return (
    <section className="IntroductionSection">
      {introAnim}
    </section>
  )
};

export default IntroductionAnimation;
