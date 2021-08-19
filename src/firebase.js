// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDUtWk1Lx6MGgJKDTHoepjZrN69jZEcCNY",
  authDomain: "clone-623c6.firebaseapp.com",
  projectId: "clone-623c6",
  storageBucket: "clone-623c6.appspot.com",
  messagingSenderId: "567603711649",
  appId: "1:567603711649:web:412b44b4bc0513195daae0",
  measurementId: "G-TL5RBXN3G5",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };