import { createSlice } from '@reduxjs/toolkit'
import { getCategoryListAction, getProductsListAction } from '../thunks/category-thunk';

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categories: [],
        categoriesLoading: false,
        categoriesError: '',
        products: [],
        productsLoading: false,
        productsError: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategoryListAction.fulfilled, (state, action) => {
                state.categories = action.payload.categories;
                state.categoriesLoading = false;
                state.categoriesError = '';
            })
            .addCase(getCategoryListAction.pending, (state, action) => {
                state.categories = [];
                state.categoriesLoading = true;
                state.categoriesError = '';
            })
            .addCase(getCategoryListAction.rejected, (state, action) => {
                state.categories = [];
                state.categoriesLoading = false;
                state.categoriesError = '';
            })
            .addCase(getProductsListAction.fulfilled, (state, action) => {
                state.products = action.payload.products;
                state.productsLoading = false;
                state.productsError = '';
            })
    },
})

export const getCategoryState = (state) => state.category;
export const { } = categorySlice.actions;
export default categorySlice.reducer;