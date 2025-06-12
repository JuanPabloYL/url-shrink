// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6A6TDqSgTdHALO_k9MUB4FbES9jiGvIE",
  authDomain: "shortify-acbfe.firebaseapp.com",
  projectId: "shortify-acbfe",
  storageBucket: "shortify-acbfe.firebasestorage.app",
  messagingSenderId: "356800279089",
  appId: "1:356800279089:web:16c5963d5d901b1f3e9b10",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth();
export const FirebaseDB = getFirestore(FirebaseApp);
