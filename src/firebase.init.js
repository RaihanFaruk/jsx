// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWQCEzUSIfojIqsGqh8cni2Ne5dteApnk",
  authDomain: "tool-house-web-app.firebaseapp.com",
  projectId: "tool-house-web-app",
  storageBucket: "tool-house-web-app.appspot.com",
  messagingSenderId: "83746917499",
  appId: "1:83746917499:web:7fbed86e40b86eb10666de"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;