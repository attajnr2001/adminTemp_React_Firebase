import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCzcnqROtyEmZa1NsQse2FncwW0jnSnkgg",
  authDomain: "adminapp-ec5ac.firebaseapp.com",
  projectId: "adminapp-ec5ac",
  storageBucket: "adminapp-ec5ac.appspot.com",
  messagingSenderId: "886325335775",
  appId: "1:886325335775:web:a009cdde19226f1a54fb6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);