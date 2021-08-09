/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ProfileType } from "../../ui/components/ProfileCard/ProfileCard";
import { getMyProfile } from "../services/requests";
import ApiProfieToPropsProfile from "../utils/ApiPorfileToPropsProfile";

interface ProfileStoreState {
    status: 'loaded' | 'pending' | 'error';
    profile?: ProfileType;
}

const initialState: ProfileStoreState = {
    status: 'pending',
}

export const fetchProfile = createAsyncThunk('profile/fetchProfile', async (token: string) => {
    const response = await getMyProfile(token);
    return ApiProfieToPropsProfile(response, 'Homepage');
  })

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        updateProfile(state, action) {
            state.profile = action.payload.profile;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProfile.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchProfile.fulfilled, (state, action) => {
                state.status = 'loaded';
                state.profile = action.payload.profile;
            })
            .addCase(fetchProfile.rejected, (state) => {
                state.status = 'error';
            })
    }
})

export const {
    updateProfile
} = profileSlice.actions;

export default profileSlice.reducer;