import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD4AbmGMPOm4Zyw-l-hGQ5r-yzZTNcfU2M",
    authDomain: "pets-f7f93.firebaseapp.com",
    projectId: "pets-f7f93",
    storageBucket: "pets-f7f93.appspot.com",
    messagingSenderId: "396037078905",
    appId: "1:396037078905:web:d9aa7a5e089e9d368ff9a8",
    measurementId: "G-BTS11XY7NJ"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const db = getFirestore(app);
  const auth = getAuth(app);

  export {db, auth};