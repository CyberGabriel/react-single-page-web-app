import React from 'react'
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

function Page404() {
    return (
        <div>
            <Layout>
            <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex flex-column align-items-center">
                        <h1>Page not found :(</h1>
                        <h2>Here's a picture of a cute kitty instead:</h2>
                        <img src={"https://i.imgur.com/GoihBHR.jpg"} alt="cute kitty" className="img-fluid"/>
                        <Link to="/">
                            <button className="btn btn-outline-dark fw-bold">Back to Home</button>
                        </Link>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Page404;

