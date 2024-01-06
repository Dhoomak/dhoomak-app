import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        totalCartItems: 0,
        showProductCartTab: false,
    },
    reducers: {
        addToCart(state, action) {
            state.cartItems = [...state.cartItems, action.payload];
            updateCommonState(state);
        },
        removeFromCart(state, action) {
            state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload);
            updateCommonState(state);
        },
    },
})

function updateCommonState(state) {
    state.totalCartItems = state.cartItems.length;
    state.showProductCartTab = state.cartItems.length > 0 ? true : false;
}

export const getCartState = (state) => state.cart;
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;