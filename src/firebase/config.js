// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import all stuff required for google Auth
import {GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLTlwpEmyTXzwD2IP7ltdnMtTjnb6rhwA",
  authDomain: "plixx-82c7d.firebaseapp.com",
  projectId: "plixx-82c7d",
  storageBucket: "plixx-82c7d.appspot.com",
  messagingSenderId: "48747708183",
  appId: "1:48747708183:web:988bf2b2525684f0bc4152",
  measurementId: "G-9WR7KTYYHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);