import cartReducer from "./cart";
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    cart: cartReducer
})

export default allReducers;