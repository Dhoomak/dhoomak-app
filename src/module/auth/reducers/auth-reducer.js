import { createSlice } from '@reduxjs/toolkit'
import { logoutAction, verifyOtpAction } from '../thunks/auth-thunk';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        userData: {},
        authToken: '',
    },
    reducers: {
        // logout(state) {
        //     state.isLoggedIn = false;
        //     state.userData = {};
        //     state.authToken = '';
        // },
        setUserData(state, action) {
            console.log("INSIDE SET USER DATA:", action.payload);
            state.userData = action.payload;
        },
        setAuthToken(state, action) {
            console.log("INSIDE SET USER AUTH:", action.payload);
            state.authToken = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(verifyOtpAction.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.userData = action.payload.existingUser;
                state.authToken = action.payload.authToken;
            })
            .addCase(logoutAction.fulfilled, (state, action) => {
                state.isLoggedIn = false;
                state.userData = {};
                state.authToken = '';
            })
            .addCase(logoutAction.rejected, (state, action) => {
                state.isLoggedIn = false;
                state.userData = {};
                state.authToken = '';
            })
    },
})

export const getAuthState = (state) => state.auth;
export const { setCreds, setUserData, setAuthToken } = authSlice.actions;
export default authSlice.reducer;