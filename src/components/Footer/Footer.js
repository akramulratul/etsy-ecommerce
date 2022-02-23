import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="deals">
                <div className="info">
                    <h3>Get The Latest Deals</h3>
                    <h6>$ 30 coupon for first shopping</h6>
                    <div className="search">
                        <input type="text" className="input" placeholder="Email" />
                        <button type="button" className="btn btn-danger button ">Subscribe</button>
                    </div>
                </div>
            </div>


            <div className="others-info">
                
            </div>
        </div>
    );
};

export default Footer;