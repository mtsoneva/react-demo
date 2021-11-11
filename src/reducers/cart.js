const cartReducer = (state = [], action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default cartReducer;