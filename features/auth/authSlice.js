import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    localId: null,
    email: null,
    idToken: null,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value.localId = action.payload.localId;
      state.value.email = action.payload.email;
      state.value.idToken = action.payload.idToken;
    },
    clearUser: (state) => {
      state.value.localId = null;
      state.value.email = null;
      state.value.idToken = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
