// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, 
  authDomain: "mern-blog-da001.firebaseapp.com",
  projectId: "mern-blog-da001",
  storageBucket: "mern-blog-da001.firebasestorage.app",
  messagingSenderId: "938069731167",
  appId: "1:938069731167:web:c8591aa928af1432ea78ea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);