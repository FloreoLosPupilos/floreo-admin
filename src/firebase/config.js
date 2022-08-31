// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6IfBOvTdWHXulFb6l0MufpZKASMl9_Es",
  authDomain: "proyecto-floreo.firebaseapp.com",
  projectId: "proyecto-floreo",
  storageBucket: "proyecto-floreo.appspot.com",
  messagingSenderId: "214939621324",
  appId: "1:214939621324:web:c0805bf00326385504af69"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);   // es para realizar la autenticacion
export const FirebaseDB = getFirestore(FirebaseApp); //base de datos