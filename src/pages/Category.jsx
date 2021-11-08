import React, { Component } from 'react';
import Layout from '../components/Layout';
import products from '../utils/products.json';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';
import { connect } from 'react-redux';
import { updateCategoryProducts, resetCheckedFilters, isResultsPage } from '../redux/filters/FiltersActions';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: {},
            items: []
        }
    }

    componentDidMount() {
        const { match } = this.props;
        const categoryName = match.params.categoryName;
        this.setState({
            category: products[categoryName],
            items: products[categoryName].items
        });
        this.props.updateCategoryProducts({categoryProducts: products[categoryName].items})
        this.props.isResultsPage({isResultsPage: false});
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.categoryName !== this.props.match.params.categoryName) {
            this.props.resetCheckedFilters();
        }
        if (this.props !== prevProps) {
            const { match } = this.props;
            const categoryName = match.params.categoryName;
            this.setState({
                category: products[categoryName],
                items: products[categoryName].items
            });
            this.props.updateCategoryProducts({categoryProducts: products[categoryName].items})
        } else return;
        
    }

    render() {
        return (
            <Layout>
                <div className="container-fluid container-min-max-width">
                    <h2>{ this.state.category.name }</h2>
                    <div className="d-flex flex-column align-items-center">
                        <Filters />
                    </div>
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
                                <ProductList products={this.state.items} />
                    }
                </div>
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return {
        filteredProducts1: state.filters.filteredProducts1,
        filteredProducts2: state.filters.filteredProducts2,
        filteredProducts3: state.filters.filteredProducts3,
        checkFilters: state.filters.checkFilters
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateCategoryProducts: (payload) => dispatch(updateCategoryProducts(payload)),
        resetCheckedFilters: (payload) => dispatch(resetCheckedFilters(payload)),
        isResultsPage: (payload) => dispatch(isResultsPage(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);