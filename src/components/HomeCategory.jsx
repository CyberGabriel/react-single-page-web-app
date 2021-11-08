import React from 'react';
import {Link} from 'react-router-dom';
import './HomeCategory.css';

function HomeCategory(props) {
    const {route, name, description, image} = props;

    return (
        <div className="col-sm-6 col-lg-4 mb-4">
            <Link className="categLinks text-decoration-none" to={`/category/${route}`}>
                <img
                    className="w-100"
                    src={image}
                    alt={name}
                />
                <div className="middle">{name}</div>
                <h2 className="h4 my-1"><strong>{name}</strong></h2>
                <p className="m-0">{description}</p>
            </Link>
        </div>
    );
}

export default HomeCategory;
