import React from 'react';
import DebugLog from '../../Utils/DebugLog';
import profileimage from '../../Images/profileimage.jpg';
import './ProfileBrief.css'

const ProfileBrief = ({ onOpenOverlay, isFirstTimeOpen }) => {

  const openForFirstTime = onOpenOverlay && isFirstTimeOpen;

  return (
    <section className="ProfileBriefSection">
      <img src={profileimage} alt="Profile Image for Kelvin Watson"
        className={`ProfileBrief__Image
        ${openForFirstTime ? 'ProfileBrief__Image--Animate':'ProfileBrief__Image--NoAnimate'}`}/>

      <section className="ProfileBriefBio">
        <div className={`ProfileBriefBio__Name
          ${openForFirstTime ? 'ProfileBriefBio__Name--Animate' : 'ProfileBriefBio__Name--NoAnimate'}`}>KELVIN WATSON</div>
        <div className="ProfileBriefBio__Credentials">
          <div className={`ProfileBriefBio__Credential
              ${openForFirstTime ? 'ProfileBriefBio__Credential--Animate ProfileBriefBio__Credential--AnimateSoftwareEngineer' : 'ProfileBriefBio__Credential--NoAnimate'}`}>Software Engineer</div>
          <div className={`ProfileBriefBio__Credential
            ${openForFirstTime ? 'ProfileBriefBio__Credential--Animate ProfileBriefBio__Credential--AnimateMusician' : 'ProfileBriefBio__Credential--NoAnimate'}`}>Classically Trained Musician</div>
        </div>
      </section>
    </section>
  )
};

export default ProfileBrief;
