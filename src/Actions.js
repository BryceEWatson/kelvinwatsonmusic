import FirebaseUtil from './Utils/InitializeFirebase';
import DebugLog from './Utils/DebugLog';

/**
 * action types
 */
export const GET_SONGS = 'GET_SONGS';
export const GET_SONGS_REQUEST = 'GET_SONGS_REQUEST';
export const GET_SONGS_FAILURE = 'GET_SONGS_FAILURE';
export const GET_SONGS_SUCCESS = 'GET_SONGS_SUCCESS';
export const GET_SONGS_EMPTY = 'GET_SONGS_EMPTY';

/**
 * action creators
 */
export function fetchSongs() {
  return function (dispatch) {
   // First dispatch: the app state is updated to inform
   // that the API call is starting.

   dispatch(getSongsRequest());

   return FirebaseUtil.getFirebase().database().ref('songs').on('value', (snap) => {
     let songsObj = snap.val();

     DebugLog('fetchSongs', songsObj);

     if (songsObj){
       var arr = Object.values(songsObj);

       arr.sort(function(a,b){ //sort alphabetically
         return a['name'].toLowerCase().localeCompare(b['name'].toLowerCase());
       });

       dispatch(getSongsSuccess(arr));
     } else {
       dispatch(getSongsEmpty());
     }
   }, (err) => {
     dispatch(getSongsFailure(err));
   });
  }
}

function getSongsRequest(){
  return {
    type: GET_SONGS_REQUEST,
    status: 'Retrieving songs... '
  }
}

function getSongsSuccess(songs){
  return {
    type: GET_SONGS_SUCCESS,
    status: 'Retrieved songs successfully.',
    songs
  }
}

function getSongsEmpty(){
  return {
    type: GET_SONGS_SUCCESS,
    status: 'No songs.'
  }
}

function getSongsFailure(){
  return {
    type: GET_SONGS_FAILURE,
    status: 'Failed to retrieve songs.'
  }
}
