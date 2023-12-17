import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cart-slice';
import authReducer from '../../module/auth/reducers/auth-reducer';
import categoryReducer from '../../module/category/reducers/category-reducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer,
    category: categoryReducer,
})

export default rootReducer;