import React from 'react'
import './ProductItem.css';
import { connect } from 'react-redux';
import { addToCart } from '../redux/cart/CartActions';
import { addToFavorites } from '../redux/favorites/FavoritesActions';
import { Link } from 'react-router-dom';
import Notifications from './Notifications';
import handleNotifications from './HandleNotifications';


function ProductItem(props) {

    const {name, price, currency, image, id} = props;

    return (
        <div className="product-item col-md-4 col-sm-6 col-xs-12 mb-3 d-flex flex-column align-items-center">
        <Notifications />
           <Link to={`/product/${id}`} className="productLink d-flex flex-column align-items-center text-decoration-none">
                <img src={image} alt={name} className="mb-2"/>
                <p className="mb-1 text-center">{ name }</p>
                <p className="text-center fw-bold text-danger">{ price } { currency }</p>
           </Link>
           <button
                className="btn btn-outline-dark fw-bold"
                onClick={() =>  { props.addToCart({
                    product: {
                        id,
                        name,
                        price,
                        currency,
                        image
                    }
                });
                handleNotifications({message: "Product added to cart!", type: "addProduct"});
                }
            }
            >
                Add to Cart
            </button>
            <button
                className="btn btn-outline-dark m-2 fw-bold"
                onClick={() => { props.addToFavorites({
                    product: {
                        id,
                        name,
                        price,
                        currency,
                        image
                    }
                });
                handleNotifications({message: "Product added to favorites!", type: "addProduct"});
            }
            }
            >
                Add to Favorites
            </button>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (product) => dispatch(addToCart(product)),
        addToFavorites: (product) => dispatch(addToFavorites(product))
    };
}

export default connect(null, mapDispatchToProps)(ProductItem);
