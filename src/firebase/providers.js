import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const { displayName, email, uid } =  result.user;
    return {
      ok: true,
      displayName, email, uid
    }
  } catch (error) {
    const errorMessage = error.message
    return {
      ok: false,
      error
    }
  }
}

export const loginEmailPassword = async({email, password}) => {
  try {
    const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    const { displayName, uid } =  resp.user;
    return {
      ok: true,
      displayName, email, uid
    }
  } catch (error) {
    const errorMessage = error.message
    return {
      ok: false,
      errorMessage
    }
  }
}