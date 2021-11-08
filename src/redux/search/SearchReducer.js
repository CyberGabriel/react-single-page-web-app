const initialState = {
    foundProducts: [],
    searchTerm: ""
};

export function searchReducer(state = initialState, action) {
    switch (action.type) {

        case 'UPDATE_SEARCH_RESULTS':
            return Object.assign({}, state, action.payload);

        case 'UPDATE_SEARCH_TERM':
            return Object.assign({}, state, action.payload);

        default:
            return state
    }
}