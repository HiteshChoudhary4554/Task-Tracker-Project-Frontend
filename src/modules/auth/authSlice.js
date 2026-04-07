import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  authStatus: false,
  rawUser: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.authStatus = true;
    },
    logout: (state) => {      
      ((state.user = null), (state.authStatus = false));
    },
    rawData: (state, action) => {
      state.rawUser = action.payload;
    },
    rawNull: (state) => {
      state.rawUser = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, rawData, rawNull } = authSlice.actions;

export default authSlice.reducer;
