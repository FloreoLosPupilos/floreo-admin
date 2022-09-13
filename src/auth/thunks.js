import { loginEmailPassword, logoutFirebase, signInWithGoogle,  } from '../firebase/providers';
import { clearImagesLogout } from '../store/carrusel';
import { checkingCredentials } from './';
import { login, logout } from './authSlice';

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  }
}

export const startGoogleSignIn = () => {
  return async (dispatch, getState) => {
    dispatch(checkingCredentials());
    const validEmailUid = getState().validEmail.uid
    const result = await signInWithGoogle();
    if (validEmailUid !== result.uid) {
      result.errorMessage = 'Correo electrónico no autorizado'
      result.ok = false;
      await logoutFirebase();
    }

    if (!result.ok) return dispatch(logout({ errorMessage: result.errorMessage }));

  }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const resp = await loginEmailPassword({ email, password });
    if (!resp.ok) return dispatch(logout(resp.errorMessage));
    dispatch(login(resp));
  }
}

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(clearImagesLogout());
    dispatch(logout({}));
  }
}