import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cartReducer } from './cart/CartReducer';
import { userReducer } from './user/UserReducer';
import { searchReducer } from './search/SearchReducer';
import { favoritesReducer } from './favorites/FavoritesReducer';
import { filtersReducer } from './filters/FiltersReducer';
import { notificationsReducer } from './notifications/NotificationsReducer';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
    searchResult: searchReducer,
    filters: filtersReducer,
    notifications: notificationsReducer
});

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;