import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAat7lg3V6kcepZzuA7c2Pi-4Uq_75J7YE",
//   authDomain: "slack-clone-3d484.firebaseapp.com",
//   projectId: "slack-clone-3d484",
//   storageBucket: "slack-clone-3d484.appspot.com",
//   messagingSenderId: "336886649506",
//   appId: "1:336886649506:web:452210b79aeff4f101bdfb",
// };
const firebaseConfig = {
  apiKey: "AIzaSyCejc5ZXWp1ZLtnezz67hS7T-ezkh2g3UE",
  authDomain: "panchat-45c44.firebaseapp.com",
  projectId: "panchat-45c44",
  storageBucket: "panchat-45c44.appspot.com",
  messagingSenderId: "217747929566",
  appId: "1:217747929566:web:47b3fe664512c35271c54f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
const provider = new GoogleAuthProvider();
export default provider;
