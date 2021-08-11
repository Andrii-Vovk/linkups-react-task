/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { PostAnswer } from "../../typings/PostAnswer";
import { PostPropsType } from "../../ui/components/Post/Post";
import { getAllPosts } from "../services/requests";
import ApiPostToPropsPost from "../utils/ApiPostToPropsPost";

interface PostsStoreState {
  status: "loaded" | "pending" | "error";
  posts: PostPropsType[];
  lastPage: boolean;
}

const initialState: PostsStoreState = {
  status: "pending",
  posts: [],
  lastPage: false
};

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  async (page: number = 1) => {
    const response = await getAllPosts(page);
    return {
      post: response?.map((item: PostAnswer) => ApiPostToPropsPost(item)),
    };
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload.posts;
    },
    addPost(state, action) {
      state.posts.push(action.payload);
    },
    concatPosts(state, action) {
      state.posts = state.posts.concat(action.payload);
    },
    removePost(state, action) {
      state.posts = state.posts.filter((item) => item.id !== action.payload);
    },
    setStateToPending(state) {
      state.status = "pending";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        if (action.payload && action.payload.post) {
          state.status = "loaded";
          if(action.payload.post.length === 0) {
            state.lastPage = true;
          }
          if (
            action.payload.post.length > 0 &&
            !state.posts.includes(action.payload.post[0])
          ) {
            state.posts = state.posts.concat(action.payload.post);
          }
        } else state.status = "error";
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const { setStateToPending, removePost, addPost } = postsSlice.actions;

export default postsSlice.reducer;
