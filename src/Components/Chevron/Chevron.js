import React from 'react';
import DebugLog from '../../Utils/DebugLog';
import CircleWithLine from '../CircleWithLine/CircleWithLine';
import './Chevron.css'

const Chevron = ({ skipIntro, degree, label, isCircleWithLineActive, cta }) => {

  let arrowDegree = {
    'WebkitTransform': 'rotate('+degree + 'deg)',
    'transform': 'rotate('+degree + 'deg)'
  };

  let positionClass;

  DebugLog('cta',cta);

  switch(cta){
    case 'EXPLORE_STATION':
      positionClass = 'ChevronLabel--Position--ExploreStation';
      break;
    case 'BOARD_TRAIN':
      positionClass = 'ChevronLabel--Position--BoardTrain';
      break;
    case 'GO_OUTDOORS':
      positionClass = 'ChevronLabel--Position--GoOutdoors';
      break;
    case 'TRAIN_STATION_FROM_OUTDOORS':
      positionClass = 'ChevronLabel--Position--TrainStationFromOutdoors';
      break;
    case 'TRAIN_STATION_FROM_EXPLORE_STATION':
      positionClass = 'ChevronLabel--Position--TrainStationFromExploreStation';
      break;
    case 'TRAIN_STATION_FROM_CABIN':
      positionClass = 'ChevronLabel--Position--TrainStationFromCabin';
      break;
    case 'EXIT_CABIN':
      positionClass = 'ChevronLabel--Position--ExitCabin';
      break;
    case 'EXPLORE_CABIN':
      positionClass = 'ChevronLabel--Position--ExploreCabin';
      break;
    case 'CABIN_FROM_EXIT_CABIN':
      positionClass = 'ChevronLabel--Position--CabinFromExitCabin';
      break;
    case 'CABIN_FROM_EXPLORE_CABIN':
      positionClass = 'ChevronLabel--Position--CabinFromExploreCabin';
      break;
    case 'ME_SCROLL_DOWN':
      positionClass = 'ChevronLabel--Position--MeScrollDown';
      break;
  }

  DebugLog('positionClass',positionClass);
  DebugLog('isCircleWithLineActive',isCircleWithLineActive);
  DebugLog('label',label);

  return (
    <div>
      <span className={`ChevronLabel ${positionClass}
        ${isCircleWithLineActive ? 'ChevronLabel--Position--Active' : 'ChevronLabel--Position--InActive'}`}>
        {label}</span>
      <section className={`ChevronSection ${skipIntro ? 'ChevronSection--SkipIntro':'ChevronSection--Animate'}`}
        style={arrowDegree}>

        <span className="Chevron ChevronOne"></span>
        <span className="Chevron ChevronTwo"></span>
        <span className="Chevron ChevronThree"></span>

        <CircleWithLine cta={cta} degree={degree} label={label} isActive={isCircleWithLineActive}/>

      </section>
    </div>

  )
};

export default Chevron;
