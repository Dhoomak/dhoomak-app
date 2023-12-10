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
        builder.addCase(sendOtpAction.fulfilled, (state, action) => {
            console.log("sendOtpAction fulfilled : ", action.payload);
        }),
            builder.addCase(verifyOtpAction.fulfilled, (state, action) => {
                console.log("verifyOtpAction fulfilled : ", action.payload);
                state.isLoggedIn = true;
                state.userData = action.payload.data;
            }),
            builder.addCase(verifyOtpAction.rejected, (state, action) => {
                console.log("verifyOtpAction rejected : ", action.payload);
            })
    },
})

export const getAuthState = (state) => state.auth;
export const { logout } = authSlice.actions;
export default authSlice.reducer;