import React from 'react';
import DebugLog from '../../Utils/DebugLog';
import './CircleWithLine.css'

export default class CircleWithLine extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isActive: this.props.isActive,
    }
  }

  componentWillReceiveProps(newProps){
    this.setState({
      isActive: newProps.isActive,
    });
  }

  render(){
    const degree = this.props.degree;
    const label = this.props.label;
    const cta = this.props.cta;
    const isActive = this.state.isActive;

    let compensate = degree;
    let positionClass;

    switch(cta){
      case 'EXPLORE_STATION':
        positionClass = 'CircleWithLine--Position--ExploreStation';
        compensate = 180;
        break;
      case 'BOARD_TRAIN':
        positionClass = 'CircleWithLine--Position--BoardTrain';
        compensate = 270;
        break;
      case 'GO_OUTDOORS':
        positionClass = 'CircleWithLine--Position--GoOutdoors';
        compensate = 0;
        break;
      case 'TRAIN_STATION_FROM_OUTDOORS':
        positionClass = 'CircleWithLine--Position--TrainStationFromOutdoors';
        compensate = 270;
        break;
      case 'TRAIN_STATION_FROM_EXPLORE_STATION':
        positionClass = 'CircleWithLine--Position--TrainStationFromExploreStation';
        break;
      case 'TRAIN_STATION_FROM_CABIN':
        positionClass = 'CircleWithLine--Position--TrainStationFromCabin';
        compensate = 180;
        break;
      case 'EXIT_CABIN':
        positionClass = 'CircleWithLine--Position--ExitCabin';
        break;
      case 'EXPLORE_CABIN':
        positionClass = 'CircleWithLine--Position--ExploreCabin';
        compensate = 360;
        break;
      case 'CABIN_FROM_EXIT_CABIN':
        positionClass = 'CircleWithLine--Position--CabinFromExitCabin';
        compensate = 270;
        break;
      case 'CABIN_FROM_EXPLORE_CABIN':
        positionClass = 'CircleWithLine--Position--CabinFromExploreCabin';
        compensate = 270;
        break;
      case 'ME_SCROLL_DOWN':
        positionClass = 'CircleWithLine--Position--MeScroll';
        compensate = 270;
        break;
      case 'SOCIAL_ICONS':
        positionClass = '';
        compensate = 180;
        break;
    }

    let arrowDegree = {
      'WebkitTransform': 'rotate('+compensate + 'deg)',
      'transform': 'rotate('+compensate + 'deg)'
    };

    return (
      <section>
        <div style={arrowDegree} className={`CircleWithLine--Rotate ${positionClass}`}>

          <svg xmlns="http://www.w3.org/2000/svg"
               width="0.9in" height="0.09in"
               viewBox="0 0 206 21">
            <path id="Selection #1" className={`CircleWithLine__Path ${isActive ? 'CircleWithLine__Path--Active' : 'CircleWithLine__Path--InActive'}`}
                  fill="none" stroke="white" strokeWidth="1"
                  d="M 27.00,13.00 C 24.92,13.04 23.07,13.00 21.17,14.02 17.93,15.76 14.43,22.13 8.21,18.54 6.49,17.55 5.20,15.88 4.69,13.96 2.96,7.45 10.25,3.27 15.79,5.74 18.61,6.99 19.15,9.60 21.39,10.98 23.08,12.02 25.09,11.96 27.00,12.00 27.00,12.00 123.00,12.00 123.00,12.00 123.00,12.00 151.00,12.00 151.00,12.00 155.44,12.00 160.94,11.30 165.06,12.94 165.06,12.94 27.00,13.00 27.00,13.00 Z M 13.89,16.72 C 18.78,14.55 18.63,6.39 10.11,7.62 2.80,12.25 9.47,18.68 13.89,16.72 Z" />
          </svg>
        </div>
      </section>
    );
  }
}

// const CircleWithLine = ({degree, label, isActive}) => {
//
//   let compensate = degree;
//   let positionClass;
//
//   DebugLog('CircleWithLine isActive', isActive);
//
//   // DebugLog('CircleWithLine label', label);
//   // DebugLog('CircleWithLine degree', degree);
//   switch(label){
//     case 'Explore Station':
//       positionClass = 'CircleWithLine--Position--ExploreStation';
//       compensate = 180;
//       break;
//     case 'Board Train':
//       positionClass = 'CircleWithLine--Position--BoardTrain';
//       compensate = 270;
//       break;
//     case 'Go Outdoors':
//       positionClass = 'CircleWithLine--Position--GoOutdoors';
//       compensate = 0;
//       break;
//   }
//
//   // DebugLog('CircleWithLine positionClass', positionClass);
//
//   let arrowDegree = {
//     'WebkitTransform': 'rotate('+compensate + 'deg)',
//     'transform': 'rotate('+compensate + 'deg)'
//   };
//
//   return (
//     <section>
//       <div>{label}</div>
//       <div style={arrowDegree} className={`CircleWithLine--Rotate ${positionClass}
//         ${isActive ? 'CircleWithLine__Path--Active' : ''}`}>
//         {/*}
//         <svg xmlns="http://www.w3.org/2000/svg" width="1in" height="0.1in" viewBox="0 0 206 21">
//           <path className="CircleWithLine__Path" id="Selection #4" fill="white" stroke="white" stroke-width="1" d="M 30.00,11.00
//                  C 27.71,11.00 24.36,10.78 22.39,12.02
//                    19.48,13.86 18.42,19.46 12.00,20.57
//                    0.85,22.50 -5.05,5.89 7.02,1.01
//                    16.20,-2.70 19.67,7.26 22.39,8.98
//                    24.21,10.13 26.91,9.99 29.00,10.00
//                    29.00,10.00 146.00,10.00 146.00,10.00
//                    146.00,10.00 180.00,10.00 180.00,10.00
//                    184.81,10.00 192.74,9.31 197.00,11.00
//                    197.00,11.00 30.00,11.00 30.00,11.00 Z
//                  M 12.00,18.33
//                  C 17.80,17.22 20.72,9.86 16.49,5.43
//                    14.05,2.88 11.20,3.03 8.02,3.43
//                    -2.80,7.98 4.36,19.78 12.00,18.33 Z"/>
//         </svg>*/}
//
//         <svg xmlns="http://www.w3.org/2000/svg"
//              width="0.9in" height="0.09in"
//              viewBox="0 0 206 21">
//           <path id="Selection #1" className="CircleWithLine__Path"
//                 fill="none" stroke="white" strokeWidth="1"
//                 d="M 27.00,13.00
//                    C 24.92,13.04 23.07,13.00 21.17,14.02
//                      17.93,15.76 14.43,22.13 8.21,18.54
//                      6.49,17.55 5.20,15.88 4.69,13.96
//                      2.96,7.45 10.25,3.27 15.79,5.74
//                      18.61,6.99 19.15,9.60 21.39,10.98
//                      23.08,12.02 25.09,11.96 27.00,12.00
//                      27.00,12.00 123.00,12.00 123.00,12.00
//                      123.00,12.00 151.00,12.00 151.00,12.00
//                      155.44,12.00 160.94,11.30 165.06,12.94
//                      165.06,12.94 27.00,13.00 27.00,13.00 Z
//                    M 13.89,16.72
//                    C 18.78,14.55 18.63,6.39 10.11,7.62
//                      2.80,12.25 9.47,18.68 13.89,16.72 Z" />
//         </svg>
//       </div>
//     </section>
//   )
// }

// export default CircleWithLine;
