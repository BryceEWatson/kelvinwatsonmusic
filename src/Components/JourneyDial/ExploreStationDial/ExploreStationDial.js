import React from 'react';
import Chevron from '../../Chevron/Chevron';
import DebugLog from '../../../Utils/DebugLog';
import './ExploreStationDial.css'

export default class ExploreStationDial extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isRightOptionActive: false,
    }

    this.onMouseOverDialOption = this.onMouseOverDialOption.bind(this);
    this.onMouseLeaveDialOption = this.onMouseLeaveDialOption.bind(this);
  }

  onMouseOverDialOption(option){
    this.props.setDimmer('EXPLORE_STATION', true);
    switch(option){
      case 'right':
        this.setState({
          isRightOptionActive: true,
        });
        break;
    }
  }

  onMouseLeaveDialOption(option){
    this.props.setDimmer('EXPLORE_STATION', false);
    switch(option){
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
      <div className="ExploreStationDialPositioningWrapper">
      <section className="ExploreStationDialSection">

        { dialOptions.right &&
          <div
            onMouseOver={(e)=>this.onMouseOverDialOption('right')}
            onMouseLeave={(e)=>this.onMouseLeaveDialOption('right')}
            onClick={(e)=> onClickJourneyDialSelection('EXPLORE_STATION_DIAL', dialOptions.right.cta)} className="ExploreStationDial__Option ExploreStationDial__Option--Left">
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

        {/*}<div className="JourneyDial__TitleChoose CabinDial__TitleChoose">
          <span className="JourneyDial__TitleC">C</span>hoose
        </div>*/}
      </section>
      </div>
    )
  }
}



// const ExploreStationDial = ({ dialOptions, onClickJourneyDialSelection }) => {
//   DebugLog('ExploreStationDial', dialOptions);
//   return (
//     <div className="ExploreStationDialPositioningWrapper">
//     <section className="ExploreStationDialSection">
//
//       <div onClick={(e)=> onClickJourneyDialSelection('EXPLORE_STATION_DIAL', dialOptions.right.cta)} className="ExploreStationDial__Option ExploreStationDial__Option--Left">
//         <Chevron
//           cta={dialOptions.right.cta}
//           onMouseOver={(e)=>this.onMouseOverDialOption('right')}
//           onMouseLeave={(e)=>this.onMouseLeaveDialOption('right')}
//           isCircleWithLineActive={this.state.isRightOptionActive}
//           skipIntro={true}
//           degree={dialOptions.right.chevronDegree}
//           label={dialOptions.right.label}/>
//       </div>
//
//       {/*}<div className="JourneyDial__TitleChoose CabinDial__TitleChoose">
//         <span className="JourneyDial__TitleC">C</span>hoose
//       </div>*/}
//     </section>
//     </div>
//   )
// };

// export default ExploreStationDial;
