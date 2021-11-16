export const addToCart = (payload) => {
    return {
        type: 'ADD_TO_CART',
        payload: payload
    }
}

// TODO implement
export const changeQuantity = (payload) => {
    return {
        type: 'CHANGE_QUANTITY',
        payload: payload
    }
}

export const deleteItem = (payload) => {
    return {
        type: 'DELETE_ITEM',
        payload: payload
    }
}