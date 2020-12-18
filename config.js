import * as firebase from 'firebase'
require ('@firebase/firestore')

var firebaseConfig = {
    apiKey: "",
    authDomain: "wireless-library-app-bc081.firebaseapp.com",
    projectId: "wireless-library-app-bc081",
    databaseURL: "https://wireless-library-app-bc081.firebaseio.com",
    storageBucket: "wireless-library-app-bc081.appspot.com",
    messagingSenderId: "311530410851",
    appId: "1:311530410851:web:e3cfdef1a50e99696b3956"
  };

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();