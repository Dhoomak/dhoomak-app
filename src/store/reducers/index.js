import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../../module/auth/reducers/auth-reducer';
import categoryReducer from '../../module/category/reducers/category-reducer';
import inventoryReducer from '../../module/inventory/reducers/inventory-reducer';
import subscriptionReducer from '../../module/home/reducers/subscription-reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    category: categoryReducer,
    inventory: inventoryReducer,
    subscription: subscriptionReducer,
})

export default rootReducer;