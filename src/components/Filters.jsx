import React from 'react'
import { connect } from 'react-redux';
import { updateFilteredProducts, updateCheckedFilter} from '../redux/filters/FiltersActions';
import './Filters.css';

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    toggleCheck = (filterNum) => {
        this.props.updateCheckedFilter({filterToToggle: filterNum})
    }

    render () {
            const products = this.props.isResultsPage ? this.props.foundProducts : this.props.categoryProducts;
            let filteredProducts1 = products.filter( product => product.price >= 0 && product.price < 100);
            let filteredProducts2 = products.filter( product => product.price >= 100 && product.price <= 250);
            let filteredProducts3 = products.filter( product => product.price >= 251);

            this.props.updateFilteredProducts({filteredProducts1, filteredProducts2, filteredProducts3})

        return (
            <div className="d-flex">
                <p className="my-0 me-1">Price: </p>
                { filteredProducts1.length > 0
                && <div>
                        <label htmlFor="filter1" className="filters mx-1">
                        <input type="checkbox" id="filter1" name="filter1" className="filters me-1" 
                        checked={this.props.checkFilters.filter1IsChecked}
                        onChange={() => this.toggleCheck("filter1IsChecked")}
                        />
                        Under 100 <span className="text-muted">({filteredProducts1.length})</span></label>
                    </div>
                }
                { filteredProducts2.length > 0
                && <div>
                        <label htmlFor="filter2" className="filters mx-1">
                        <input type="checkbox" id="filter2" name="filter2" className="filters mx-1" 
                        checked={this.props.checkFilters.filter2IsChecked} 
                        onChange={() => this.toggleCheck("filter2IsChecked")}
                        />
                        100 - 250 <span className="text-muted">({filteredProducts2.length})</span></label>
                    </div>
                }
                { filteredProducts3.length > 0
                && <div>
                        <label htmlFor="filter3" className="filters mx-1">
                        <input type="checkbox" id="filter3" name="filter3" className="filters mx-1"
                        checked={this.props.checkFilters.filter3IsChecked} 
                        onChange={() => this.toggleCheck("filter3IsChecked")}
                        />
                        Over 250 <span className="text-muted">({filteredProducts3.length})</span></label>
                    </div>
                }

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        categoryProducts: state.filters.categoryProducts,
        checkFilters: state.filters.checkFilters,
        isResultsPage: state.filters.isResultsPage,
        foundProducts: state.searchResult.foundProducts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateFilteredProducts: (payload) => dispatch(updateFilteredProducts(payload)),
        updateCheckedFilter: (payload) => dispatch(updateCheckedFilter(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
