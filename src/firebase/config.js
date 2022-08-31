
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDinKKbR-KmaMMyPEW9v4XBYLSoXlQqjBU",
  authDomain: "react-curso-7adc1.firebaseapp.com",
  projectId: "react-curso-7adc1",
  storageBucket: "react-curso-7adc1.appspot.com",
  messagingSenderId: "980160785250",
  appId: "1:980160785250:web:34ed963de0996d43505a3b"
};

export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB   = getFirestore(FirebaseApp);