import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import './Header.css';
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import { ReactComponent as FavoriteProducts } from '../assets/icons/favorite-products.svg';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/user/UserActions';
import Navbar from './Navbar';
import NavDropdown from './NavDropdown';
import { ReactComponent as SearchIcon} from '../assets/icons/search.svg';
import SearchbarDisplay from './SearchbarDisplay';

function Header(props) {
    return (
        <header className="header">
            <div className="headerTop container-fluid container-min-max-width">
                <div className="d-flex justify-content-between align-items-center container-fluid container-min-max-width">
                    <Link to="/">
                        <img src={logo} alt="bad-boys-bikes-logo"/>
                    </Link>
                    <Link className="text-decoration-none" to="/">                
                    <div>    
                        <h1>
                            bad boys bikes
                        </h1>
                        <h3 className="motto text-center">
                            let your bike love shine bright
                        </h3>
                    </div>
                    </Link>
                    <div>
                        { props.user
                            ? <p className="m-2">Hello, {props.user.displayName}!</p>
                            : <p className="m-2">Welcome, please log in</p>
                        }
                        <div className="d-flex justify-content-end">
                            { props.user
                                ? <p className="mx-2 mb-0 logoutBtn text-decoration-none fw-bold" onClick={() => props.signOut()}>Logout</p>
                                : <Link className="mx-2 loginBtn text-decoration-none fw-bold" to="/login">Login</Link>
                            }
                            <div className="d-flex align-items-center">
                                <Link to="/cart" className="counter text-decoration-none d-flex">
                                    <ShoppingCart className="ms-2"/>
                                    <p className="ms-1 mb-0 me-3 fw-bold">{ props.numberOfProducts }</p>
                                </Link>
                            </div>
                            <div className="d-flex align-items-center">
                            <Link to="/favorites" className="counter text-decoration-none d-flex">
                                <FavoriteProducts className="ms-2"/>
                                <p className="ms-1 mb-0 me-3 fw-bold">{ props.numberOfFavorites }</p>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navMenu container-fluid container-min-max-width mb-5">
                <div className="container-fluid container-min-max-width">
                    <div className="navDrop">
                        <NavDropdown />
                    </div>
                    <div className="navbarMenu d-flex container-fluid container-min-max-width align-items-center mb-3 py-3 px-0">
                        <div className="navBarComp container-fluid container-min-max-widt p-0">
                            <Navbar />
                        </div>
                        <div className="d-flex justify-content-start align-items-center">
                            <div className="searchIcon">
                                <Link to='/search-results'>
                                    <SearchIcon />
                                </Link>
                            </div>
                            <div className="searchDrop">
                                <SearchbarDisplay />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

function mapStateToProps(state) {
    return {
        numberOfProducts: state.cart.products.reduce((acc, product) => {
            return acc + product.quantity;
        }, 0),
        numberOfFavorites: state.favorites.products.length,
        user: state.user.data
    }
}
function mapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);