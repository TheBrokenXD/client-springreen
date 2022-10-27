import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuhmcQD5yNUKs5vVkssvz6ApJhYQYNfIo",
  authDomain: "springreen-7fd4d.firebaseapp.com",
  projectId: "springreen-7fd4d",
  storageBucket: "springreen-7fd4d.appspot.com",
  messagingSenderId: "62323581341",
  appId: "1:62323581341:web:6ea4db842087044f290f74"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export {app, auth, db}