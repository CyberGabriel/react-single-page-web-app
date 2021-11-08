const initialState = {
    isResultsPage: false,
    categoryProducts: [],
    filteredProducts1: [],
    filteredProducts2: [],
    filteredProducts3: [],
    checkFilters: {
        filter1IsChecked: false,
        filter2IsChecked: false,
        filter3IsChecked: false
    }
};

export function filtersReducer(state = initialState, action) {
    switch (action.type) {

        case 'UPDATE_FILTERED_PRODUCTS':
            return Object.assign({}, state, action.payload);

        case 'UPDATE_CATEGORY_PRODUCTS':
            return Object.assign({}, state, action.payload);

        case 'UPDATE_CHECKED_FILTER':
            let updateCheckFilters = Object.assign({}, state.checkFilters);
            
            for (let filter in updateCheckFilters) {
                if (filter === action.payload.filterToToggle) {
                  updateCheckFilters[filter] = !updateCheckFilters[filter]
                }
                else updateCheckFilters[filter] = false
              }
            return Object.assign({}, state, {checkFilters : updateCheckFilters});

        case 'RESET_CHECKED_FILTERS':
            let allFiltersFalse = {
                filter1IsChecked: false,
                filter2IsChecked: false,
                filter3IsChecked: false}
                return Object.assign({}, state, {checkFilters: allFiltersFalse});
        case 'IS_RESULTS_PAGE':
            return Object.assign({}, state, action.payload);

        default:
            return state
    }
}