import * as firebase from 'firebase';

var FirebaseUtil = {
  init: function(){
    var config = {
      apiKey: "AIzaSyCpCyoG_fIfotlbg7me3n6oItR6J2saKaU",
      authDomain: "kelvinwatsonmusic.firebaseapp.com",
      databaseURL: "https://kelvinwatsonmusic.firebaseio.com",
      projectId: "kelvinwatsonmusic",
      storageBucket: "kelvinwatsonmusic.appspot.com",
      messagingSenderId: "385627879613"
    };
    firebase.initializeApp(config); //synchronous
  },

  getFirebase: function(){
    return firebase;
  }
};

export default FirebaseUtil;
