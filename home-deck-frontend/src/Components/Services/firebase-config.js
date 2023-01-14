import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBkoWX7mOp-DJ1BYhz4zGUK-_2tb6yDRuU",
    authDomain: "home-deck-sumy.firebaseapp.com",
    projectId: "home-deck-sumy",
    storageBucket: "home-deck-sumy.appspot.com",
    messagingSenderId: "271582040271",
    appId: "1:271582040271:web:4a1c10b730a94e965f27ba",
    measurementId: "G-D0465932Z4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage }
