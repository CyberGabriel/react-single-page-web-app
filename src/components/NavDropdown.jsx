import React from 'react'
import {Link} from 'react-router-dom';
import products from '../utils/products.json';
import { ReactComponent as MenuIcon} from '../assets/icons/menu.svg';
import './Navbar.css';

class NavDropdown extends React.Component {
    constructor() {
        super();
        this.handleMenuIcon = this.handleMenuIcon.bind(this);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        const categories = Object.keys(products);
        this.setState({categories});
    }
    
    handleMenuIcon () {
        let menuBtn = document.querySelector('.dropBtns');
        if (menuBtn.style.display === 'block') {
            menuBtn.style.display = 'none';
        } else {
            menuBtn.style.display = 'block';
        }
    }
    
render() {
        return (
            <div className="menuDrop">
                <span id="menuIcon" 
                onClick={this.handleMenuIcon}>
                    <MenuIcon />
                </span>
                <div className="dropBtns">
                {this.state.categories.map((category, index) =>
                    <Link style={{color: 'rgb(0, 32, 63)'}} key={index} className="text-decoration-none" to={`/category/${category}`}>
                        <div className="fw-bold py-1"><span className="navBtn">{products[category].name}</span></div>
                    </Link>
                )}
                </div>
            </div>
        )
    }
}    

export default NavDropdown;