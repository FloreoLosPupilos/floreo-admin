
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA6IfBOvTdWHXulFb6l0MufpZKASMl9_Es",
  authDomain: "proyecto-floreo.firebaseapp.com",
  projectId: "proyecto-floreo",
  storageBucket: "proyecto-floreo.appspot.com",
  messagingSenderId: "214939621324",
  appId: "1:214939621324:web:c0805bf00326385504af69"
};

export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB   = getFirestore(FirebaseApp);
export const storage = getStorage(FirebaseApp);
