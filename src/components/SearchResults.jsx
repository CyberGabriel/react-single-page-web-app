import React from 'react';
import products from '../utils/products.json';
import { connect } from 'react-redux';
import { updateSearchResults} from '../redux/search/SearchActions';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidUpdate() {
        let searchTerm = this.props.searchTerm.trim().toLowerCase();
        if (searchTerm.length > 2) {
            const categories = Object.keys(products);
            const items = categories.map(item => products[item].items);
            let result = [];
                for(let i=0; i < items.length; i++) { 
                    let tResult = items[i].filter(obj => Object.values(obj).toString().includes(searchTerm));
                    if(tResult) {
                        result.push.apply(result, tResult);
                    } else return;
            };
            this.props.updateSearchResults({foundProducts: result});
        } else return; 
    }
    
   render() {
    return null;
   }
}

function mapStateToProps(state) {
    return {
        searchTerm: state.searchResult.searchTerm
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateSearchResults: (payload) => dispatch(updateSearchResults(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);


