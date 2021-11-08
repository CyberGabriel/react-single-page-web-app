import { UPDATE_FILTERED_PRODUCTS, UPDATE_CATEGORY_PRODUCTS, UPDATE_CHECKED_FILTER, RESET_CHECKED_FILTERS, IS_RESULTS_PAGE } from './FiltersConstants'

export function updateFilteredProducts(payload) {
    return {
        type: UPDATE_FILTERED_PRODUCTS,
        payload
    }
}

export function updateCategoryProducts(payload) {
    return {
        type: UPDATE_CATEGORY_PRODUCTS,
        payload
    }
}

export function updateCheckedFilter(payload) {
    return {
        type: UPDATE_CHECKED_FILTER,
        payload
    }
}

export function resetCheckedFilters(payload) {
    return {
        type: RESET_CHECKED_FILTERS,
        payload
    }
}

export function isResultsPage(payload) {
    return {
        type: IS_RESULTS_PAGE,
        payload
    }
}
