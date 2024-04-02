import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {

  apiKey: "AIzaSyAeJr0xW1vhaDGk-8fq8igxf9owmpuPJRo",

  authDomain: "book-list-with-firebase-30761.firebaseapp.com",

  projectId: "book-list-with-firebase-30761",

  storageBucket: "book-list-with-firebase-30761.appspot.com",

  messagingSenderId: "212605503512",

  appId: "1:212605503512:web:b106afdb8f7c103d7b5b6d"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
