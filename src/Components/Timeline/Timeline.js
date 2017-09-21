import React from 'react';
import ProfileElement from '../ProfileElement/ProfileElement';
import Chevron from '../Chevron/Chevron';
import DebugLog from '../../Utils/DebugLog';
import './Timeline.css'

export default class Timeline extends React.Component {
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
        <div className={`TimelineContent`}>

          <header className={`TimelineContentHeader TimelineContentFlexContainer`}>
            <div className="TimelineContentFlexContainer__Left"></div>
            <div className="TimelineContentFlexContainer__Middle"></div>
            <div className="TimelineContentFlexContainer__Right">
              <div className={`TimelineContentHeader__Title
                ${this.state.isMounted? 'TimelineContent--Show': 'TimelineContent--Hide'}`}>
                Kelvin Watson</div>
            </div>
          </header>

          <main className="TimelineContentFlexContainer">
            <div className={`TimelineContentFlexContainer__Left TimelineContentScroll
              ${this.state.isMounted? 'TimelineContentScroll--Show': 'TimelineContentScroll--Hide'}`}>
              <div className="TimelineContentScroll__ChevronContainer"
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

            <aside className={`TimelineContentFlexContainer__Middle
              ${this.state.isMounted? 'TimelineContentFlexContainer__Middle--Show': 'TimelineContentFlexContainer__Middle--Hide'}`}>

              <div className="TimelineContentInterests__Heading">ACTIVE PROJECTS</div>
              <ul className="TimelineContentInterests__Heading__List">
                <li className="TimelineContentInterests__Item">_Vitalarium Scrum Organizer</li>
                <li className="TimelineContentInterests__Item">Crytocurrency research</li>
              </ul>

              <div className="TimelineContentInterests__Heading">CURRENT STACK</div>
              <ul className="TimelineContentInterests__Heading__List">
                <li className="TimelineContentInterests__Item">React, Redux</li>
                <li className="TimelineContentInterests__Item">Firebase</li>
                <li className="TimelineContentInterests__Item">Java (Android)</li>
              </ul>

              <div className="TimelineContentInterests__Heading">INTERESTS</div>
              <ul className="TimelineContentInterests__Heading__List">
                <li className="TimelineContentInterests__Item">Artificial Intelligence</li>
                <li className="TimelineContentInterests__Item">Deep Learning</li>
              </ul>
            </aside>

            <section className={`TimelineContentFlexContainer__Right`}>

            <blockquote className={`TimelineContentHeader__Quote
              ${this.state.isMounted? 'TimelineContentHeader__Quote--Show': 'TimelineContentHeader__Quote--Hide'}
              `}>What I&apos;ve been up to</blockquote>

              <div className={`TimelineContentBiography
                ${this.state.isMounted ? 'TimelineContentBiography--Show': 'TimelineContentBiography--Hide'}`}>

                <article>
                  <time>MAY-JULY 2017</time>
                  <div>
                    <h4>LOCALIZED BEACON PAGES</h4>
                    <aside>
                      <a target="_blank" className="Timeline__Link" href="https://localized-81cee.firebaseapp.com/">Website</a>, &nbsp;
                      <a target="_blank" className="Timeline__Link" href="https://github.com/BryceEWatson/localized-app">Github</a>
                      <div className="Timeline__Technologies">Stack: Firebase, Polymer, Eddystone Beacons</div>
                    </aside>
                    <p>
                      Created and submitted business plans for "Localized" project
                      to the Italy, the Netherlands and Denmark. We also applied
                      to various incubators involved in the new French Tech Visa.
                    </p>
                    <p>
                      Our cross-platform project web (Firebase, Polymer,
                      Progressive Web App) idea involved having mobile phone users
                      receive push notifications in Chrome (via Firebase, Physical
                      Web) when in close proximity to a business advertising deals
                      and promotions.
                    </p>
                  </div>
                  <h4>RESULT</h4>
                  <p>
                    We had several conversations with incubators and accelerators.
                    The idea was accepted by an incubator in Italy, as well as by
                    the Start-up Denmark expert panel. We actually received a
                    letter of approval from the Denmark panel stating that we
                    could apply for residency. Unfortunately, Google had pulled
                    support for the Physical Web technology
                  </p>
                </article>

                <hr/>

                <article>
                  <time>JUNE-AUGUST 2017</time>
                  <div>
                    <h4>BEARFORCE</h4>
                    <aside>
                      <a target="_blank" className="Timeline__Link" href="https://bearforceapp.firebaseapp.com/">View project</a>, &nbsp;
                      <a target="_blank" className="Timeline__Link" href="https://github.com/BryceEWatson/bearforceapp">Github</a>
                      <div className="Timeline__Technologies">Stack: Firebase, Polymer, WebRTC</div>
                    </aside>
                    <p>
                      BearForce: We envisioned a streaming platform for the gay bear
                      community, a central marketplace place for gay merchants and
                      streamers alike, appealing to the bear/cub/chaser community.
                    </p>
                  </div>
                  <h4>RESULT</h4>
                  <p>
                    We did quite a bit of research into WebRTC and its potential
                    for supporting streaming. We experimented quite a bit using
                    different libraries (Conspect.io, RTCMultiConnection), and
                    trying to configure it for Safari Tech Preview 11.
                    The question of scalability became an issue and with
                    established companies with proprietary streaming solutions,
                    we had to put this project on hold.
                  </p>
                </article>

                <hr/>

                <article>
                  <time>SEPTEMBER-NOVEMBER 2017</time>
                  <div>
                    <h4>KELVINWATSON.COM</h4>
                    <aside>
                      <a target="_blank" className="Timeline__Link" href="https://kelvinwatson.com">View project</a>, &nbsp;
                      <a target="_blank" className="Timeline__Link" href="https://github.com/kelvinwatson/kelvinwatsonmusic">Github</a>
                      <div className="Timeline__Technologies">Stack: Firebase, React, Redux</div>
                    </aside>
                    <p>
                      This is a personal website for me to express myself.
                      Originally, I had envisioned it to be a "choose your own
                      adventure" type of project. I still plan to use Unity and
                      see if I can enhance this a bit more.
                    </p>
                  </div>
                  <h4>RESULT</h4>
                  <p>
                    This was my second foray into web development in React, and
                    I have to say I really enjoyed using Redux much more than
                    plain React.
                  </p>
                </article>



                <aside>
                  <h4>Other projects</h4>
                  <ul>
                    <li><a target="_blank" className="Timeline__Link" href="https://kelvinwatson-53204.firebaseapp.com/">kelvinwatson-53204</a></li>
                  </ul>
                </aside>
              </div>

            </section>


          </main>
        </div>
      </ProfileElement>
    )
  }
}
