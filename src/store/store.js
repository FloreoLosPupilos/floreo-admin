import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../auth';
import { aboutSlice } from './about';
import { carruselSlice } from './carrusel';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    carrusel: carruselSlice.reducer,
    section: aboutSlice.reducer,
  }
});