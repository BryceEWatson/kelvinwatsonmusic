import React from 'react';
import ProfileElement from '../ProfileElement/ProfileElement';
import Chevron from '../Chevron/Chevron';
import DebugLog from '../../Utils/DebugLog';
import './Me.css'

export default class Me extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isMounted: false,
      isCircleWithLineActive: false,
      theme: 'dark',
    }
    this.onClickChevron = this.onClickChevron.bind(this);
    this.onMouseOverChevron = this.onMouseOverChevron.bind(this);
    this.onMouseLeaveChevron = this.onMouseLeaveChevron.bind(this);
    this.onFinishScrollDown = this.onFinishScrollDown.bind(this);
  }

  componentWillMount(){
    this.setState({
      isMounted: true,
    });
  }

  componentWillUnmount(){
    this.setState({
      isMounted: false,
    });
  }

  onMouseOverChevron(option){
    // DebugLog('onMouseOverChevron', option);
    this.setState({
      isCircleWithLineActive: true,
    });
  }

  onMouseLeaveChevron(option){
    // DebugLog('onMouseLeaveChevron', option);
    this.setState({
      isCircleWithLineActive: false,
    });
  }

  onClickChevron(e){
    // DebugLog('onClickChevron', e);
    this.props.onClickScrollChevron();
  }

  onFinishScrollDown(e){
    this.props.onFinishScrollDown();
  }

  // Should render a NonJourneyNavigationItem with certain props
  render(){
    return (
      <ProfileElement
        scrollDirection={this.props.scrollDirection}
        onScroll={this.handleScroll}
        onFinishScrollDown={this.onFinishScrollDown}>
        <div className={`MeContent`}>

          <header className={`MeContentHeader MeContentFlexContainer`}>
            <div className="MeContentFlexContainer__Left"></div>
            <div className="MeContentFlexContainer__Middle"></div>
            <div className="MeContentFlexContainer__Right">
              <div className={`MeContentHeader__Title
                ${this.state.isMounted? 'MeContent--Show': 'MeContent--Hide'}`}>
                Kelvin Watson</div>
            </div>
          </header>

          <main className="MeContentFlexContainer">
            <div className={`MeContentFlexContainer__Left MeContentScroll
              ${this.state.isMounted? 'MeContentScroll--Show': 'MeContentScroll--Hide'}`}>
              <div className="MeContentScroll__ChevronContainer"
                onMouseOver={(e)=>this.onMouseOverChevron('bottom')}
                onMouseLeave={(e)=>this.onMouseLeaveChevron('bottom')}
                onClick={this.onClickChevron}>
                <Chevron
                  cta={'ME_SCROLL_DOWN'}
                  isCircleWithLineActive={this.state.isCircleWithLineActive}
                  skipIntro={true}
                  degree={360}
                  label={'Scroll'}/>
              </div>
            </div>

            <aside className={`MeContentFlexContainer__Middle
              ${this.state.isMounted? 'MeContentFlexContainer__Middle--Show': 'MeContentFlexContainer__Middle--Hide'}`}>

              <div className="MeContentInterests__Heading">SOFTWARE DEVELOPMENT</div>
              <ul className="MeContentInterests__Heading__List">
                <li className="MeContentInterests__Item">Android development</li>
                <li className="MeContentInterests__Item">Web development (React, Redux)</li>
              </ul>

              <div className="MeContentInterests__Heading">COMPUTER SCIENCE</div>
              <ul className="MeContentInterests__Heading__List">
                <li className="MeContentInterests__Item">Artificial Intelligence</li>
                <li className="MeContentInterests__Item">Deep Learning</li>
              </ul>

              <div className="MeContentInterests__Heading">OTHER</div>
              <ul className="MeContentInterests__Heading__List">
                <li className="MeContentInterests__Item">Writing music</li>
              </ul>
            </aside>

            <section className={`MeContentFlexContainer__Right`}>

            <blockquote className={`MeContentHeader__Quote
              ${this.state.isMounted? 'MeContentHeader__Quote--Show': 'MeContentHeader__Quote--Hide'}
              `}>"Take time to remember..."</blockquote>

              <div className={`MeContentBiography
                ${this.state.isMounted ? 'MeContentBiography--Show': 'MeContentBiography--Hide'}`}>
                <p>
                  I made this website as a reminder to document &mdash;
                  create artifacts large or small &mdash; to ensure that I do not forget the important pieces of my life.
                </p>
              </div>
            </section>


          </main>
        </div>
      </ProfileElement>
    )
  }
}
