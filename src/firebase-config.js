// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArxWSEv8XswtFYRh14lOEIDvflWwOMNjg",
  authDomain: "nexum-7f3df.firebaseapp.com",
  projectId: "nexum-7f3df",
  storageBucket: "nexum-7f3df.appspot.com",
  messagingSenderId: "202018037254",
  appId: "1:202018037254:web:ae1e5604eb34d02ca3ed87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase

export const auth = getAuth(app)