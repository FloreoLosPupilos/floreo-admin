import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../auth';
import { carrouselSlice } from './carrousel';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    carrousel: carrouselSlice.reducer
  }
});