import { ConfettiState } from "@interfaces/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ConfettiState = {
  isRunning: false,
};

export const confettiSlice = createSlice({
  name: "confetti",
  initialState,
  reducers: {
    setConfetti: (state, action: PayloadAction<ConfettiState>) => {
      state.isRunning = action.payload.isRunning;
    },
  },
});

export const { 
  setConfetti,
} = confettiSlice.actions;

export default confettiSlice.reducer;