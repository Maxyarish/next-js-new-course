 import { configureStore } from '@reduxjs/toolkit';
 import postReducer from "./postSlice";


const store = configureStore({
  reducer: {
    // auth: authReducer,
    post: postReducer,
  },
});

 export default store;