/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AuthState {
    authToken: string | null;
}

const initialState: AuthState = {
    authToken: null
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken(state, {payload}: PayloadAction<string>) {
            state.authToken = payload;
        },
        destroyToken(state) {
            state.authToken = null;
        }
    }
})

export const {setToken, destroyToken} = authSlice.actions;

export default authSlice.reducer;

