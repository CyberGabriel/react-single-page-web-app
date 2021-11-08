import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Register from './pages/Register';
import Page404 from './pages/Page404';
import Category from './pages/Category';
import TermsAndConditions from './pages/TermsAndConditions';
import Cart from './pages/Cart';
import './utils/utility-classes.css';
import Product from './pages/Product';
import FavoriteProducts from './pages/FavoriteProducts';
import SearchResultsPage from './pages/SearchResultsPage';

function App () {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/termsandconditions" component={TermsAndConditions} />
          <Route path="/register" component={Register} />
          <Route path="/category/:categoryName" component={Category} />
          <Route path="/product/:productId" component={Product} />
          <Route path="/favorites" component={FavoriteProducts} />
          <Route path="/search-results" component={SearchResultsPage} />

          <Route path="*" component={Page404} />
        </Switch>
      </div>
    );
  }

export default App;
