/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PostPropsType } from "../../ui/components/Post/Post";
import { CommentProps } from "../../ui/components/common/comment/PostComment";
import { postComment } from "../services/requests";

import { RootState } from "./store";

interface PopUpInitialState {
  error: string | null;
  status: "opened" | "closed";
  post: PostPropsType | null;
}

const initialState: PopUpInitialState = {
  status: "closed",
  post: null,
  error: null,
};

export const addComment = createAsyncThunk(
  "postPopUp/addComment",

  async (comment: string, { getState, rejectWithValue }) => {
    const state = getState() as RootState;

    if (state.popUp.post && state.auth.authToken) {
      const res = await postComment(
        comment,
        state.popUp.post?.id,
        state.auth.authToken
      );

      if (res === false) {
        return rejectWithValue("Something went wrong while posting the comment")
      }

      return res;
    }
    return rejectWithValue('Not Authorized');
  }
);

export interface ResendType {
  id: number;
  text: string;
}

export const resendComment = createAsyncThunk(
  "postPopUp/resendComment",

  async (comment: ResendType, { dispatch }) => {
    dispatch(removeCommentById(comment.id));
    dispatch(addComment(comment.text));
  }
);

const postPopUpSlice = createSlice({
  name: "postPopUp",
  initialState,
  reducers: {
    changePopUp(state, { payload }: PayloadAction<PostPropsType>) {
      state.post = payload;
    },
    changeStatus(state) {
      state.status = state.status === "closed" ? "opened" : "closed";
    },
    changeComments(state, action) {
      if (state.post) {
        state.post.comments = action.payload;
      }
    },
    pushComment(state, action) {
      state.post?.comments?.push(action.payload);
    },
    changeLastComment(state, action) {
      if (
        state.post &&
        state.post?.comments &&
        state.post?.comments?.length > 0
      ) {
        state.post.comments[state.post.comments?.length - 1].isPending =
          action.payload.isPending;
        state.post.comments[state.post.comments?.length - 1].isError =
          action.payload.isError;
      }
    },
    removeCommentById(state, action) {
      if (
        state.post &&
        state.post.comments &&
        state.post.comments?.length > 0
      ) {
        state.post.comments = state.post.comments.filter((item) => {
          return item.id !== action.payload;
        });
      }
    },
    clearPopUpError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addComment.pending, (state, action) => {
        const newComment: CommentProps = {
          id: state.post?.comments
            ? state.post?.comments[state.post?.comments.length - 1].id + 1
            : 0,
          time: new Date(),
          text: action.meta.arg,
          likes: 0,
          isLiked: false,
          isPending: true,
          isError: false,
        };

        if (state.post && !state.post?.comments) {
          state.post.comments = [];
          state.post.comments.push(newComment);
        } else {
          state.post?.comments?.push(newComment);
        }
      })
      .addCase(addComment.fulfilled, (state) => {
        if (
          state.post &&
          state.post?.comments &&
          state.post?.comments?.length > 0
        ) {
          state.post.comments[state.post.comments?.length - 1].isPending =
            false;
          state.post.comments[state.post.comments?.length - 1].isError = false;
        }
      })
      .addCase(addComment.rejected, (state, action) => {
        if (
          state.post &&
          state.post?.comments &&
          state.post?.comments?.length > 0
        ) {
          state.post.comments[state.post.comments?.length - 1].isPending =
            false;
          state.post.comments[state.post.comments?.length - 1].isError = true;
        }

        if (action.payload) {
          state.error = action.payload as string;
        }
      });
  },
});

export const {
  changePopUp,
  changeStatus,
  changeComments,
  pushComment,
  changeLastComment,
  removeCommentById,
  clearPopUpError,
} = postPopUpSlice.actions;

export default postPopUpSlice.reducer;
