//firebase config file
import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/compat/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqflNsE6u6RpCxrTlNOdA9kaoKWG_3moU",
  authDomain: "weight-tracker-34951.firebaseapp.com",
  databaseURL: "https://weight-tracker-34951-default-rtdb.firebaseio.com",
  projectId: "weight-tracker-34951",
  storageBucket: "weight-tracker-34951.appspot.com",
  messagingSenderId: "1066828380871",
  appId: "1:1066828380871:web:ef14243b88cde87a045ce2",
  measurementId: "G-3JG1MCB4W8",
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export default database;
