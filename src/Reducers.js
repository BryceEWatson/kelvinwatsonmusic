import { combineReducers } from 'redux';
// import DebugLog from './Utils/DebugLog';

import {
  AUDIO,
  MUSIC,
  NAVIGATION,
  INTRO,
  SCENE,
  DIMMER,
  PAGE,
  SCROLL,
  REACH,
} from './Actions';

/*
 * Reduces audio state
 */
export function audio(state = {
  playAudio: false,
  pauseAudio: false,
  isPlaying: false,
}, action){

  switch(action.type){
    case AUDIO.PLAY:
      return Object.assign({}, state, {
        playAudio: true,
        pauseAudio: false,
        isPlaying: false,
      });
    case AUDIO.PLAYING:
      return Object.assign({}, state, {
        playAudio: false,
        pauseAudio: false,
        isPlaying: action.isPlaying,
      });
    case AUDIO.PAUSE:
      return Object.assign({}, state, {
        playAudio: false,
        pauseAudio: true,
        isPlaying: false,
      });
    default:
      return state;
  }
}

/*
 * Reduces music state
 */
export function music(state = {
  isFetching: false,
  isSuccess: false,
  status: undefined,
  list: [],
  backgroundMusicUrl: undefined,
  backgroundMusicTitle: undefined,
}, action){

  switch(action.type){
    case MUSIC.GET:
    case MUSIC.REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isSuccess: false,
        status: action.status,
        list: []
      });
    case MUSIC.FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isSuccess: false,
        status: action.status,
        list: []
      });
    case MUSIC.SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isSuccess: true,
        status: action.status,
        list: action.music
      });
    case MUSIC.EMPTY:
      return Object.assign({}, state, {
        isFetching: false,
        isSuccess: true,
        status: action.status,
        list: [],
      });
    case MUSIC.PLAY_BACKGROUND_MUSIC:
      return Object.assign({}, state, {
        isFetching: false,
        isSuccess: true,
        status: action.status,
        list: [],
        backgroundMusicUrl: action.url,
        backgroundMusicTitle: action.title,
      });
    default:
      return state;
  }
}

/*
 * Reduces navigation state
 */
export function navigation(state = {
  page: undefined,
  underlinedItem: undefined,
  isOpenOverlay: false,
  isFirstTimeOpen: true,
  list: ['Me', 'Music', 'Reach', 'Collaborate'],
  dial: {
    current: 'STATION_DIAL',
    options: {
      bottomLeft: {
        cta: 'LEAVE_STATION',
        label: 'Leave Station',
        chevronDegree: 90,
      },
      bottomRight: {
        cta: 'BOARD_TRAIN',
        label: 'Board Train',
        chevronDegree: 270,
      },
      topRight: {
        cta: 'GO_OUTDOORS',
        label: 'Go Outdoors',
        chevronDegree: 180,
      },
    }
  }
}, action){
  switch(action.type){
    case NAVIGATION.GET:
      return Object.assign({}, state, {
        page: undefined,
      });
    case NAVIGATION.SET:
      return Object.assign({}, state, {
        page: action.page,
      });
    case NAVIGATION.UNSET:
      return Object.assign({}, state, {
        page: undefined
      });
    case NAVIGATION.OPEN_OVERLAY:
      return Object.assign({}, state, {
        isOpenOverlay: true,
      });
    case NAVIGATION.CLOSE_OVERLAY:
      return Object.assign({}, state, {
        isOpenOverlay: false,
        isFirstTimeOpen: false,
      });
    /* STATION DIAL */
    case NAVIGATION.STATION_DIAL.GO_OUTDOORS:
      //TODO: Implement
      break;
    case NAVIGATION.STATION_DIAL.BOARD_TRAIN:
      //TODO: Implement
      break;

    /* CABIN DIAL */

    /* DIAL CONTENTS */
    case NAVIGATION.GET_DIAL_CONTENTS.STATION_DIAL:
      return Object.assign({}, state, {
        dial: {
          current: 'STATION_DIAL',
          options: {
            bottomLeft: {
              cta: 'EXPLORE_STATION',
              label: 'Explore Station',
              chevronDegree: 90,
            },
            bottomRight: {
              cta: 'BOARD_TRAIN',
              label: 'Board Train',
              chevronDegree: 270,
            },
            topRight: {
              cta: 'GO_OUTDOORS',
              label: 'Go Outdoors',
              chevronDegree: 180,
            },
          }
        }
      });
    case NAVIGATION.GET_DIAL_CONTENTS.CABIN_DIAL:
      return Object.assign({}, state, {
        dial: {
          current: 'CABIN_DIAL',
          options: {
            left: {
              cta: 'TRAIN_STATION_FROM_CABIN',
              label: 'Back to terminal',
              chevronDegree: 90,
            },
            top: {
              cta: 'EXIT_CABIN',
              label: 'Exit cabin',
              chevronDegree: 180,
            },
            right: {
              cta: 'EXPLORE_CABIN',
              label: 'Explore Cabin',
              chevronDegree: 270,
            }
          }
        }
      });
    case NAVIGATION.GET_DIAL_CONTENTS.OUTDOORS_DIAL:
      return Object.assign({}, state, {
        dial: {
          current: 'OUTDOORS_DIAL',
          options: {
            bottom: {
              cta: 'TRAIN_STATION_FROM_OUTDOORS',
              label: 'Back to terminal',
              chevronDegree: 0,
            }
          }
        }
      });
    case NAVIGATION.GET_DIAL_CONTENTS.EXIT_CABIN_DIAL:
      return Object.assign({}, state, {
        dial: {
          current: 'EXIT_CABIN_DIAL',
          options: {
            bottom: {
              cta: 'CABIN_FROM_EXIT_CABIN',
              label: 'Back to cabin',
              chevronDegree: 0,
            }
          }
        }
      });
    case NAVIGATION.GET_DIAL_CONTENTS.HALLWAY_DIAL:
      return Object.assign({}, state, {
        dial: {
          current: 'HALLWAY_DIAL',
          options: {
            left: {
              cta: 'CABIN_FROM_EXPLORE_CABIN',
              label: 'Back to cabin',
              chevronDegree: 90,
            }
          }
        }
      });
    case NAVIGATION.GET_DIAL_CONTENTS.EXPLORE_STATION_DIAL:
      return Object.assign({}, state, {
        dial: {
          current: 'EXPLORE_STATION_DIAL',
          options: {
            right: {
              cta: 'TRAIN_STATION_FROM_EXPLORE_STATION',
              label: 'Back to terminal',
              chevronDegree: 270,
            }
          }
        }
      });
    default:
      return state;
  }
}

/*
 * Reduces scene state
 */
export function scene(state = {
  name: 'TRAIN_STATION',
  isFetching: false,
  isSuccess: false,
  status: undefined,
  assets: {},
}, action){
  switch(action.type){
    case SCENE.LOAD:
      return Object.assign({}, state, {
        name: action.sceneName,
        isFetching: true,
        isSuccess: false,
        status: action.status,
        assets: {}
      });
    case SCENE.FAILURE:
      return Object.assign({}, state, {
        name: action.sceneName,
        isFetching: false,
        isSuccess: false,
        status: action.status,
        assets: {}
      });
    case SCENE.SUCCESS:
      return Object.assign({}, state, {
        name: action.sceneName,
        isFetching: false,
        isSuccess: true,
        status: action.status,
        assets: {}
      });
    default:
      return state;
  }
}

/*
 * Reduces dimmer state
 */
export function dimmer(state ={
  isSet: false //plays by default
}, action){
  switch(action.type){
    case DIMMER.SET:
      return Object.assign({}, state, {
        isSet: true,
      });
    case DIMMER.UNSET:
      return Object.assign({}, state, {
        isSet: false,
      });
    default:
      return state;
  }
}

/*
 * Reduces intro state
 */
export function intro(state ={
  skip: false //plays by default
}, action){
  switch(action.type){
    case INTRO.SKIP:
      return Object.assign({}, state, {
        skip: true
      });
    default:
      return state;
  }
}

/*
 * Reduces page state
 */
export function page(state = {
  name: undefined,
  pageContent: {},
  isLaunching: false,
  launchComplete: false,
  launchFailure: false,
}, action){
  switch(action.type){
    case PAGE.REQUEST:
      return Object.assign({}, state, {
        name: action.page,
        pageContent: {},
        isLaunching: true,
        launchComplete: false,
        launchFailure: false,
      });
    case PAGE.SUCCESS:
      return Object.assign({}, state, {
        name: action.page,
        pageContent: {},
        isLaunching: false,
        launchComplete: true,
        launchFailure: false,
      });
    case PAGE.FAILURE:
      return Object.assign({}, state, {
        name: action.page,
        pageContent: {},
        isLaunching: false,
        launchComplete: false,
        launchFailure: true,
      });
    default:
      return state;
  }
}

export function scroll(state = {
  scrollDirection: undefined,
}, action){
  switch(action.type){
    case SCROLL.UP:
      return Object.assign({}, state, {
        scrollDirection: 'UP',
      });
    case SCROLL.DOWN:
      return Object.assign({}, state, {
        scrollDirection: 'DOWN',
      });
    default:
      return state;
  }
}

export function reach(state = {
  name: undefined,
  email: undefined,
  message: undefined,
  isSending: false,
  isSuccess: false,
  isFailure: false,
  status: undefined,
  clearFormFields: false,
}, action){
  switch(action.type){
    case REACH.SEND:
    case REACH.REQUEST:
      return Object.assign({}, state, {
        name: action.name,
        email: action.email,
        message: action.message,
        isSending: true,
        isSuccess: false,
        isFailure: false,
        status: action.status,
        clearFormFields: false,
      });
    case REACH.SUCCESS:
      return Object.assign({}, state, {
        name: action.name,
        email: action.email,
        message: action.message,
        isSending: false,
        isSuccess: true,
        isFailure: false,
        status: action.status,
        clearFormFields: true,
      });
    case REACH.FAILURE:
      return Object.assign({}, state, {
        name: action.name,
        email: action.email,
        message: action.message,
        isSending: false,
        isSuccess: true,
        isFailure: true,
        status: action.status,
        clearFormFields: false,
    });
    default:
      return state;
  }
}
/*
 * root reducer
 */
const RootReducer = combineReducers({
  audio,
  music,
  navigation,
  intro,
  scene,
  dimmer,
  page,
  scroll,
  reach,
});

export default RootReducer;
