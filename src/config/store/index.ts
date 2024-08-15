import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user.slice";
import confettiReducer from "./reducers/confetti.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    confetti: confettiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
