/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { PostAnswer } from "../../typings/PostAnswer";
import { PostPropsType } from "../../ui/components/Post/Post";
import { getAllPosts } from "../services/requests";
import ApiPostToPropsPost from "../utils/ApiPostToPropsPost";

interface PostsStoreState {
  status: "loaded" | "pending" | "error";
  posts: PostPropsType[];
}

const initialState: PostsStoreState = {
  status: "pending",
  posts: [],
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await getAllPosts();
  return {
    post: response?.map((item: PostAnswer) => ApiPostToPropsPost(item)),
  };
});


const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload.posts;
    },
    addPost(state, action) {
      state.posts.push(action.payload.post);
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
          state.posts = action.payload.post;
        } else state.status = "error";
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = "error";
      });
  },
});

export default postsSlice.reducer;
