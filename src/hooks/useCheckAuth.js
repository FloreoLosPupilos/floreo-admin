import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FirebaseAuth } from '../firebase/config';
import { onAuthStateChanged } from '@firebase/auth';

import { login, logout } from '../auth';
import { clearImagesLogout, startLoadingImages } from '../store/carrusel';
import { startLoadingSection } from '../store/about';
import { startLoadingCategories, startLoadingMembers, startLoadingServices, startLoadingSubscribers } from '../store/collections/thunks';

export const useCheckAuth = () => {
  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async(user) => {
      if(!user) {
        return dispatch(logout())
      }
      const { displayName, email, uid } = user;
      dispatch(login({ displayName, email, uid }));
      dispatch(startLoadingImages())
      dispatch(startLoadingSection())
      dispatch(startLoadingCategories())
      dispatch(startLoadingServices())
      dispatch(startLoadingMembers())
      dispatch(startLoadingSubscribers())
    });
  }, []);
  return status;
};