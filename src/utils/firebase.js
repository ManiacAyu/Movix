// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFdgYoLTqjZoGwR88GBs8I8ZKcsFUi63A",
  authDomain: "netflixgpt-b5552.firebaseapp.com",
  projectId: "netflixgpt-b5552",
  storageBucket: "netflixgpt-b5552.appspot.com",
  messagingSenderId: "7637465451",
  appId: "1:7637465451:web:273c115fd6497b3a76f42e",
  measurementId: "G-VBBHPJXXQJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);