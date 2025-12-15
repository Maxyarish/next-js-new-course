import { configureStore, createSelector } from "@reduxjs/toolkit";
 import postReducer from "./postSlice";
import { useDispatch,useSelector, type TypedUseSelectorHook } from 'react-redux';

const store = configureStore({
  reducer: {
    // auth: authReducer,
    post: postReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const createAppSelector = createSelector.withTypes<AppState>;

export default store;