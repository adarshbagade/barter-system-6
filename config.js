import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAAoN22hwRiNcUOndY6oy9_skamiv7xjBQ",
  authDomain: "barter-system-2-31821.firebaseapp.com",
  projectId: "barter-system-2-31821",
  storageBucket: "barter-system-2-31821.appspot.com",
  messagingSenderId: "1081435750914",
  appId: "1:1081435750914:web:8316e0db1d45def732dd1b"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
