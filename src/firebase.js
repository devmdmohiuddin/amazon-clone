import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBSuGNTXMM7o29bGcbuzr8y_jYybESTuWc",
  authDomain: "clone-43a3b.firebaseapp.com",
  databaseURL: "https://clone-43a3b.firebaseio.com",
  projectId: "clone-43a3b",
  storageBucket: "clone-43a3b.appspot.com",
  messagingSenderId: "217621428875",
  appId: "1:217621428875:web:012509227a9f503439f28e",
  measurementId: "G-HZ9WTE6QKE"
});

const auth = firebase.auth();

export { auth };
