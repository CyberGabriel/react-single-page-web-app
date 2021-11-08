import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, EMPTY_CART  } from "./CartConstants";

export function addToCart(payload) {
    return {
        type: ADD_TO_CART,
        payload
    }
}

export function removeFromCart(payload) {
    return {
        type: REMOVE_FROM_CART,
        payload
    }
}

export function increaseQuantity(payload) {
    return {
        type: INCREASE_QUANTITY,
        payload
    }
}

export function decreaseQuantity(payload) {
    return {
        type: DECREASE_QUANTITY,
        payload
    }
}

export function emptyCart(payload) {
    return {
        type: EMPTY_CART,
        payload
    }
}
