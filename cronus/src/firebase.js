// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5dMZo0Ij-qcDueEIMrTZU1CHvs5cmoMc",
  authDomain: "cronus-70260.firebaseapp.com",
  projectId: "cronus-70260",
  storageBucket: "cronus-70260.appspot.com",
  messagingSenderId: "175820172693",
  appId: "1:175820172693:web:a93eb39710c2cb7f8a9a9c",
  measurementId: "G-CP1YQH9F78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth()
