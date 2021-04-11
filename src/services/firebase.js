import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCLj2CEKkx_kd9oEvmPrNi5mCeDhk3TnFM",
  authDomain: "react-dev-skills-2894c.firebaseapp.com",
  projectId: "react-dev-skills-2894c",
  storageBucket: "react-dev-skills-2894c.appspot.com",
  messagingSenderId: "948478408677",
  appId: "1:948478408677:web:49f14a0ef928fc5a8ce10c"
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

function login() {
  auth.signInWithPopup(provider);
}

function logout() {
  auth.signOut();
}

export {
  auth,
  login,
  logout,
}
