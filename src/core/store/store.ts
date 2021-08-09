import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import postPopUpReducer from "./postPopUpSlice";
import postsReducer from "./postsSlice"
import profileReducer from "./profileSlice";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    posts: postsReducer,
    popUp: postPopUpReducer,
    auth: authReducer
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
