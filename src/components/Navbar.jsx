import React from 'react'
import {Link} from 'react-router-dom';
import products from '../utils/products.json';
import './Navbar.css';

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        const categories = Object.keys(products);
        this.setState({categories});
    }
    
render() {
        return (
            <div className="d-flex justify-content-center">
                {this.state.categories.map((category, index) =>
                    <Link style={{color: 'rgb(0, 32, 63)'}} key={index} className="text-decoration-none" to={`/category/${category}`}>
                        <span className="navBtn fw-bold">{products[category].name}</span>
                    </Link>
                )}
            </div>
        )
    }
}    

export default Navbar;
