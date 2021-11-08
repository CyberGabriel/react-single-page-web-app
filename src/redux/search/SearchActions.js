import { UPDATE_SEARCH_RESULTS, UPDATE_SEARCH_TERM } from './SearchConstants';

export function updateSearchResults(payload) {
    return {
        type: UPDATE_SEARCH_RESULTS,
        payload
    }
}

export function updateSearchTerm(payload) {
    return {
        type: UPDATE_SEARCH_TERM,
        payload
    }
}