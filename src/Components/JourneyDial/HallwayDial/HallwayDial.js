import React from 'react';
import Chevron from '../../Chevron/Chevron';
import DebugLog from '../../../Utils/DebugLog';
import './HallwayDial.css'

export default class HallwayDial extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLeftOptionActive: false,
    };
    this.onMouseOverDialOption = this.onMouseOverDialOption.bind(this);
    this.onMouseLeaveDialOption = this.onMouseLeaveDialOption.bind(this);
  }

  onMouseOverDialOption(option){
    this.props.setDimmer('HALLWAY', true);
    switch(option){
      case 'left':
        this.setState({
          isLeftOptionActive: true,
        });
        break;
    }
  }

  onMouseLeaveDialOption(option){
    this.props.setDimmer('HALLWAY', false);
    switch(option){
      case 'left':
        this.setState({
          isLeftOptionActive: false,
        });
        break;
    }
  }

  render(){
    const dialOptions = this.props.dialOptions;
    const onClickJourneyDialSelection = this.props.onClickJourneyDialSelection;

    return (
      <div className="HallwayDialPositioningWrapper">
      <section className="HallwayDialSection">

        <div
          onMouseOver={(e)=>this.onMouseOverDialOption('left')}
          onMouseLeave={(e)=>this.onMouseLeaveDialOption('left')}
          onClick={(e)=> onClickJourneyDialSelection('HALLWAY_DIAL', dialOptions.left.cta)} className="HallwayDial__Option HallwayDial__Option--Left">
          <Chevron
            cta={dialOptions.left.cta}
            onMouseOver={(e)=>this.onMouseOverDialOption('left')}
            onMouseLeave={(e)=>this.onMouseLeaveDialOption('left')}
            isCircleWithLineActive={this.state.isLeftOptionActive}
            skipIntro={true}
            degree={dialOptions.left.chevronDegree}
            label={dialOptions.left.label}/>
        </div>

        {/*}<div className="JourneyDial__TitleChoose CabinDial__TitleChoose">
          <span className="JourneyDial__TitleC">C</span>hoose
        </div>*/}
      </section>
      </div>
    )
  }
}
