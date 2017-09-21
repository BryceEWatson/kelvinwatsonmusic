import React from 'react';
import DebugLog from '../../Utils/DebugLog';
import CabinDial from './CabinDial/CabinDial';
import ExploreStationDial from './ExploreStationDial/ExploreStationDial';
import ExitCabinDial from './ExitCabinDial/ExitCabinDial';
import HallwayDial from './HallwayDial/HallwayDial';
import OutdoorsDial from './OutdoorsDial/OutdoorsDial';
import StationDial from './StationDial/StationDial';
import './JourneyDial.css'

const JourneyDial = ({skipIntro, dial, onClickJourneyDialSelection, setDimmer}) => {

  if (dial.current !== 'STATION_DIAL'){
    skipIntro = true; //intro only applies for station dial
  }

  let renderDial;
  switch(dial.current){
    // case 'STATION_DIAL':
    //   renderDial = <StationDial skipIntro={skipIntro} onClickJourneyDialSelection={onClickJourneyDialSelection} dialOptions={dial.options}/>
    //   break;
    case 'CABIN_DIAL':
      renderDial = <CabinDial setDimmer={setDimmer} onClickJourneyDialSelection={onClickJourneyDialSelection} dialOptions={dial.options}/>
      break;
    case 'OUTDOORS_DIAL':
      renderDial = <OutdoorsDial setDimmer={setDimmer} onClickJourneyDialSelection={onClickJourneyDialSelection} dialOptions={dial.options}/>
      break;
    case 'HALLWAY_DIAL':
      renderDial = <HallwayDial setDimmer={setDimmer} onClickJourneyDialSelection={onClickJourneyDialSelection} dialOptions={dial.options}/>
      break;
    case 'EXPLORE_STATION_DIAL':
      renderDial = <ExploreStationDial setDimmer={setDimmer} onClickJourneyDialSelection={onClickJourneyDialSelection} dialOptions={dial.options}/>
      break;
    case 'EXIT_CABIN_DIAL':
      renderDial = <ExitCabinDial setDimmer={setDimmer} onClickJourneyDialSelection={onClickJourneyDialSelection} dialOptions={dial.options}/>
      break;
    default:
      renderDial = <StationDial setDimmer={setDimmer} skipIntro={skipIntro} onClickJourneyDialSelection={onClickJourneyDialSelection} dialOptions={dial.options}/>
  }

  return (
    <section className={`JourneyDialSection ${skipIntro ? 'JourneyDialSection--SkipIntro' : 'JourneyDialSection--AnimateAppear'}`}>
      {renderDial}
    </section>
  )
};

export default JourneyDial;
