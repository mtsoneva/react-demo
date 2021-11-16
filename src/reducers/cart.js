const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload];
        case 'DELETE_ITEM':
            state = state.filter(item => item !== action.payload);
            return state;
        default:
            return state;
    }
}

export default cartReducer;