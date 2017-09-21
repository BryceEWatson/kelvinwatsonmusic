import React from 'react';
import Chevron from '../../Chevron/Chevron';
import DebugLog from '../../../Utils/DebugLog';
import './ExitCabinDial.css'

export default class ExitCabinDial extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isBottomOptionActive: false,
    }

    this.onMouseOverDialOption = this.onMouseOverDialOption.bind(this);
    this.onMouseLeaveDialOption = this.onMouseLeaveDialOption.bind(this);
  }

  onMouseOverDialOption(option){
    this.props.setDimmer('EXIT_CABIN', true);
    switch(option){
      case 'bottom':
        this.setState({
          isBottomOptionActive: true,
        });
        break;
    }
  }

  onMouseLeaveDialOption(option){
    this.props.setDimmer('EXIT_CABIN', false);
    switch(option){
      case 'bottom':
        this.setState({
          isBottomOptionActive: false,
        });
        break;
    }
  }

  render(){
    const dialOptions = this.props.dialOptions;
    const onClickJourneyDialSelection = this.props.onClickJourneyDialSelection;

    return (
      <div className="ExitCabinDialPositioningWrapper">
        <section className="ExitCabinDialSection">

          {dialOptions.bottom &&
            <div
              onMouseOver={(e)=>this.onMouseOverDialOption('bottom')}
              onMouseLeave={(e)=>this.onMouseLeaveDialOption('bottom')}
              onClick={(e)=> onClickJourneyDialSelection('EXIT_CABIN_DIAL', dialOptions.bottom.cta)} className="ExitCabinDial__Option ExitCabinDial__Option--Bottom">
              <Chevron
                cta={dialOptions.bottom.cta}
                onMouseOver={(e)=>this.onMouseOverDialOption('bottom')}
                onMouseLeave={(e)=>this.onMouseLeaveDialOption('bottom')}
                isCircleWithLineActive={this.state.isBottomOptionActive}
                skipIntro={true}
                degree={dialOptions.bottom.chevronDegree}
                label={dialOptions.bottom.label}/>
            </div>
          }
        </section>
      </div>
    )
  }
}
