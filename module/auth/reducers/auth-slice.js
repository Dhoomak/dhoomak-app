import { createSlice } from '@reduxjs/toolkit'
import { sendOtpAction, verifyOtpAction } from '../thunks/auth-thunk';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        userData: {}
    },
    reducers: {
        logout(state) {
            state.isLoggedIn = false;
            state.userData = {};
        },
    },
    extraReducers: (builder) => {
        builder.
            addCase(sendOtpAction.fulfilled, (state, action) => { })
            .addCase(verifyOtpAction.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.userData = action.payload.data;
            })
            .addCase(verifyOtpAction.rejected, (state, action) => { })
    },
})

export const getAuthState = (state) => state.auth;
export const { logout } = authSlice.actions;
export default authSlice.reducer;