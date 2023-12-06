import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        userData: {},
        accessToken: '',
    },
    reducers: {
        loginSucess(state, action) {
            state.isLoggedIn = true;
            state.userData = { name: 'jivesh', accessToken: 'qhj23j4kh112hkjljsazoj', };
        },
    },
})


export const getAuthState = (state) => state.auth;
export const { loginSucess, } = authSlice.actions;
export default authSlice.reducer;