import { createSlice } from '@reduxjs/toolkit'

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categories: [],
    },
    reducers: {
        setCategories(state, action){
            state.categories = action.payload;
        }
    },
})


export const getCategoryState = (state) =>state.category;
export const {setCategories } = categorySlice.actions;
export default categorySlice.reducer;