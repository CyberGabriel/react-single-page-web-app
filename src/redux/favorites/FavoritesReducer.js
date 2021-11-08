const initialState = {
    products: []
}

export function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_FAVORITES':
            let productInFavorites = false;
            const updatedProducts = state.products.map(product => {
                if (product.id === action.payload.product.id) {
                    productInFavorites = true;
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                } else {
                    return product;
                }
            })

            if (!productInFavorites) {
                return Object.assign({}, state, {
                    products: [
                        ...state.products,
                        {
                            ...action.payload.product,
                            quantity: 1
                        }
                    ]
                })
            } else {
                return Object.assign({}, state, {
                    products: updatedProducts
                });
            }
        case 'REMOVE_FROM_FAVORITES':
            const filteredProducts = state.products.filter(product => {
                return product.id !== action.payload.id
            });

            return Object.assign({}, state, {
                products: filteredProducts
            });

        case 'CLEAR_FAVORITES':
            return Object.assign({}, state, {
                products: []
            });

        default:
            return state;
    }
}