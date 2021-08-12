import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authReducer from "./authSlice";
import postPopUpReducer from "./postPopUpSlice";
import postsReducer from "./postsSlice"
import profileReducer from "./profileSlice";
import usersReducer from "./usersSlice";
import errorReducer from "./errorSlice";

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}

const rootReducer = combineReducers({
  profile: profileReducer,
  posts: postsReducer,
  popUp: postPopUpReducer,
  auth: authReducer,
  users: usersReducer,
  error: errorReducer,
})

 const persistRootReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistRootReducer,
});

export const persistor = persistStore(store)
export default store;


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
