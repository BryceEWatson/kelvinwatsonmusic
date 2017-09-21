import FirebaseUtil from './Utils/InitializeFirebase';
import DebugLog from './Utils/DebugLog';

/**
 * action types
 */

export const AUDIO = {
  GET: 'GET_AUDIO',
  REQUEST: 'GET_AUDIO_REQUEST',
  FAILURE: 'GET_AUDIO_FAILURE',
  SUCCESS: 'GET_AUDIO_SUCCESS',
  EMPTY: 'GET_AUDIO_EMPTY',

  PLAYING: 'AUDIO_PLAYING',
  PLAY: 'AUDIO_PLAY',
  PAUSE: 'AUDIO_PAUSE',
};

export const REACH = {
  SEND: 'REACH_SEND_MESSAGE',
  REQUEST: 'REACH_SEND_MESSAGE_REQUEST',
  SUCCESS: 'REACH_SEND_MESSAGE_SUCCESS',
  FAILURE: 'REACH_SEND_MESSAGE_FAILURE',
};

export const SCROLL = {
  UP: 'SCROLL_UP',
  DOWN: 'SCROLL_DOWN',
};

export const MUSIC = {
  GET: 'GET_MUSIC',
  REQUEST: 'GET_MUSIC_REQUEST',
  FAILURE: 'GET_MUSIC_FAILURE',
  SUCCESS: 'GET_MUSIC_SUCCESS',
  EMPTY: 'GET_MUSIC_EMPTY',
  PLAY_BACKGROUND_MUSIC: 'PLAY_BACKGROUND_MUSIC',
};

export const NAVIGATION = {
  GET: 'GET_NAVIGATION',
  SET: 'SET_SELECTED_NAVIGATION',
  UNSET: 'UNSET_SELECTED_NAVIGATION',
  OPEN_OVERLAY: 'OPEN_NAVIGATION_OVERLAY',
  CLOSE_OVERLAY: 'CLOSE_NAVIGATION_OVERLAY',
  GET_DIAL_CONTENTS: {
    STATION_DIAL: 'GET_STATION_DIAL_CONTENTS',
    OUTDOORS_DIAL: 'GET_OUTDOORS_DIAL_CONTENTS',
    CABIN_DIAL: 'GET_CABIN_DIAL_CONTENTS',
    HALLWAY_DIAL: 'GET_HALLWAY_DIAL_CONTENTS',
    EXPLORE_STATION_DIAL: 'GET_EXPLORE_STATION_DIAL',
    EXIT_CABIN_DIAL: 'GET_EXIT_CABIN_DIAL',
  },
  STATION_DIAL: {
    GO_OUTDOORS: 'GO_OUTDOORS',
    BOARD_TRAIN: 'BOARD_TRAIN',
    EXPLORE_STATION: 'EXPLORE_STATION'
  },
  OUTDOORS_DIAL: {
    GO_BACK_TO_STATION: 'GO_BACK_TO_STATION',
  },
  EXPLORE_STATION: {
    GO_BACK_TO_STATION: 'GO_BACK_TO_STATION',
  },
  CABIN_DIAL: {
    EXPLORE_CABIN: 'EXPLORE_CABIN',
    LOOK_OUTSIDE_WINDOW: 'LOOK_OUTSIDE_WINDOW',
    GO_BACK_TO_STATION: 'GO_BACK_TO_STATION'
  },
};

export const INTRO = {
  SKIP: 'SKIP_INTRO',
};

export const SCENE = {
  LOAD: 'LOAD_SCENE',
  FAILURE: 'LOAD_SCENE_FAILURE',
  SUCCESS: 'LOAD_SCENE_SUCCESS',
};

export const DIMMER = {
  SET: 'DIMMER_SET',
  UNSET: 'DIMMER_UNSET',
};

export const PAGE = {
  REQUEST: 'PAGE_REQUEST',
  SUCCESS: 'PAGE_SUCCESS',
  FAILURE: 'PAGE_FAILURE',
  CLOSE: 'PAGE_CLOSE',
}

/**
 * action creators
 */
export function fetchMusic() {
  return function(dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(getMusicRequest());

    let arr = [];

    return FirebaseUtil.getFirebase().storage().ref().child('Music/KelvinWatson-MindlessGraffiti.mp3').getDownloadURL().then(function(url) {

      // DebugLog('url', url);
      arr.push(url);
      dispatch(getMusicSuccess(arr));
    }).catch(function(err) {
      dispatch(getMusicFailure(err));
    });
  }
}

export function getNavigation() {
  return {
    type: NAVIGATION.GET
  }
}

export function setNavigation(page) {
  return {
    type: NAVIGATION.SET,
    page
  }
}

export function unsetNavigation() {
  return {
    type: NAVIGATION.UNSET
  }
}

function getMusicRequest() {
  return {
    type: MUSIC.REQUEST,
    status: 'Retrieving music... '
  }
}

function getMusicSuccess(music) {
  return {
    type: MUSIC.SUCCESS,
    status: 'Retrieved music successfully.',
    music
  }
}

function getMusicFailure(err) {
  return {
    type: MUSIC.FAILURE,
    status: err
  }
}

/*
 * Scenes
 */
export function fetchScene(sceneName) {
  return function(dispatch) {
    dispatch(loadScene(sceneName));

    switch (sceneName) {
      case 'TRAIN_STATION_FROM_OUTDOORS':
      case 'TRAIN_STATION_FROM_EXPLORE_STATION':
      case 'TRAIN_STATION_FROM_CABIN':
      case 'TRAIN_STATION':
        sceneName = 'TRAIN_STATION';
        //  return FirebaseUtil.getFirebase().storage().ref().child('Music/KelvinWatson-ImaginingMarsOpeningThemeExtended.mp3').getDownloadURL().then(function(url){
        // return FirebaseUtil.getFirebase().storage().ref().child('Music/KelvinWatson-OneForceReprise.mp3.mp3').getDownloadURL().then(function(url){
        return FirebaseUtil.getFirebase().storage().ref().child('Music/KelvinWatson-Bisected.mp3').getDownloadURL().then(function(url) {
          DebugLog('url', url);
          dispatch(playBackgroundMusic(url, 'Bisected'));
          let assets = {
            audio: url,
            images: {
              main: 'Images/station.jpg',
              other: []
            },
          }
          dispatch(getDialContents('STATION_DIAL'));
          dispatch(loadSceneSuccess(sceneName, assets));
        }).catch(function(err) {
          dispatch(loadSceneFailure(sceneName, err));
        });
        break;
      case 'GO_OUTDOORS':
        dispatch(getDialContents('OUTDOORS_DIAL'));
        dispatch(loadSceneSuccess(sceneName, null));
        dispatch(skipIntro()); //no longer play intro
        break;
      case 'LEAVE_STATION':
        dispatch(getDialContents('EXIT_DIAL'));
        dispatch(loadSceneSuccess(sceneName, null));
        dispatch(skipIntro()); //no longer play intro
        break;
      case 'CABIN_FROM_EXPLORE_CABIN':
      case 'CABIN_FROM_EXIT_CABIN':
      case 'BOARD_TRAIN':
        sceneName = 'BOARD_TRAIN';
        dispatch(getDialContents('CABIN_DIAL'));
        dispatch(loadSceneSuccess(sceneName, null));
        dispatch(skipIntro()); //no longer play intro
        break;
      case 'EXPLORE_CABIN':
        dispatch(getDialContents('HALLWAY_DIAL'));
        dispatch(loadSceneSuccess(sceneName, null));
        dispatch(skipIntro()); //no longer play intro
        break;
      case 'EXPLORE_STATION':
        dispatch(getDialContents('EXPLORE_STATION_DIAL'));
        dispatch(loadSceneSuccess(sceneName, null));
        dispatch(skipIntro()); //no longer play intro
        break;
      case 'EXIT_CABIN':
        dispatch(getDialContents('EXIT_CABIN_DIAL'));
        dispatch(loadSceneSuccess(sceneName, null));
        dispatch(skipIntro()); //no longer play intro
        break;
      default:
        sceneName = 'TRAIN_STATION';
        //  return FirebaseUtil.getFirebase().storage().ref().child('Music/KelvinWatson-ImaginingMarsOpeningThemeExtended.mp3').getDownloadURL().then(function(url){
        // return FirebaseUtil.getFirebase().storage().ref().child('Music/KelvinWatson-OneForceReprise.mp3.mp3').getDownloadURL().then(function(url){
        return FirebaseUtil.getFirebase().storage().ref().child('Music/KelvinWatson-Bisected.mp3').getDownloadURL().then(function(url) {
          DebugLog('url', url);
          dispatch(playBackgroundMusic(url, 'Bisected'));
          let assets = {
            audio: url,
            images: {
              main: 'Images/station.jpg',
              other: []
            },
          }
          dispatch(getDialContents('STATION_DIAL'));
          dispatch(loadSceneSuccess(sceneName, assets));
        }).catch(function(err) {
          dispatch(loadSceneFailure(sceneName, err));
        });
    }
  }
}

export function playBackgroundMusic(url, title) {
  return {
    type: MUSIC.PLAY_BACKGROUND_MUSIC,
    status: 'Playing background music',
    url,
    title,
  }
}

export function getDialContents(dialType) {
  switch (dialType) {
    case 'STATION_DIAL':
      return {
        type: NAVIGATION.GET_DIAL_CONTENTS.STATION_DIAL
      }
    case 'OUTDOORS_DIAL':
      return {
        type: NAVIGATION.GET_DIAL_CONTENTS.OUTDOORS_DIAL
      }
    case 'EXPLORE_STATION_DIAL':
      return {
        type: NAVIGATION.GET_DIAL_CONTENTS.EXPLORE_STATION_DIAL
      }
    case 'CABIN_DIAL':
      return {
        type: NAVIGATION.GET_DIAL_CONTENTS.CABIN_DIAL
      }
    case 'HALLWAY_DIAL':
      return {
        type: NAVIGATION.GET_DIAL_CONTENTS.HALLWAY_DIAL
      }
    case 'EXIT_CABIN_DIAL':
      return {
        type: NAVIGATION.GET_DIAL_CONTENTS.EXIT_CABIN_DIAL
      }
  }
}

export function loadScene(sceneName) {
  return {
    type: SCENE.LOAD,
    status: 'Load scene: ' + sceneName,
    sceneName
  }
}

export function loadSceneFailure(sceneName, err) {
  return {
    type: SCENE.FAILURE,
    status: err,
    sceneName
  }
}

export function loadSceneSuccess(sceneName, dial, assets) {
  return {
    type: SCENE.SUCCESS,
    status: 'Successfully loaded scene: ' + sceneName,
    sceneName,
    dial,
    assets
  }
}

export function setDimmer(sceneName){
  return {
    type: DIMMER.SET,
    sceneName,
  }
}

export function unsetDimmer(sceneName){
  return {
    type: DIMMER.UNSET,
    sceneName,
  }
}

/*
 * NAVIGATION
 */
export function openNavigationOverlay() {
  return {
    type: NAVIGATION.OPEN_OVERLAY
  }
}

export function closeNavigationOverlay() {
  return {
    type: NAVIGATION.CLOSE_OVERLAY
  }
}

export function fromStationGoOutdoors() {
  return {
    type: NAVIGATION.STATION_DIAL.GO_OUTDOORS
  }
}

export function fromStationBoardTrain() {
  return {
    type: NAVIGATION.STATION_DIAL.BOARD_TRAIN
  }
}

/*
 * INTRO
 */
export function skipIntro() {
  return {
    type: INTRO.SKIP
  }
}

/*
 * PAGE
 */
export function launchPage(page){
  return function(dispatch){
    dispatch(launchPageRequest(page));
    let pageContent;
    switch(page){
      case 'ME':
        pageContent = {};
        break;
    }
    dispatch(launchPageSuccess(page, pageContent));
  }
}

export function launchPageRequest(page){
  return {
    type: PAGE.REQUEST,
    page,
  }
}

export function launchPageSuccess(page){
  return {
    type: PAGE.SUCCESS,
    page,
  }
}

export function launchPageFailure(page){
  return {
    type: PAGE.REQUEST,
    page,
  }
}

export function closePage(page){
  return {
    type: PAGE.CLOSE,
    page,
  }
}

export function scrollUp(){
  return {
    type: SCROLL.UP,
  }
}

export function scrollDown(){
  return {
    type: SCROLL.DOWN,
  }
}

export function reachSendMessage(name, email, message) {
  return function(dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(reachSendMessageRequest(name, email, message));

    const messageObj = {
      name: name || '',
      email: email || '',
      message: message || '',
    };

    return FirebaseUtil.getFirebase().database().ref('messages').push(messageObj, (err)=>{
      if(err){
        dispatch(reachSendMessageFailure());
      }else{
        dispatch(reachSendMessageSuccess());
      }
    });
  }
}

export function reachSendMessageRequest(name, email, message){
  return {
    type: REACH.REQUEST,
    name,
    email,
    message,
    status: 'Sending message...',
  }
}

export function reachSendMessageSuccess(name, email, message){
  return {
    type: REACH.SUCCESS,
    name,
    email,
    message,
    status: 'Message sent successfully. Thank you! I will respond shortly.',
  }
}

export function reachSendMessageFailure(name, email, message, error){
  return {
    type: REACH.FAILURE,
    name,
    email,
    message,
    status: error,
  }
}

export function playAudio(){
  return {
    type: AUDIO.PLAY,
  }
}

export function setAudioPlaying(isPlaying){
  return {
    type: AUDIO.PLAYING,
    isPlaying: isPlaying
  }
}

export function pauseAudio(){
  return {
    type: AUDIO.PAUSE,
  }
}
