const cartReducer = (state = [], action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default cartReducer;