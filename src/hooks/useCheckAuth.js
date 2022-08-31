import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FirebaseAuth } from '../firebase/config';
import { onAuthStateChanged } from '@firebase/auth';
import { login, logout } from '../auth';

export const useCheckAuth = () => {
  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async(user) => {
      if(!user) return dispatch(logout());
      const { displayName, email, uid } = user;
      dispatch(login({displayName, email, uid}));
    });
  });
  return status;
};