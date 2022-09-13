import { createSlice } from "@reduxjs/toolkit";

export const validEmailSlice = createSlice({
  name: 'validEmails',
  initialState: {
    uid: null
  },
  reducers: {
    setValidEmails: (state, { payload }) => {
      state.uid = payload[0].uid;
    },
  }
});

export const { setValidEmails } = validEmailSlice.actions;