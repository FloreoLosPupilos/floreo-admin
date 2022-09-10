import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FirebaseAuth } from '../firebase/config';
import { onAuthStateChanged } from '@firebase/auth';

import { login, logout } from '../auth';
import { startLoadingImages } from '../store/carrusel';
import { startLoadingSection } from '../store/about';

export const useCheckAuth = () => {
  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async(user) => {
      if(!user) return dispatch(logout());
      
      const { displayName, email, uid } = user;
      dispatch( login({displayName, email, uid}) );
      dispatch( startLoadingImages() )
      dispatch( startLoadingSection() )
    });
  }, []);
  return status;
};