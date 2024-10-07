// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";





const firebaseConfig = {
  apiKey: "AIzaSyBj_yekxpr5umY4FYhXGRi6kAuiOCUtGSU",
  authDomain: "reactchat-275ee.firebaseapp.com",
  projectId: "reactchat-275ee",
  storageBucket: "reactchat-275ee.appspot.com",
  messagingSenderId: "108701523174",
  appId: "1:108701523174:web:fd6fb39fd1060722c4ef27"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app); 
export const db = getFirestore(app); 
export const storage = getStorage(app); 