import { createSlice } from '@reduxjs/toolkit'
import { verifyOtpAction } from '../thunks/auth-thunk';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        userData: {},
        authToken: '',
    },
    reducers: {
        logout(state) {
            state.isLoggedIn = false;
            state.userData = {};
            state.authToken = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(verifyOtpAction.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.userData = action.payload.existingUser;
                state.authToken = action.payload.authToken;
            })
    },
})

export const getAuthState = (state) => state.auth;
export const { logout } = authSlice.actions;
export default authSlice.reducer;