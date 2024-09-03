import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TokenState, TrustState, UserState } from "@interfaces/index";

const initialState: UserState & TokenState & TrustState = {
  user: null,
  token: localStorage.getItem("token"),
  trustInDevice: Boolean(localStorage.getItem("trusted")),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    trustInDevice: (state, action: PayloadAction<boolean>) => {
      state.user !== null && (state.trustInDevice = action.payload);
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    setUser: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload.user;
    },
    setPfp: (state, action: PayloadAction<string | null>) => {
      if (state.user) {
        state.user.avatar = action.payload
      }
    },
    clearUser: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("trust");
      state.user = null;
      state.token = null;
      state.trustInDevice = false;
    },
  },
});

export const { 
  trustInDevice, 
  setUser, 
  clearUser, 
  setToken,
  setPfp
} = userSlice.actions;

export default userSlice.reducer;