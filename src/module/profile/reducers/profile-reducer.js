import { createSlice } from '@reduxjs/toolkit'
import { getProfileDetailsAction } from '../thunks/profile-thunks';

const initialState = {
    profileData: {},
    profileLoading: false,
    profileError: '',
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        resetProfile(state, action) {
            return initialState;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getProfileDetailsAction.fulfilled, (state, action) => {
                state.profileData = action.payload;
                state.profileLoading = false;
                state.profileError = '';
            })
            .addCase(getProfileDetailsAction.pending, (state, action) => {
                state.profileData = {};
                state.profileLoading = true;
                state.profileError = '';

            })
            .addCase(getProfileDetailsAction.rejected, (state, action) => {
                state.profileData = {};
                state.profileLoading = false;
                state.profileError = action?.payload.errorMessage;
            })
    },
})

export const getProfileState = (state) => state.profile;

export const {
    resetInventory,
} = profileSlice.actions;

export default profileSlice.reducer;