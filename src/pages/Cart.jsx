import React from 'react';
import Layout from '../components/Layout';
import { connect } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity, emptyCart } from '../redux/cart/CartActions';
import { Link } from 'react-router-dom';
import './Cart.css';
import { ReactComponent as Close} from '../assets/icons/close.svg';
import { ReactComponent as IncreaseQuantity} from '../assets/icons/increase-quantity.svg';
import { ReactComponent as DecreaseQuantity} from '../assets/icons/decrease-quantity.svg';
import { ReactComponent as ArrowBack} from '../assets/icons/arrow-back.svg';
import { ReactComponent as ArrowForward} from '../assets/icons/arrow-forward.svg';
import { ReactComponent as EmptyCart } from '../assets/icons/delete.svg';
import Notifications from '../components/Notifications';
import handleNotifications from '../components/HandleNotifications';

function Cart(props) {
    const totalSum = (products) => {
        return products.reduce((acc, product) => {
            return acc + product.quantity * product.price;
        }, 0)
    }

    return(
        <Layout>
            <Notifications />
            <div className="cart-page container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center">
                {
                    props.products.length
                    ? <div className="w-100">
                        <div className="d-flex justify-content-between text-center h4 text-bold">
                            <p className="w-25">Product</p>
                            <p className="w-25">Price</p>
                            <p className="w-25">Quantity</p>
                            <p className="w-25">Total</p>
                        </div>
                        {
                            props.products.map(product => {
                                return <div className="d-flex justify-content-between align-items-center text-center" key={product.id}>
                                    <Link to={`/product/${product.id}`} className="cartLink w-25 d-flex flex-column justify-content-center align-items-center text-decoration-none">
                                        <img src={product.image} alt={product.name} />
                                        <p className="mb-1 text-center">{ product.name }</p>
                                    </Link>
                                    <p className="w-25">{ product.price } { product.currency }</p>
                                    <div className="row w-25">
                                        <div className="col-4" onClick={() => 
                                            props.decreaseQuantity({id: product.id})
                                        }>
                                            <DecreaseQuantity />
                                        </div>
                                            <p className="col-4">{ product.quantity }</p>
                                        <div className="col-4" onClick={() => props.increaseQuantity({id: product.id})}>
                                            <IncreaseQuantity />
                                        </div>
                                    </div>
                                    <div className="w-25 d-flex justify-content-center">
                                        <p className="me-2">{ product.price * product.quantity } { product.currency }</p>
                                            <div onClick={() => {
                                                props.removeFromCart({id: product.id});
                                                handleNotifications({message: "Product removed from cart!", type: "removeProduct"});
                                                }
                                            }>
                                                <Close />
                                            </div>
                                    </div>
                                </div>
                            })
                        }
                        <div className="d-flex justify-content-end border-top">
                            <div className="w-25 d-flex align-items-center justify-content-center">
                                <p className="my-4 text-center fw-bold">Order Total: </p>
                            </div>
                            <div className="w-25">
                                <p className="my-4 text-center fw-bold ">
                                    { totalSum(props.products) } { props.products[0].currency }
                                </p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="w-25 d-flex align-items-center justify-content-center">
                                <Link to="/cart"
                                    className="cartBtn text-decoration-none" 
                                    onClick={() => {
                                    props.emptyCart();
                                    handleNotifications({message: "All products removed from cart!", type: "removeProduct"});
                                    }}
                                >
                                    <p><EmptyCart /> Empty Cart</p>
                                </Link>
                            </div>
                            <div className="w-50 d-flex justify-content-between">
                                <div className="d-flex align-items-center justify-content-center">
                                    <Link to="/" className="cartBtn text-decoration-none">
                                        <p><ArrowBack /> Continue Shopping</p>
                                    </Link>
                                </div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <Link to="/cart"
                                        className="cartBtn text-decoration-none"
                                        onClick={() => {
                                            props.emptyCart();
                                            handleNotifications({message: "Your order was successfully placed!", type: "addProduct"});
                                            }}
                                        >
                                        <p>Place Order <ArrowForward /></p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <div className="d-flex flex-column align-items-center">
                        <p className="h3">Your shopping cart is empty!</p>
                        <Link to="/"><button className="btn btn-outline-dark fw-bold">Back to Home</button></Link>
                    </div>
                }
            </div>
        </Layout>
    );
}

function mapStateToProps(state) {
    return {
        products: state.cart.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: (payload) => dispatch(removeFromCart(payload)),
        increaseQuantity: (payload) => dispatch(increaseQuantity(payload)),
        decreaseQuantity: (payload) => dispatch(decreaseQuantity(payload)),
        emptyCart: () => dispatch(emptyCart())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);