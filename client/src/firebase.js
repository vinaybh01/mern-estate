// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-59355.firebaseapp.com",
  projectId: "mern-estate-59355",
  storageBucket: "mern-estate-59355.appspot.com",
  messagingSenderId: "49456621525",
  appId: "1:49456621525:web:c5708c70fb6d2d1c777f5c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
