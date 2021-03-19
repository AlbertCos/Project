import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   
import 'firebase/functions';

const firebaseConfig = {
    apiKey: "AIzaSyB7Tk9YMAP_0sii6nfZ9POOHVh-ABMF8GI",
    authDomain: "netflixclone-d4da1.firebaseapp.com",
    projectId: "netflixclone-d4da1",
    storageBucket: "netflixclone-d4da1.appspot.com",
    messagingSenderId: "933805473948",
    appId: "1:933805473948:web:956b511ea7733c5d396d59"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;