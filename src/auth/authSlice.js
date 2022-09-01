import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated',
    email: null,
    uid: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status      = 'authenticated';
      state.email       = payload.email,
      state.uid         = payload.uid
    },
    logout: (state) => {
      state.status = 'not-authenticated';
      state.email       = null,
      state.uid         = null
    },
    checkingCredentials: (state) => {
      state.status = 'checking';
    }
  }
});

export const { login, logout, checkingCredentials } = authSlice.actions;