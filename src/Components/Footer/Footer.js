import React from 'react';
import DebugLog from '../../Utils/DebugLog';
import AudioPlayerContainer from '../../Containers/AudioPlayerContainer';
import AudioVisualizerContainer from '../../Containers/AudioVisualizerContainer';
import SocialIcons from '../SocialIcons/SocialIcons';
import {isMobile} from '../../Utils/Mobile';
import './Footer.css'

const Footer = ({ backgroundMusicTitle }) => {

  return (
    <footer className="FooterSection">
      { !isMobile() &&
        <div className="FooterLeft FooterAudio">
          <AudioVisualizerContainer/>
          <span className="FooterSectionNowPlaying">
            <span className="FooterSectionNowPlaying__TrackTitle">
              {backgroundMusicTitle} &nbsp;
            </span>
            <span className="FooterSectionNowPlaying__Credit">
              written & produced by K.Watson
            </span>
          </span>
          <AudioPlayerContainer/>
        </div>
      }

      <div className="FooterRight">
        <div className="FooterSocial">
          <SocialIcons/>
        </div>
        <div className="FooterEmail">
          info@kelvinwatson.com
        </div>
      </div>


    </footer>
  )
};

export default Footer;
