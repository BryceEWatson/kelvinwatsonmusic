import React from 'react';
import ProfileElement from '../ProfileElement/ProfileElement';
import Chevron from '../Chevron/Chevron';
import DebugLog from '../../Utils/DebugLog';
import { isMobile, isMinWidth30em, isMinWidth30emAndMaxWidth60em } from '../../Utils/Mobile';
import brycewatson from '../../Images/brycewatson.jpg';
import dials from '../../Images/dials.png';
import ebayopensource from '../../Images/ebayopensource.png';
import gaymerstreams from '../../Images/gaymerstreams.png';
import webcomponents from '../../Images/webcomponents.png';
import './Portfolio.css'

export default class Portfolio extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showBryceWatsonDescription: false,
      showGaymerStreamsDescription: false,
      showWatsonLogicParallax: false,
      showMildlyRichTextEditor: false,
      isMinWidth30emAndMaxWidth60em: isMinWidth30emAndMaxWidth60em(),
      isMinWidth30em: isMinWidth30em(),
    }
    this.updateWidth = this.updateWidth.bind(this);
    this.showDescription = this.showDescription.bind(this);
  }

  componentDidMount(){
    window.addEventListener('resize', this.updateWidth);
    this.updateWidth();
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.updateWidth);
  }

  updateWidth(){
    this.setState({
      isMinWidth30emAndMaxWidth60em: isMinWidth30emAndMaxWidth60em(),
      isMinWidth30em: isMinWidth30em()
    });
  }

  showDescription(item){
    switch(item){
      case 'bryce':
        return this.setState({
          showBryceWatsonDescription: true,
        });
      case 'kelvinPrototype':
        return this.setState({
          showKelvinWatsonPrototype: true,
        });
      case 'gaymerStreams':
        return this.setState({
          showGaymerStreamsDescription: true,
        });
      case 'watsonlogicParallax':
        return this.setState({
          showWatsonLogicParallax: true,
        });
      case 'mildlyRichTextEditor':
        return this.setState({
          showMildlyRichTextEditor: true,
        });

    }
  }

  hideDescription(item){
    switch(item){
      case 'bryce':
        return this.setState({
          showBryceWatsonDescription: false,
        });
      case 'kelvinPrototype':
        return this.setState({
          showKelvinWatsonPrototype: false,
        });
      case 'gaymerStreams':
        return this.setState({
          showGaymerStreamsDescription: false,
        });
      case 'watsonlogicParallax':
        return this.setState({
          showWatsonLogicParallax: false,
        })
      case 'mildlyRichTextEditor':
        return this.setState({
          showMildlyRichTextEditor: false,
        });
    }
  }

  openLink(url){
    window.open(url, '_blank');
  }

  // Should render a NonJourneyNavigationItem with certain props
  render(){

    const quarters = this.state.isMinWidth30em;
    const thirds = this.state.isMinWidth30emAndMaxWidth60em;
    const halves = !quarters && !thirds;

    let configuration;
    if (thirds){
      configuration = 'thirds';
    } else if (quarters) {
      configuration =  'quarters';
    } else {
      configuration = 'halves';
    }
    return (
      <div className={`PortfolioContent`}>
        <main className="cf w-100">
          <div className="fl w-50 w-third-m w-25-ns"
            onClick={()=>this.openLink('https://brycewatson.com')}
            onMouseOver={()=>this.showDescription('bryce')}
            onMouseLeave={()=>this.hideDescription('bryce')}>
            <div className="aspect-ratio aspect-ratio--1x1 PortfolioItem">
              <img src={brycewatson} className="db bg-center cover aspect-ratio--object PortfolioItem__Image" />
              <div className={`PortfolioItem__Overlay
                  ${this.state.showBryceWatsonDescription || isMobile() ? 'PortfolioItem__Overlay--Show' : ''}`}>
                <h2 className="PortfolioItem__Overlay--Title">BRYCE_WATSON</h2>
                <div className="PortfolioItem__Overlay--Type">personal portfolio</div>
                <div className="PortfolioItem__Overlay--Tech">React, Redux</div>
                <div className="PortfolioItem__Overlay--URL">brycewatson.com</div>
                </div>
            </div>
          </div>
          <div className="fl w-50 w-third-m w-25-ns"
            onClick={()=>this.openLink('https://kelvinwatson-53204.firebaseapp.com')}
            onMouseOver={()=>this.showDescription('kelvinPrototype')}
            onMouseLeave={()=>this.hideDescription('kelvinPrototype')}>
            <div className="aspect-ratio aspect-ratio--1x1 PortfolioItem">
              <img src={dials} className="db bg-center cover aspect-ratio--object PortfolioItem__Image" />
              <div className={`PortfolioItem__Overlay
                  ${this.state.showKelvinWatsonPrototype || isMobile() ? 'PortfolioItem__Overlay--Show' : ''}`}>
                  <h2 className="PortfolioItem__Overlay--Title">Kelvin Watson</h2>
                  <div className="PortfolioItem__Overlay--Type">Prototype Website</div>
                  <div className="PortfolioItem__Overlay--Tech">React, Redux</div>
              </div>
            </div>
          </div>
          {/*<div className="fl w-50 w-third-m w-25-ns"
            onClick={()=>this.openLink('https://brycewatson.com')}>
            <div className="aspect-ratio aspect-ratio--1x1 PortfolioItem">
              <div className={`PortfolioItem__Overlay
                  ${this.state.showBryceWatsonDescription || isMobile() ? 'PortfolioItem__Overlay--Show' : ''}`}>
                <h2 className="PortfolioItem__Overlay--Title">BRYCE_WATSON</h2>
                <div className="PortfolioItem__Overlay--Type">personal portfolio</div>
                <div className="PortfolioItem__Overlay--Tech">React, Redux</div>
                <div className="PortfolioItem__Overlay--URL">brycewatson.com</div>
              </div>
            </div>
          </div>*/}
          {/*<div className={`fl w-50 w-third-m w-25-ns
            ${thirds? '': quarters || halves ? 'PortfolioCell--Hide' : ''}`}>
            <div className="aspect-ratio aspect-ratio--1x1 PortfolioItem PortfolioItem--Blank">
            </div>
          </div>
          <div className={`fl w-50 w-third-m w-25-ns
            ${thirds? '': quarters || halves ? 'PortfolioCell--Hide' : ''}`}>
            <div className="aspect-ratio aspect-ratio--1x1 PortfolioItem PortfolioItem--Blank">
            </div>
          </div>*/}
          {/*<div className="fl w-50 w-third-m w-25-ns"
            onClick={()=>this.openLink('https://gaymerstreams.com')}>
            <div className="aspect-ratio aspect-ratio--1x1 PortfolioItem">
              <div className={`PortfolioItem__Overlay
                  ${this.state.showGaymerStreamsDescription || isMobile() ? 'PortfolioItem__Overlay--Show' : ''}`}>
                <h2 className="PortfolioItem__Overlay--Title">GAYMER STREAMS</h2>
                <div className="PortfolioItem__Overlay--Type">twitch streams</div>
                <div className="PortfolioItem__Overlay--Tech">React, Redux, Thunk, Firebase</div>
                <div className="PortfolioItem__Overlay--URL">gaymerstreams.com</div>
              </div>
            </div>
          </div>*/}
          <div className="fl w-50 w-third-m w-25-ns"
            onClick={()=>this.openLink('https://gaymerstreams.com')}
            onMouseOver={()=>this.showDescription('gaymerStreams')}
            onMouseLeave={()=>this.hideDescription('gaymerStreams')}>
            <div className="aspect-ratio aspect-ratio--1x1 PortfolioItem">
              <img src={gaymerstreams} className="db bg-center cover aspect-ratio--object PortfolioItem__Image" />
              <div className={`PortfolioItem__Overlay
                  ${this.state.showGaymerStreamsDescription || isMobile() ? 'PortfolioItem__Overlay--Show' : ''}`}>
                <h2 className="PortfolioItem__Overlay--Title">GAYMER STREAMS</h2>
                <div className="PortfolioItem__Overlay--Type">twitch streams</div>
                <div className="PortfolioItem__Overlay--Tech">React, Redux, Thunk, Firebase</div>
                <div className="PortfolioItem__Overlay--URL">gaymerstreams.com</div>
              </div>
            </div>
          </div>
          {/*<div className={`fl w-50 w-third-m w-25-ns
            ${quarters || halves ? 'PortfolioCell--Hide' : ''}`}>
            <div className="aspect-ratio aspect-ratio--1x1 PortfolioItem">
            </div>
          </div>
          <div className={`fl w-50 w-third-m w-25-ns
            ${quarters || thirds || halves ? 'PortfolioCell--Hide' : ''}`}>
            <div className="aspect-ratio aspect-ratio--1x1 PortfolioItem">
            </div>
          </div>*/}
          <div className="fl w-50 w-third-m w-25-ns"
            onClick={()=>this.openLink('https://www.webcomponents.org/element/watsonlogic-software/watsonlogic-parallax/elements/watsonlogic-parallax')}
            onMouseOver={()=>this.showDescription('watsonlogicParallax')}
            onMouseLeave={()=>this.hideDescription('watsonlogicParallax')}>
            <div className="aspect-ratio aspect-ratio--1x1 PortfolioItem">
              <img src={webcomponents} className="db bg-center cover aspect-ratio--object PortfolioItem__Image PortfolioItem" />
              <div className={`PortfolioItem__Overlay
                  ${this.state.showWatsonLogicParallax || isMobile() ? 'PortfolioItem__Overlay--Show' : ''}`}>
                <h2 className="PortfolioItem__Overlay--Title">WATSONLOGIC PARALLAX</h2>
                <div className="PortfolioItem__Overlay--Type">polymer webcomponent</div>
                <div className="PortfolioItem__Overlay--Tech">POLYMER 2.0, MOCHA, CHAI</div>
              </div>
            </div>
          </div>
          {/*<div className="fl w-50 w-third-m w-25-ns"
            onClick={()=>this.openLink('https://www.webcomponents.org/element/watsonlogic-software/watsonlogic-parallax/elements/watsonlogic-parallax')}>
            <div className="aspect-ratio aspect-ratio--1x1 PortfolioItem">
              <div className={`PortfolioItem__Overlay
                  ${this.state.showWatsonLogicParallax || isMobile() ? 'PortfolioItem__Overlay--Show' : ''}`}>
                <h2 className="PortfolioItem__Overlay--Title">WATSONLOGIC PARALLAX</h2>
                <div className="PortfolioItem__Overlay--Type">polymer webcomponent</div>
                <div className="PortfolioItem__Overlay--Tech">POLYMER 2.0, MOCHA, CHAI</div>
              </div>
            </div>
          </div>*/}
          {/*<div className={`fl w-50 w-third-m w-25-ns
            ${thirds? '': quarters || thirds || halves ? 'PortfolioCell--Hide' : ''}`}>
            <div className="aspect-ratio aspect-ratio--1x1 PortfolioItem PortfolioItem--Blank">
            </div>
          </div>
          <div className={`fl w-50 w-third-m w-25-ns
            ${thirds? '':quarters || thirds || halves ? 'PortfolioCell--Hide' : ''}`}>
            <div className="aspect-ratio aspect-ratio--1x1 PortfolioItem PortfolioItem--Blank">
            </div>
          </div>*/}
          {/*<div className="fl w-50 w-third-m w-25-ns"
            onClick={()=>this.openLink('https://github.com/eBay/Mildly-Rich-Text-Editor')}>
            <div className="aspect-ratio aspect-ratio--1x1 PortfolioItem PortfolioItem--Blank">
              <div className={`PortfolioItem__Overlay
                  ${this.state.showMildlyRichTextEditor || isMobile() ? 'PortfolioItem__Overlay--Show' : ''}`}>
                <h2 className="PortfolioItem__Overlay--Title">MRTE</h2>
                <div className="PortfolioItem__Overlay--Type">android rich text editor</div>
                <div className="PortfolioItem__Overlay--Tech">Android Studio, Robolectric</div>
              </div>
            </div>
          </div>*/}
          <div className="fl w-50 w-third-m w-25-ns"
            onClick={()=>this.openLink('https://github.com/eBay/Mildly-Rich-Text-Editor')}
            onMouseOver={()=>this.showDescription('mildlyRichTextEditor')}
            onMouseLeave={()=>this.hideDescription('mildlyRichTextEditor')}>
            <div className="aspect-ratio aspect-ratio--1x1 PortfolioItem PortfolioItem--Blank">
              <img src={ebayopensource} className="db bg-center cover aspect-ratio--object PortfolioItem__Image" />
                <div className={`PortfolioItem__Overlay
                    ${this.state.showMildlyRichTextEditor || isMobile() ? 'PortfolioItem__Overlay--Show' : ''}`}>
                  <h2 className="PortfolioItem__Overlay--Title">MRTE</h2>
                  <div className="PortfolioItem__Overlay--Type">android rich text editor</div>
                  <div className="PortfolioItem__Overlay--Tech">Android Studio, Robolectric</div>
                </div>
            </div>
          </div>
        </main>

      </div>
    )
  }
}
