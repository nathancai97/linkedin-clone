import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCp-0fnMAuAbSsAAK3ByeH6xu1msDqQNPQ",
    authDomain: "linkedin-clone-b62b5.firebaseapp.com",
    projectId: "linkedin-clone-b62b5",
    storageBucket: "linkedin-clone-b62b5.appspot.com",
    messagingSenderId: "594296516531",
    appId: "1:594296516531:web:b4ae138ad3ba716e1125c6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};