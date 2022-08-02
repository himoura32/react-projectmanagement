import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBN8gjPls3_qRiq81zKzhdIBCdt8a2YnfE",
    authDomain: "projectmanagement-c31d1.firebaseapp.com",
    projectId: "projectmanagement-c31d1",
    storageBucket: "projectmanagement-c31d1.appspot.com",
    messagingSenderId: "355889982930",
    appId: "1:355889982930:web:916b37d94c20f5f44a2c0b"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig);

  // init services
  const projectFirestore = firebase.firestore();
  const projectAuth = firebase.auth();

  // timestamp
  const timestamp = firebase.firestore.Timestamp;
  
  export { projectFirestore, projectAuth, timestamp };