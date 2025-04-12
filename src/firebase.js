// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFt6_jCvwNivg_lzzu7Ovd_nRE45ZPAu4",
  authDomain: "hospitrack-420b6.firebaseapp.com",
  projectId: "hospitrack-420b6",
  storageBucket: "hospitrack-420b6.firebasestorage.app",
  messagingSenderId: "263633545091",
  appId: "1:263633545091:web:44c8930cb327195ea778b6",
  measurementId: "G-YL0D0BSES8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };