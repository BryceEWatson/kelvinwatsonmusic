import { combineReducers } from 'redux';
// import DebugLog from './Utils/DebugLog';

import {
  GET_SONGS, GET_SONGS_REQUEST, GET_SONGS_FAILURE ,GET_SONGS_SUCCESS, GET_SONGS_EMPTY
} from './Actions';

export function getSongs(state = {
  isFetching: false,
  isSuccess: false,
  hasError: false,
  status: undefined,
  songs: []
   }, action){

  switch(action.type){
    case GET_SONGS:
    case GET_SONGS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isSuccess: false,
        hasError: false,
        status: action.status,
        songs: []
      });
    case GET_SONGS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isSuccess: false,
        hasError: true,
        status: action.status,
        songs: []
      });
    case GET_SONGS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isSuccess: true,
        hasError: false,
        status: action.status,
        songs: action.songs
      });
    case GET_SONGS_EMPTY:
      return Object.assign({}, state, {
        isFetching: false,
        isSuccess: true,
        hasError: false,
        status: action.status,
        songs: []
      });
    default:
      return state;
  }
}

/*
 * root reducer
 */
const RootReducer = combineReducers({
  getSongs
});

export default RootReducer;
