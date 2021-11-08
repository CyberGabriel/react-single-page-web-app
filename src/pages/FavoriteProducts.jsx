import React from 'react';
import Layout from '../components/Layout';
import { connect } from 'react-redux';
import { addToCart} from '../redux/cart/CartActions';
import { removeFromFavorites, clearFavorites} from '../redux/favorites/FavoritesActions';
import { Link } from 'react-router-dom';
import './FavoriteProducts.css';
import { ReactComponent as ArrowBack} from '../assets/icons/arrow-back.svg';
import { ReactComponent as ArrowForward} from '../assets/icons/arrow-forward.svg';
import { ReactComponent as EmptyCart } from '../assets/icons/delete.svg';
import Notifications from '../components/Notifications';
import handleNotifications from '../components/HandleNotifications';

function favoriteProducts(props) {

    return (
        <Layout>
            <Notifications />
            <div className="favorites-page container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center">
            {
                    props.favProducts.length
                    ?
                    <div className="w-100 row">
                        <h2 className="text-center mb-5">Favorite Products:</h2>
                        {
                            props.favProducts.map(product => {
                                const {name, price, currency, image, id} = product;
                                return (
                                <div className="product-item col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-5 d-flex flex-column align-items-center">
                                    <Link to={`/product/${product.id}`} className="favLink d-flex flex-column align-items-center text-decoration-none">
                                    <img src={product.image} alt={product.name} className="mb-2"/>
                                    <p className="mb-1 text-center">{ product.name }</p>
                                    <p className="text-center fw-bold text-danger">{ product.price + product.currency }</p>
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
                                        className="btn btn-outline-dark mt-2 fw-bold"
                                        onClick={() => {props.removeFromFavorites({
                                            id: product.id
                                        });
                                        handleNotifications({message: "Product removed from favorites!", type: "removeProduct"});
                                        }
                                    }
                                    >
                                     Remove
                                    </button>
                                </div>
                                )
                            })
                        }
                        <div className="d-flex justify-content-between border-top">
                            <div className="w-25 d-flex align-items-center justify-content-center">
                                <Link to="/favorites"
                                    onClick={() => {props.clearFavorites();
                                        handleNotifications({message: "All products removed from favorites!", type: "removeProduct"});
                                    }}
                                    className="cartBtn text-decoration-none">
                                    <p><EmptyCart /> Clear Favorites</p>
                                </Link>
                            </div>
                            <div className="w-50 d-flex justify-content-between">
                                <div className="d-flex align-items-center justify-content-center">
                                    <Link to="/" className="cartBtn text-decoration-none">
                                        <p><ArrowBack /> Continue Shopping</p>
                                    </Link>
                                </div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <Link to="/favorites" className="cartBtn text-decoration-none"
                                    onClick={() => {props.favProducts.map(product => {
                                        const {name, price, currency, image, id} = product;
                                        return props.addToCart({
                                            product: {
                                                id,
                                                name,
                                                price,
                                                currency,
                                                image
                                            }
                                        })
                                    });
                                    handleNotifications({message: "All products added to cart!", type: "addProduct"});
                                    }
                                    }
                                    >
                                        <p>Add All to Cart <ArrowForward /></p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    : <div className="d-flex flex-column align-items-center">
                        <p className="h3">You have no favorite products!</p>
                        <Link to="/"><button className="btn btn-outline-dark fw-bold">Back to Home</button></Link>
                    </div>
                }
            </div>
        </Layout>
    )
}

function mapStateToProps(state) {
    return {
        favProducts: state.favorites.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (product) => dispatch(addToCart(product)),
        removeFromFavorites: (payload) => dispatch(removeFromFavorites(payload)),
        clearFavorites: () => dispatch(clearFavorites())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(favoriteProducts);

