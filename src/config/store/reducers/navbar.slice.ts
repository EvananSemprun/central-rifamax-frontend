import { NavbarState } from "@interfaces/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: NavbarState = {
  navbar: 'Rifamax',
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setNavbar: (state, action: PayloadAction<NavbarState>) => {
      state.navbar = action.payload.navbar
    },
  },
});

export const { 
  setNavbar,
} = navbarSlice.actions;

export default navbarSlice.reducer;