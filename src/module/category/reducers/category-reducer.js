import { createSlice } from '@reduxjs/toolkit'
import { getCategoryListAction } from '../thunks/category-thunk';

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categories: [],
        products: [],
        productIds: [],
    },
    reducers: {
        // logout(state, action) {
        // state.isLoggedIn = false;
        // state.userData = {};
        // state.authToken = '';
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategoryListAction.fulfilled, (state, action) => {
                state.categories = action.payload;
            })
    },
})

export const getCategoryState = (state) => state.category;
export const { } = categorySlice.actions;
export default categorySlice.reducer;