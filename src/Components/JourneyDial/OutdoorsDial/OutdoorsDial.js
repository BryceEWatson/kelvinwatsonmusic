import React from 'react';
import Chevron from '../../Chevron/Chevron';
import DebugLog from '../../../Utils/DebugLog';
import './OutdoorsDial.css'

export default class OutdoorsDial extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isBottomOptionActive: false,
    };
    this.onMouseOverDialOption = this.onMouseOverDialOption.bind(this);
    this.onMouseLeaveDialOption = this.onMouseLeaveDialOption.bind(this);
  }

  onMouseOverDialOption(option){
    this.props.setDimmer('OUTDOORS', true);
    switch(option){
      case 'bottom':
        this.setState({
          isBottomOptionActive: true,
        });
        break;
    }
  }

  onMouseLeaveDialOption(option){
    this.props.setDimmer('OUTDOORS', false);
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
      <div className="OutdoorsDialPositioningWrapper">
      <section className="OutdoorsDialSection">
        {dialOptions.bottom &&
          <div
            onMouseOver={(e)=>this.onMouseOverDialOption('bottom')}
            onMouseLeave={(e)=>this.onMouseLeaveDialOption('bottom')}
            onClick={(e)=> onClickJourneyDialSelection('OUTDOORS_DIAL', dialOptions.bottom.cta)} className="OutdoorsDial__Option OutdoorsDial__Option--Bottom">
            <Chevron
              cta={dialOptions.bottom.cta}
              onMouseOver={(e)=>this.onMouseOverDialOption('bottom')}
              onMouseLeave={(e)=>this.onMouseLeaveDialOption('bottom')}
              isCircleWithLineActive={this.state.isBottomOptionActive}
              skipIntro={true}
              degree={dialOptions.bottom.chevronDegree}
              label={'Back to station'}/>
          </div>
        }

      </section>
      </div>
    )
  }
}
