import React from 'react';
import ProfileElement from '../ProfileElement/ProfileElement';
import Chevron from '../Chevron/Chevron';
import Loading from '../Loading/Loading';
import DebugLog from '../../Utils/DebugLog';
import { isMobile } from '../../Utils/Mobile';
import video from '../../Videos/video_background_white_low.mp4';
import './Reach.css'

export default class Reach extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      messsage: '',
      isMounted: false,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
  }

  componentWillReceiveProps(newProps){
    if (newProps.clearFormFields){
      this.setState({
        name: '',
        email: '',
        messsage: '',
      });
    }
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

  onChangeName(e){
    this.setState({name: e.target.value});
  }

  onChangeEmail(e){
    this.setState({email: e.target.value});
  }

  onChangeMessage(e){
    this.setState({message: e.target.message});
  }

  /*
   * Preconditions: Assumes inputs not empty since "required" is true in all input attributes
   */
  onFormSubmit(e){
    e.preventDefault();
    this.props.onFormSubmit(this.state.name, this.state.email, this.state.message)
  }

  render(){

    return (
      <div className={`ReachVideoContainer ReachContent`}>
        {!isMobile() &&
          <div className="ReachVideoContainerDimmer">
            <video className="ReachVideo" src={video} autoPlay loop/>
            <div className="ReachVideoOverlay"></div>
          </div>
        }
        <div className="ReachMainContent">
          <header className="ReachVideoFlexContainer">
            <div className="ReachVideoFlexLeft"></div>
            <div className="ReachVideoFlexRight ReachContent__Title">Reach</div>
          </header>
          <main className={`ReachVideoFlexContainer ${this.props.isSentSuccessfully ? 'ReachVideoFlexContainer--Hide' : 'ReachVideoFlexContainer--Show'}`}>
            <div className={`ReachVideoFlexLeft ReachAside
              ${this.state.isMounted ? 'ReachAside--Show' : 'ReachAside--Hide'}`}>
              <div className="ReachAside__Heading">
                Software/Web Development
              </div>
              <ul className="ReachAside__List">
                <li>Do you need a website or app?</li>
              </ul>
              <div className="ReachAside__Heading">
                Music
              </div>
              <ul className="ReachAside__List">
                <li>Do you need music for your project?</li>
                <li>Are you a vocalist who wants to collaborate?</li>
              </ul>
            </div>
            <div className="ReachVideoFlexRight">
              <form className="ReachForm"
                onSubmit={this.onFormSubmit}>
                <fieldset className={`ReachForm__FieldSet
                  ${this.state.isMounted ? 'ReachForm__FieldSet--Show' : 'ReachForm__FieldSet--Hide'}`}>
                  {/*<legend></legend>*/}
                  <div className="ReachForm__Div ReachForm__Div--Override">
                    <label htmlFor="ReachName">Name</label>
                    <input id="ReachName" type="text" name="ReachName"
                      value={this.state.name} onChange={this.onChangeName} required/>
                  </div>
                  <div className="ReachForm__Div">
                    <label htmlFor="ReachEmail">Email</label>
                    <input id="ReachEmail" type="email" name="ReachEmail"
                      value={this.state.email} onChange={this.onChangeEmail}/>
                  </div>
                  <div className="ReachForm__Div">
                    <label htmlFor="ReachMessage">Message</label>
                    <textarea id="ReachMessage" className="ReachForm__TextArea" name="ReachMessage"
                    value={this.state.message} onChange={this.onChangeMessage} required/>
                  </div>
                  <div className="ReachForm__DivButton">
                    <input className="ReachForm__Submit" type="submit" value="Send"/>
                  </div>
                  <Loading isLoading={this.props.isSending} />
                </fieldset>
              </form>
            </div>
          </main>


          <main className={`ReachVideoFlexContainer ${this.props.isSentSuccessfully ? 'ReachVideoFlexContainer--Show' : 'ReachVideoFlexContainer--Hide'}`}>
            <div className={`ReachVideoFlexLeft`}></div>
            <div className="ReachVideoFlexRight">
              Thank you for the message! I will respond shortly.
            </div>
          </main>
        </div>
      </div>
    )
  }
}
