import React from 'react';
import Layout from '../components/Layout';
import products from '../utils/products.json';
import './Products.css';
import { connect } from 'react-redux';
import { addToCart } from '../redux/cart/CartActions';
import { addToFavorites } from '../redux/favorites/FavoritesActions';
import Notifications from '../components/Notifications';
import handleNotifications from '../components/HandleNotifications';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }


    render() {

        const { match } = this.props;
        const productId = match.params.productId;
        const categoryValues = Object.values(products);
        const productItems = categoryValues.reduce((acc, category) => {
            return [
                ...acc,
                ...category.items
            ]
        }, []);
        const currentProduct = productItems.find(product => {
            return Number(productId) === product.id;
        });
        const product = currentProduct;
        const {name, price, currency, image, id} = product;
        
        return (
            <Layout>
                <Notifications />
                <div className="product-page container-fluid container-min-max-width">
                    <h1 className="my-5 h2">{product.name}</h1>
                    <div className="product-info d-flex">
                        <div className="image-wrapper d-flex me-5">
                            <img src={product.image} alt="Product presentation"/>
                        </div>
                        <div className="product-details">
                            <p className="h3 text-danger">{product.price} {product.currency}</p>
                            <button
                                className="btn btn-outline-dark me-4 mb-2 fw-bold"
                                onClick={() => {
                                     this.props.addToCart({
                                        product: {
                                            id: product.id,
                                            name: product.name,
                                            price: product.price,
                                            currency: product.currency,
                                            image: product.image
                                        }
                                    });
                                    handleNotifications({message: "Product added to cart!", type: "addProduct"});
                                }
                            }
                            >
                                Add to Cart
                            </button>
                            <button
                                className="btn btn-outline-dark mb-2 fw-bold"
                                onClick={() => { this.props.addToFavorites({
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
                            <p><span className="fw-bold">Size</span>: {product.size}</p>
                            
                            <p><span className="fw-bold">Color</span>: {product.colour}</p>
                                
                            <p><span className="fw-bold">Material</span>: {product.material}</p>
                                
                            <p><span className="fw-bold">Brand</span>: {product.brand}</p>
                                
                            <p className="fw-bold mb-1">Description:</p>
                                <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (payload) => dispatch(addToCart(payload)),
        addToFavorites: (product) => dispatch(addToFavorites(product))
    }
}

export default connect(null, mapDispatchToProps)(Product);