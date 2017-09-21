import React from 'react';
import DebugLog from '../../Utils/DebugLog';
import './OverlayNavigation.css';
import ProfileBrief from '../ProfileBrief/ProfileBrief';
import { Link } from 'react-router-dom';
/*
 * To use refs, component has to be stateful (using the const notation means it's a functional component only)
 */
export default class OverlayNavigation extends React.Component {

  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /*
   * Set the wrapper ref for outside click detection
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  /*
   * Alert if clicked on outside of element
   */
  handleClickOutside(e) {

    // DebugLog('e',e);
    if(!this.props.isOpenOverlay
      || (e.target.viewportElement && e.target.viewportElement.dataset && e.target.viewportElement.dataset.morphreplace)){
      // DebugLog('Let NavigationContainer#onNavigationMenuIconClicked handle it');
      return;
    }

    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      // DebugLog('CLOSING');
      this.props.onOutsideOverlayClicked(true);
    }
  }

  render() {
    return (
      <section ref={this.setWrapperRef}
        className={`OverlaySection Overlay ${this.props.isOpenOverlay ? 'Overlay--Active' : ''}`}>

        <ProfileBrief isFirstTimeOpen={this.props.isFirstTimeOpen} onOpenOverlay={this.props.isOpenOverlay}/>

        <Link className="NavigationListItem--Link"
          to="/me"
          onClick={(e)=>this.props.onClickNavigationListItem('ME')}>
          <div className="NavigationListItem--ListItem">
            ME
          </div>
        </Link>

        <Link className="NavigationListItem--Link"
          to="/portfolio"
          onClick={(e)=>this.props.onClickNavigationListItem('PORTFOLIO')}>
          <div className="NavigationListItem--ListItem">
            PORTFLOLIO
          </div>
        </Link>

        <Link className="NavigationListItem--Link"
          to="/blog"
          onClick={(e)=>this.props.onClickNavigationListItem('BLOG')}>
          <div className="NavigationListItem--ListItem">
            BLOG
          </div>
        </Link>

        <div className="NavigationListItem--ListItem">
          <a href="https://soundcloud.com/kelvinwatson" target="_blank" className="NavigationListItem--Link">
            MUSIC
          </a>
        </div>

        <Link className="NavigationListItem--Link"
          to="/reach"
          onClick={(e)=>this.props.onClickNavigationListItem('REACH')}>
          <div className="NavigationListItem--ListItem">
            REACH
          </div>
        </Link>

        <Link className="NavigationListItem--Link"
          to="/play"
          onClick={(e)=>this.props.onClickNavigationListItem('JOURNEY')}>
          <div className="NavigationListItem--ListItem">
            PLAY
          </div>
        </Link>
      </section>
    )
  }
}
