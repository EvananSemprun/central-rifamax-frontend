import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IntegratorState } from "@interfaces/index";

const initialState: IntegratorState = {
  player_id: 0,
  wallet_id: 0,
  currency: 'USD',
  balance: '0',
  data: {
    user: {
      username: '',
      name: '',
      lastname: '',
      email: '',
      status: false
    }
  }
};

export const integratorSlice = createSlice({
  name: "integrator",
  initialState,
  reducers: {
    addIntegrator: (state, action: PayloadAction<IntegratorState>) => {
      state.balance = action.payload.balance
      state.currency = action.payload.currency
      state.data.user = action.payload.data.user
      state.player_id = action.payload.player_id
      state.wallet_id = action.payload.wallet_id
    },
    deleteIntegrator: (state) => {
      state.balance = '0'
      state.currency = 'USD'
      state.data.user = {
        username: '',
        name: '',
        lastname: '',
        email: '',
        status: false
      }
      state.player_id = 0
      state.wallet_id = 0
    }
  },
});

export const { 
  addIntegrator,
  deleteIntegrator
} = integratorSlice.actions;

export default integratorSlice.reducer;