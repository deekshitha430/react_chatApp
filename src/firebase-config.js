// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBrC5zrj7e4ZI7GnMSSJOBmYzDoINxsVyg",
  authDomain: "chatapp-22ce5.firebaseapp.com",
  projectId: "chatapp-22ce5",
  storageBucket: "chatapp-22ce5.firebasestorage.app",
  messagingSenderId: "489699192890",
  appId: "1:489699192890:web:517dfe6cab1ae00dcbc503",
  measurementId: "G-LL1CB47HKC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();