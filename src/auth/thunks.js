import { loginEmailPassword, signInWithGoogle } from "../firebase/providers";
import { checkingCredentials } from "./";
import { login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async(dispatch) => {
    dispatch(checkingCredentials());
  }
}

export const startGoogleSignIn = () => {
  return async(dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    console.log(result);
  }
}

export const startLoginWithEmailPassword = ({email, password}) => {
 return async(dispatch) => {
   dispatch(checkingCredentials());
   const resp = await loginEmailPassword({email, password});
   if(!resp.ok) return dispatch(logout(resp.errorMessage));
   dispatch(login(resp));
 }
}