import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { addToCart } from '../redux/cart/CartActions';
import { addToFavorites } from '../redux/favorites/FavoritesActions';
import { isResultsPage } from '../redux/filters/FiltersActions';
import Filters from '../components/Filters';
import ProductList from '../components/ProductList';

class SearchResultsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.props.isResultsPage({isResultsPage: true});
    }

    render() {
        let products = this.props.foundProducts;

            return (
                <Layout>
                        {products.length
                        ?
                            <div className="container-fluid container-min-max-width">
                                <h2>Found Products:</h2>
                                    <div className="d-flex flex-column align-items-center">
                                        <Filters />
                                    </div>
                                <div className="row my-4">
                                {
                                this.props.checkFilters.filter1IsChecked
                                ?
                                <ProductList products={this.props.filteredProducts1} />
                                    : this.props.checkFilters.filter2IsChecked
                                    ?
                                    <ProductList products={this.props.filteredProducts2} />
                                        : this.props.checkFilters.filter3IsChecked
                                        ?
                                        <ProductList products={this.props.filteredProducts3} />
                                        :
                                        <ProductList products={this.props.foundProducts} />
                                }
                                </div>
                            </div>
                        :
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="d-flex flex-column align-items-center">
                                <p className="h3">No products found.</p>
                                <Link to="/"><button className="btn btn-outline-dark fw-bold">Back to Home</button></Link>
                            </div>
                        </div>
                        }
                </Layout>
            )
        }
    }

function mapStateToProps(state) {
    return {
        foundProducts: state.searchResult.foundProducts,
        filteredProducts1: state.filters.filteredProducts1,
        filteredProducts2: state.filters.filteredProducts2,
        filteredProducts3: state.filters.filteredProducts3,
        checkFilters: state.filters.checkFilters
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (product) => dispatch(addToCart(product)),
        addToFavorites: (product) => dispatch(addToFavorites(product)),
        isResultsPage: (payload) => dispatch(isResultsPage(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPage);
