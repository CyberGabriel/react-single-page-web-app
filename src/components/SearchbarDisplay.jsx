import React from 'react';
import { Link } from 'react-router-dom';
import './Searchbar.css';
import products from '../utils/products.json';
import { connect } from 'react-redux';
import { updateSearchTerm, updateSearchResults } from '../redux/search/SearchActions';
import OutsideClickHandler from './OutsideClickHandler';

function SearchbarDisplay(props) {
                 
    let searchTerm = props.searchTerm.trim().toLowerCase();
    let result = [];
   
        if (searchTerm.length > 2)
        {
            const categories = Object.keys(products);
            const items = categories.map(item => products[item].items);
                for(let i=0; i < items.length; i++) { 
                    let tResult = items[i].filter(obj => Object.values(obj).toString().toLowerCase().includes(searchTerm));
                    if(tResult) {
                        result.push.apply(result, tResult);
                    } else return;
            };
            props.updateSearchResults({foundProducts: result});
        } 
    
    return (
        
        <div className="searchbarDisplay">
            <input className="m-0 p-0"
                id="searchBar"
                type="text"
                placeholder="search..."
                onChange={ (event) => props.updateSearchTerm({searchTerm: event.target.value}) }
                onFocus={ (event) => props.updateSearchTerm({searchTerm: event.target.value}) }
            />
                {result.length
                ?
                <OutsideClickHandler
                    onOutsideClick={() => {
                        props.updateSearchTerm({searchTerm: ""})
                    }}
                >
                <div className="searchResultsDrop m-0 p-0">
                    {result.slice(0, 3).map(product => {
                        return (
                            <Link to={`/product/${product.id}`} className="favLink text-decoration-none" key={product.id}
                                onClick={() => {
                                    props.updateSearchTerm({searchTerm: ""})
                                }}
                            >
                            <div className="dropLink d-flex justify-content-between border-bottom m-2">
                                <img src={product.image} alt={product.name} className="mb-2"/>
                                <div className="d-flex flex-column justify-content-center">
                                    <p className="mb-1 text-center">{ product.name }</p>
                                    <p className="text-center fw-bold text-danger">{ product.price}  { product.currency }</p>
                                </div>
                            </div>
                            </Link>
                        )
                    })}
                    {result.length > 2
                    ?
                        <div>
                            <Link to={'/search-results'} className="d-flex justify-content-center text-decoration-none m-2"
                                onClick={() => {
                                    props.updateSearchTerm({searchTerm: ""})
                                }}
                            >
                                <div className="dropLink fw-bold">
                                    See all results
                                </div>
                            </Link>
                        </div>
                    : null
                    }
                </div>
                </OutsideClickHandler>
                :   searchTerm && searchTerm.length > 2 ?
                    <OutsideClickHandler
                        onOutsideClick={() => {
                            props.updateSearchTerm({searchTerm: ""})
                        }}
                    >
                        <div className="searchResultsDrop m-0 p-0">
                            <div className="d-flex justify-content-between border-bottom m-2">
                                <p className="mb-1 text-center">No products found</p>
                            </div>
                        </div>
                    </OutsideClickHandler>
                    : null
                }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        searchTerm: state.searchResult.searchTerm
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateSearchResults: (payload) => dispatch(updateSearchResults(payload)),
        updateSearchTerm: (payload) => dispatch(updateSearchTerm(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchbarDisplay);
