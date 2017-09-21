import React from 'react';
import Chevron from '../../Chevron/Chevron';
import DebugLog from '../../../Utils/DebugLog';
import './StationDial.css'

export default class StationDial extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isBottomLeftOptionActive: false,
      isBottomRightOptionActive: false,
      isTopRightOptionActive: false,
      isTopLeftOptionActive: false,
    }
    this.onMouseOverDialOption = this.onMouseOverDialOption.bind(this);
    this.onMouseLeaveDialOption = this.onMouseLeaveDialOption.bind(this);
  }

  onMouseOverDialOption(option){
    this.props.setDimmer('TRAIN_STATION', true);
    switch(option){
      case 'bottomLeft':
        this.setState({
          isBottomLeftOptionActive: true,
        });
        break;
      case 'bottomRight':
        this.setState({
          isBottomRightOptionActive: true,
        });
        break;
      case 'topRight':
        this.setState({
          isTopRightOptionActive: true,
        });
        break;
      case 'topLeft':
        this.setState({
          isTopLeftOptionActive: true,
        });
        break;
    }
  }

  onMouseLeaveDialOption(option){
    this.props.setDimmer('TRAIN_STATION', false);
    switch(option){
      case 'bottomLeft':
        this.setState({
          isBottomLeftOptionActive: false,
        });
        break;
      case 'bottomRight':
        this.setState({
          isBottomRightOptionActive: false,
        });
        break;
      case 'topRight':
        this.setState({
          isTopRightOptionActive: false,
        });
        break;
      case 'topLeft':
        this.setState({
          isTopLeftOptionActive: false,
        });
        break;
    }
  }

  render(){
    const dialOptions = this.props.dialOptions;
    const skipIntro = this.props.skipIntro;
    const onClickJourneyDialSelection = this.props.onClickJourneyDialSelection;

    return (
      <div className="StationDialPositioningWrapper">
      <section className="StationDial__Section">
        { dialOptions.bottomLeft &&
          <div
            onMouseOver={(e)=>this.onMouseOverDialOption('bottomLeft')}
            onMouseLeave={(e)=>this.onMouseLeaveDialOption('bottomLeft')}
            onClick={(e)=>onClickJourneyDialSelection('STATION_DIAL', dialOptions.bottomLeft.cta)} className="StationDial__Option StationDial__Option--BottomLeft">
            <Chevron
              cta={dialOptions.bottomLeft.cta}
              onMouseOver={(e)=>this.onMouseOverDialOption('bottomLeft')}
              onMouseLeave={(e)=>this.onMouseLeaveDialOption('bottomLeft')}
              isCircleWithLineActive={this.state.isBottomLeftOptionActive}
              skipIntro={skipIntro} degree={dialOptions.bottomLeft.chevronDegree}
              label={dialOptions.bottomLeft.label}/>
          </div>
        }
        { dialOptions.bottomRight &&
          <div
            onMouseOver={(e)=>this.onMouseOverDialOption('bottomRight')}
            onMouseLeave={(e)=>this.onMouseLeaveDialOption('bottomRight')}
            onClick={(e)=> onClickJourneyDialSelection('STATION_DIAL', dialOptions.bottomRight.cta)} className="StationDial__Option StationDial__Option--BottomRight">
            <Chevron
              cta={dialOptions.bottomRight.cta}
              onMouseOver={(e)=>this.onMouseOverDialOption('bottomRight')}
              onMouseLeave={(e)=>this.onMouseLeaveDialOption('bottomRight')}
              isCircleWithLineActive={this.state.isBottomRightOptionActive}
              skipIntro={skipIntro} degree={dialOptions.bottomRight.chevronDegree} label={dialOptions.bottomRight.label}/>
          </div>
        }
        { dialOptions.topRight &&
          <div
            onMouseOver={(e)=>this.onMouseOverDialOption('topRight')}
            onMouseLeave={(e)=>this.onMouseLeaveDialOption('topRight')}
            onClick={(e)=> onClickJourneyDialSelection('STATION_DIAL', dialOptions.topRight.cta)} className="StationDial__Option StationDial__Option--TopRight">
            <Chevron
              cta={dialOptions.topRight.cta}
              onMouseOver={(e)=>this.onMouseOverDialOption('topRight')}
              onMouseLeave={(e)=>this.onMouseLeaveDialOption('topRight')}
              isCircleWithLineActive={this.state.isTopRightOptionActive}
              skipIntro={skipIntro} degree={dialOptions.topRight.chevronDegree} label={dialOptions.topRight.label}/>
          </div>
        }
        {  dialOptions.topLeft &&
          <div
            onMouseOver={(e)=>this.onMouseOverDialOption('topLeft')}
            onMouseLeave={(e)=>this.onMouseLeaveDialOption('topLeft')}
            onClick={(e)=> onClickJourneyDialSelection('STATION_DIAL', dialOptions.topLeft.cta)} className="StationDial__Option StationDial__Option--TopLeft">
            <Chevron
              cta={dialOptions.topLeft.cta}
              onMouseOver={(e)=>this.onMouseOverDialOption('topLeft')}
              onMouseLeave={(e)=>this.onMouseLeaveDialOption('topLeft')}
              isCircleWithLineActive={this.state.isTopLeftOptionActive}
              skipIntro={skipIntro} degree={dialOptions.topLeft.chevronDegree} label={dialOptions.topLeft.label}/>
          </div>
        }

          <div className="StationDial__Option--Center JourneyDial__TitleChoose">
            <span className="JourneyDial__TitleC">C</span>hoose
          </div>
      </section>
      </div>
    )
  }
}
