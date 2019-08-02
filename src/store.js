import {createStore, combineReducers, compose} from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import {reactReduxFirebase, firebaseReducer} from 'react-redux-firebase';
import {reduxFirestore, firestoreReducer} from 'redux-firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBONy7jk7dZoZw8My6MLf5sDNYWGTgRTsk",
    authDomain: "triallllll1.firebaseapp.com",
    databaseURL: "https://triallllll1.firebaseio.com",
    projectId: "triallllll1",
    storageBucket: "triallllll1.appspot.com",
    messagingSenderId: "931124350163",
    appId: "1:931124350163:web:4d8fdc1f10df644d" 
};

const rrfConfig = {
    userProfile: 'users', // firebase root where user profiles are stored
    enableLogging: false, // enable/disable Firebase's database logging
    userFirestoreForProfile: true
  }

  //initializethe firebase instance
  firebase.initializeApp(firebaseConfig);

  //init firestore
//   const firestore = firebase.firestore();

  const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
  )(createStore)
  

  const rootReducer = combineReducers({
      firebase: firebaseReducer,
      firestore: firestoreReducer
  })
   
const initialState = {};

  const store = createStoreWithFirebase(rootReducer,initialState, compose(
      reactReduxFirebase(firebase),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

  export default store;