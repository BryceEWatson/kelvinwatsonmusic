import React from 'react';
import DebugLog from '../../Utils/DebugLog';
import AnimatedBackgroundContainer from '../../Containers/AnimatedBackgroundContainer';
import IntroductionAnimationContainer from '../../Containers/IntroductionAnimationContainer';
import MeContainer from '../../Containers/MeContainer';
import './PageTransition.css'

const PageTransition = ({page}) => {

  // DebugLog('page',page);

  let pageTransitionBody = (
    <div>
      <div className={'PageTransition__page PageTransition__page--first' + ((page === 'me' ? ' PageTransition__page--active' : ''))}>
        <MeContainer/>
      </div>
      <div className={'PageTransition__page PageTransition__page--second' + ((!page || page === 'home' ? ' PageTransition__page--active' : ''))}>
        <AnimatedBackgroundContainer/>
        <IntroductionAnimationContainer/>
      </div>
      <div className={'PageTransition__page PageTransition__page--third' + ((page === 'music' ? ' PageTransition__page--active' : ''))}>
        <AnimatedBackgroundContainer/>
        <IntroductionAnimationContainer/>
      </div>
    </div>
  );

  return pageTransitionBody;
};

export default PageTransition;
