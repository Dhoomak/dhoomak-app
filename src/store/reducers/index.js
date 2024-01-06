import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cart-slice';
import authReducer from '../../module/auth/reducers/auth-slice';

const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer,
})

export default rootReducer;