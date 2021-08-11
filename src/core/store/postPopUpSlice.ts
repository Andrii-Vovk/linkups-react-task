/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PostPropsType } from "../../ui/components/Post/Post";

interface PopUpInitialState {
  status: "opened" | "closed";
  post: PostPropsType | null;
}

const initialState: PopUpInitialState = {
  status: "closed",
  post: null,
};

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
  },
});

export const { changePopUp, changeStatus, changeComments } = postPopUpSlice.actions;

export default postPopUpSlice.reducer;
