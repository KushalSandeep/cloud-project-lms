import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKU2DQF1JoDyNh0jKi855p-cRzrw-Z0L4",
  authDomain: "cloud-project-lms.firebaseapp.com",
  projectId: "cloud-project-lms",
  storageBucket: "cloud-project-lms.appspot.com",
  messagingSenderId: "284541492555",
  appId: "1:284541492555:web:0a94afb70b7ad39d8ddcce",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
