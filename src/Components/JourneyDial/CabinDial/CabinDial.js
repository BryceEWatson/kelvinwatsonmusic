import React from 'react';
import Chevron from '../../Chevron/Chevron';
import DebugLog from '../../../Utils/DebugLog';
import './CabinDial.css';

export default class CabinDial extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLeftOptionActive: false,
      isTopOptionActive: false,
      isRightOptionActive: false,
    }
    this.onMouseOverDialOption = this.onMouseOverDialOption.bind(this);
    this.onMouseLeaveDialOption = this.onMouseLeaveDialOption.bind(this);
  }

  onMouseOverDialOption(option){
    this.props.setDimmer('BOARD_TRAIN', true);
    // DebugLog('onMouseOverDialOption option','option');
    switch(option){
      case 'left':
        this.setState({
          isLeftOptionActive: true,
        });
        break;
      case 'top':
        this.setState({
          isTopOptionActive: true,
        });
        break;
      case 'right':
        this.setState({
          isRightOptionActive: true,
        });
        break;
    }
  }

  onMouseLeaveDialOption(option){
    this.props.setDimmer('BOARD_TRAIN', false);
    // DebugLog('onMouseLeaveDialOption option','option');
    switch(option){
      case 'left':
        this.setState({
          isLeftOptionActive: false,
        });
        break;
      case 'top':
        this.setState({
          isTopOptionActive: false,
        });
        break;
      case 'right':
        this.setState({
          isRightOptionActive: false,
        });
        break;
    }
  }

  render(){
    const dialOptions = this.props.dialOptions;
    const onClickJourneyDialSelection = this.props.onClickJourneyDialSelection;

    return (
      <div className="CabinDialPositioningWrapper">
      <section className="CabinDialSection">
        { dialOptions.left &&
          <div
            onMouseOver={(e)=>this.onMouseOverDialOption('left')}
            onMouseLeave={(e)=>this.onMouseLeaveDialOption('left')}
            onClick={(e)=> onClickJourneyDialSelection('CABIN_DIAL', dialOptions.left.cta)} className="CabinDial__Option CabinDial__Option--Left">
            <Chevron
              cta={dialOptions.left.cta}
              onMouseOver={(e)=>this.onMouseOverDialOption('left')}
              onMouseLeave={(e)=>this.onMouseLeaveDialOption('left')}
              isCircleWithLineActive={this.state.isLeftOptionActive}
              skipIntro={true}
              degree={dialOptions.left.chevronDegree}
              label={dialOptions.left.label}/>
          </div>
        }

        { dialOptions.top &&
          <div
            onMouseOver={(e)=>this.onMouseOverDialOption('top')}
            onMouseLeave={(e)=>this.onMouseLeaveDialOption('top')}
            onClick={(e)=> onClickJourneyDialSelection('CABIN_DIAL', dialOptions.top.cta)} className="CabinDial__Option CabinDial__Option--Top">
            <Chevron
              cta={dialOptions.top.cta}
              onMouseOver={(e)=>this.onMouseOverDialOption('top')}
              onMouseLeave={(e)=>this.onMouseLeaveDialOption('top')}
              isCircleWithLineActive={this.state.isTopOptionActive}
              skipIntro={true}
              degree={dialOptions.top.chevronDegree}
              label={dialOptions.top.label}/>
          </div>
        }

        { dialOptions.right &&
        <div
          onMouseOver={(e)=>this.onMouseOverDialOption('right')}
          onMouseLeave={(e)=>this.onMouseLeaveDialOption('right')}
          onClick={(e)=> onClickJourneyDialSelection('CABIN_DIAL', dialOptions.right.cta)} className="CabinDial__Option CabinDial__Option--Right">
          <Chevron
            cta={dialOptions.right.cta}
            onMouseOver={(e)=>this.onMouseOverDialOption('right')}
            onMouseLeave={(e)=>this.onMouseLeaveDialOption('right')}
            isCircleWithLineActive={this.state.isRightOptionActive}
            skipIntro={true}
            degree={dialOptions.right.chevronDegree}
            label={dialOptions.right.label}/>
        </div>
        }

        <div className="JourneyDial__TitleChoose CabinDial__TitleChoose">
          <span className="JourneyDial__TitleC">C</span>hoose
        </div>
      </section>
      </div>
    )
  }
}
