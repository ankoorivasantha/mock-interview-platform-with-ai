// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase-admin/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCjS8pSdRfV4akHT9hiKa5FbeQw0q0WCkU",
  authDomain: "prepwise-a20c5.firebaseapp.com",
  projectId: "prepwise-a20c5",
  storageBucket: "prepwise-a20c5.firebasestorage.app",
  messagingSenderId: "226997498363",
  appId: "1:226997498363:web:4f6691cea9737db8899b5e",
  measurementId: "G-FQ42RYENCR"
};

// Initialize Firebase
const app =!getApps.length ? initializeApp(firebaseConfig) : getApp()
export const auth=getAuth(app);
export const db=getFirestore(app)