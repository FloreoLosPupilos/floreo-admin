import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../auth';
import { aboutSlice } from './about';
import { carruselSlice } from './carrusel';
import { collectionSlice } from './collections/collectionSlice';
import { validEmailSlice } from './validEmails/validEmails';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    carrusel: carruselSlice.reducer,
    section: aboutSlice.reducer,
    validEmail: validEmailSlice.reducer,
    collections: collectionSlice.reducer
  }
});