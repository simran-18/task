import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice"; 
import usersReducer from "./slices/usersSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer, // Register the posts slice
    users:usersReducer   // Register the users slice
  },
});
export default store;