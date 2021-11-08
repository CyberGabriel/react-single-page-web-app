import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';
import { ReactComponent as Google } from '../assets/icons/google.svg';
import './Login.css'
import { connect } from 'react-redux';
import { loginUser } from '../redux/user/UserActions';

class Login extends React.Component {

    componentDidUpdate(prevProps) {
        if (this.props.user !== prevProps.user) {
            this.props.history.push('/');
        }
    }

    render() {
        return(
            <div className="login-page">
                <Link to='/'>
                    <img src={Logo} alt="logo" className="mb-5"/>
                </Link>

                <h1 className="h2">Login</h1>
                <p>Choose Login Provider:</p>

                <button
                    className="btn btn-outline-dark d-flex align-items-center"
                    onClick={() => this.props.signInWithGoogle()}
                >
                    <Google className="w-50 me-3"/>
                    <span className="text-nowrap">Log in using Google</span>
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signInWithGoogle: (payload) => dispatch(loginUser(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);