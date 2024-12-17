// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnNC2vJYmU90N_JqxPoGyyH6j7A7-VSh0",
    authDomain: "humstudios-6530e.firebaseapp.com",
    projectId: "humstudios-6530e",
    storageBucket: "humstudios-6530e.firebasestorage.app",
    messagingSenderId: "409250808929",
    appId: "1:409250808929:web:23538220eff444d6545620",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;