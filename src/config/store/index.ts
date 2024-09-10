import userReducer from "./reducers/user.slice";
import confettiReducer from "./reducers/confetti.slice";
import integratorReducer from "./reducers/integrator.slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    user: userReducer,
    confetti: confettiReducer,
    integrator: integratorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
