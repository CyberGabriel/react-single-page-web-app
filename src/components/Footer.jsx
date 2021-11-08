import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Phone } from '../assets/icons/phone.svg';
import { ReactComponent as Mail } from '../assets/icons/mail.svg';
import { ReactComponent as GitHub } from '../assets/icons/github.svg';
import { ReactComponent as LinkedIn } from '../assets/icons/linkedin.svg';
import './Footer.css';

function Footer() {
    return (
        <footer className="container-fluid container-min-max-width pt-3 mt-3">
            <div className="container-fluid container-min-max-width d-flex justify-content-between">
                <div className="footer-group d-flex flex-column align-items-center">
                    <h3 className="h5">Info:</h3>
                    <Link to='/about' className="footerLink text-decoration-none">About Us</Link>
                    <Link to="/termsandconditions" className="footerLink text-decoration-none">Terms and Conditions</Link>
                </div>
                <div className="footer-group d-flex flex-column align-items-center">
                    <h3 className="h5">Contact us:</h3>
                    <p className="m-0">
                        <a href="mailto:notanotherfakeemail@badboysbikes.com" className="footerLink text-decoration-none" >
                            <Mail className="me-1 mb-1 footer-icon"/>
                            notanotherfakeemail@badboysbikes.com
                        </a>
                    </p>
                    <p className="m-0"><Phone className="me-1 footer-icon"/>+1234567890</p>
                </div>
                <div className="footer-group d-flex flex-column align-items-center">
                    <h3 className="h5">Web Dev:</h3>
                    <p className="m-0">
                        <a href="https://github.com/CyberGabriel" target="_blank" rel="noreferrer" className="footerLink text-decoration-none">
                            <GitHub className="me-1 mb-1 footer-icon"/>
                            CyberGabriel
                        </a>
                    </p>
                    <p className="m-0">
                        <a href="https://www.linkedin.com/in/gabriel-ghigulescu/" target="_blank" rel="noreferrer" className="footerLink text-decoration-none">
                            <LinkedIn className="me-1 footer-icon"/>
                            Ghigulescu Gabriel
                        </a>
                    </p>
                </div>
            </div>
            <div className="text-center py-3">
                &copy; Ghigulescu Gabriel, 2021
            </div>
        </footer>
    );
}

export default Footer;