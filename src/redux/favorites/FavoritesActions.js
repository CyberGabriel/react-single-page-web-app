import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, CLEAR_FAVORITES } from './FavoritesConstants';

export function addToFavorites(payload) {
    return {
        type: ADD_TO_FAVORITES,
        payload
    }
}

export function removeFromFavorites(payload) {
    return {
        type: REMOVE_FROM_FAVORITES,
        payload
    }
}

export function clearFavorites(payload) {
    return {
        type: CLEAR_FAVORITES,
        payload
    }
}