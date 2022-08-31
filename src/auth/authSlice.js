import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated',
    errorMessage: ''
  },
  reducers: {
    login: (state, action) => {
      state.status = 'autenticated';
    },
    logout: (state, payload) => {
      state.status = 'not-authenticated';
    },
    checkingCredentials: (state) => {
      state.status = 'checking';
    }
  }
});

export const { login, logout, checkingCredentials } = authSlice.actions;