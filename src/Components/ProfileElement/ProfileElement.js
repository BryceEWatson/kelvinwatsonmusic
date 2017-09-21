import React from 'react';
import DebugLog from '../../Utils/DebugLog';
import './ProfileElement.css'

/*
 * Dummy container that houses the common styling (incl. scroll spy) between Profile Elements (Me, etc)
 * Composes the Profile Elements
 */
export default class ProfileElement extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      theme: 'dark',
      height: '0',
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.updateWindowHeight = this.updateWindowHeight.bind(this);
  }

  componentDidMount(){
    this.updateWindowHeight();
    window.addEventListener('resize', this.updateWindowHeight);
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.updateWindowHeight);
  }

  componentWillReceiveProps(newProps){
    // DebugLog('newProps',newProps);
    if (newProps.scrollDirection === 'DOWN'){
      this.profileElementSection.scrollTop = window.innerHeight;
      newProps.onFinishScrollDown(); //reset scroll state to up to prevent chevron hover from causing side effects
    }
  }

  updateWindowHeight() {
    this.setState({
      height: window.innerHeight
    });
  }

  handleScroll(e){
    // DebugLog('e.nativeEvent.target.scrollTop', e.nativeEvent.target.scrollTop);
    if (e && e.nativeEvent && e.nativeEvent.target && e.nativeEvent.target.scrollTop && e.nativeEvent.target.scrollTop > 0){
      this.toggleTheme('light');
    } else {
      this.toggleTheme('dark');
    }
  }

  toggleTheme(theme){
    this.setState({
      theme: theme,
    });
  }

  render(){
    return (
      <section ref={(node)=>{this.profileElementSection = node}}
        onScroll={this.handleScroll}
        className={`ProfileElementSection
          ${this.state.theme && this.state.theme === 'light' ? 'ProfileElementSection--Light' : 'ProfileElementSection--Dark'}`}>
        <main className="ProfileElementContentMain">
          {this.props.children}
        </main>
      </section>
    )
  }
}
