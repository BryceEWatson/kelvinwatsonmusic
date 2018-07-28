import React from 'react';
import DebugLog from '../../Utils/DebugLog';
// import facebook from '../../Images/Icons/facebook.png';
import github from '../../Images/Icons/github.png';
import instagram from '../../Images/Icons/instagram.png';
import linkedin from '../../Images/Icons/linkedin.png';
import soundcloud from '../../Images/Icons/soundcloud.png';
import twitter from '../../Images/Icons/twitter.png';
import youtube from '../../Images/Icons/youtube.png';
import CircleWithLine from '../CircleWithLine/CircleWithLine';
import './SocialIcons.css'

export default class SocialIcons extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      isCircleWithLineActive: false,
    }

    this.setCircleWithLineActive = this.setCircleWithLineActive.bind(this);
    this.setCircleWithLineInactive = this.setCircleWithLineInactive.bind(this);
  }

  setCircleWithLineActive(){
    this.setState({
      isCircleWithLineActive: true,
    });
  }

  setCircleWithLineInactive(){
    this.setState({
      isCircleWithLineActive: false,
    });
  }


  render(){
    return (
      <div className="SocialIconsSection">
        {/*<img src={facebook} alt="Facebook icon for Kelvin Watson" className="SocialIcon SocialIcon--VerticalFlip"/>*/}

        <div className="SocialIconsContainer"
        onMouseEnter={this.setCircleWithLineActive}
        onMouseLeave={this.setCircleWithLineInactive}>
          <div className="SocialIcons">
            <a href="https://github.com/kelvinwatson" target="_blank">
              <img src={github} alt="Github icon for Kelvin Watson" className="SocialIcon SocialIcon--HorizontalFlip"/>
            </a>

            <a href="https://linkedin.com/in/kelvinwatson" target="_blank">
              <img src={linkedin} alt="LinkedIn icon for Kelvin Watson" className="SocialIcon SocialIcon--VerticalFlip"/>
            </a>

            <a href="https://soundcloud.com/kelvinwatson" target="_blank">
              <img src={soundcloud} alt="SoundCloud icon for Kelvin Watson" className="SocialIcon SocialIcon--HorizontalFlip"/>
            </a>

            <a href="" target="_blank">
              <img src={twitter} alt="Twitter icon for Kelvin Watson" className="SocialIcon SocialIcon--VerticalFlip"/>
            </a>

            <a href="" target="_blank">
              <img src={youtube} alt="YouTube icon for Kelvin Watson" className="SocialIcon SocialIcon--HorizontalFlip"/>
            </a>
          </div>


          <div className="SocialIcons__CircleWithLine">
            <CircleWithLine
              cta="SOCIAL_ICONS"
              isActive={this.state.isCircleWithLineActive}/>
          </div>

          <div className="SocialIcons__Follow">
            FOLLOW
          </div>

        </div>

      </div>
    )
  }
}
