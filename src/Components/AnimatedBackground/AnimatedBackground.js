import React from 'react';
// import default_background from '../../Images/default_background.jpg';
// import forest from '../../Images/forest.jpeg';
import video from '../../Videos/video_background_white_low.mp4';
import './AnimatedBackground.css'

const AnimatedBackground = ({theme, isDimmed, page}) => {
  let renderVideo;
  if (theme === 'white'){
    renderVideo = <div>
      <div className="AnimatedBackgroundSection-VideoContainer">
        <div className={`AnimatedBackgroundSection-VideoContainer--Overlay ${isDimmed ? 'AnimatedBackgroundSection-VideoContainer__Overlay--Darken':''}`}></div>

        <video id="BackgroundVideo" className="AnimatedBackgroundSection-Video"
          playsInline autoPlay muted loop>
          {/*}<source src="polina.webm" type="video/webm">*/}
          <source src={video} type="video/mp4"/>
        </video>
      </div>
      <div className="AnimatedBackgroundSection-FallbackImage-White" alt="background"></div>
    </div>
  }
  return (
    <section className="AnimatedBackgroundSection">
        { renderVideo }
    </section>
  )
};

export default AnimatedBackground;
