// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiHinRS3HIoS73AVH31P_Fwvs8KH2hYx0",
    authDomain: "ema-john-simple-344c8.firebaseapp.com",
    projectId: "ema-john-simple-344c8",
    storageBucket: "ema-john-simple-344c8.appspot.com",
    messagingSenderId: "862018501981",
    appId: "1:862018501981:web:1f1cef6ed0f3620b1e3cb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()

export default auth;