import React from 'react';
import ProfileElement from '../ProfileElement/ProfileElement';
import Chevron from '../Chevron/Chevron';
import DebugLog from '../../Utils/DebugLog';
import './Blog.css'

export default class Blog extends React.Component {
  constructor(props){
    super(props);
  }


  // Should render a NonJourneyNavigationItem with certain props
  render(){
    return (
        <div className={`BlogContent`}>
          <iframe className="BlogIFrame" src="https://theaspiringninja.wordpress.com"/>
        </div>
    )
  }
}
