// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADGebbjpQUoLX4qfsj7VLDOe2w3Gf2u3g",
  authDomain: "marketplaceui-a93c0.firebaseapp.com",
  projectId: "marketplaceui-a93c0",
  storageBucket: "marketplaceui-a93c0.appspot.com",
  messagingSenderId: "230519280053",
  appId: "1:230519280053:web:c4f0fe9ca5832821c549fc",
  measurementId: "G-WQMZHLYVSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()