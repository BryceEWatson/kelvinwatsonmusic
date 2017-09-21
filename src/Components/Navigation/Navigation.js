import React from 'react';
// import DebugLog from '../../Utils/DebugLog';
import OverlayNavigationContainer from '../../Containers/OverlayNavigationContainer';
import { MorphReplace } from 'react-svg-morph';
import './Navigation.css'

const Navigation = ({ onNavigationMenuIconClicked, isOpenOverlay, page, onNavigationClicked, onCloseModal}) => {

  return (
    <nav className="NavigationSection">
      <header className="NavigationSection__Container">
        <div className="NavigationSection__Container--Left">
          <div className="NavigationSection__Logo NavigationSection__Logo__Table">
            <div className="NavigationSection__Logo__TableRow">
              <span className="NavigationSection__Name NavigationSection__Name__TableCell">KELVIN WATSON</span>
              <div className="NavigationSection__Skills NavigationSection__Name__TableCell">
                SOFTWARE ENGINEER
                <br/>
                MUSICIAN
              </div>
            </div>
          </div>

        </div>


        <section id="NavigationSectionMenuIconContainer" className="NavigationSectionMenu"
          onClick={(e) => onNavigationMenuIconClicked(isOpenOverlay)}>

          <MorphReplace data-morphreplace={`${isOpenOverlay? 'CloseSvgIcon' : 'MenuSvgIcon'}`} id="MorphReplaceMenuOrClose" width={24} height={24} className="NavigationSectionMenu__Svg">
            { isOpenOverlay ?

              <svg id="NavigationSectionMenuCloseSvg" key="isOpenOverlay1" className="NavigationSectionMenu__CloseSvg" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path data-txt="NavigationSectionMenuCloseSvgPath1" id="NavigationSectionMenuCloseSvgPath1" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                <path data-txt="NavigationSectionMenuCloseSvgPath2" id="NavigationSectionMenuCloseSvgPath2" d="M0 0h24v24H0z" fill="none"/>
              </svg>
              :
              <svg id="NavigationSectionMenuMenuSvg" key="isOpenOverlay2" className="NavigationSectionMenu__Svg NavigationSectionMenu__MenuSvg" fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path data-txt="NavigationSectionMenuMenuSvgPath1" id="NavigationSectionMenuMenuSvgPath1" className="path1" d="M0 0h24v24H0z" fill="none"/>
                <path data-txt="NavigationSectionMenuMenuSvgPath2" id="NavigationSectionMenuMenuSvgPath2" className="path2" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
           }
          </MorphReplace>
        </section>
      </header>

    <OverlayNavigationContainer/>
  </nav>
)}

export default Navigation;
