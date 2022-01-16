import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAat7lg3V6kcepZzuA7c2Pi-4Uq_75J7YE",
  authDomain: "slack-clone-3d484.firebaseapp.com",
  projectId: "slack-clone-3d484",
  storageBucket: "slack-clone-3d484.appspot.com",
  messagingSenderId: "336886649506",
  appId: "1:336886649506:web:452210b79aeff4f101bdfb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const provider = new GoogleAuthProvider();
