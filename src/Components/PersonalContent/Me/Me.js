import React from 'react';
import './Me.css'

export default class Me extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isBlackText: true,
      isWhiteText: false,
    }
  }

  render(){
    return (
      <section className={`MeSection ${this.state.isBlackText ? 'MeSectionBlackText' : 'MeSectionWhiteText'}`}>
        blah blah
      </section>
    )
  }
}
