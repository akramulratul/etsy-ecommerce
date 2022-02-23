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


            <div className="About-us">

                <div className="About-ourShop">

                    <h4>ABOUT OUR SHOP</h4>
                    
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium blanditiis beatae dolor.</p>

                    <p className='location'>Location</p>
                    <p className='Phone'>Contact Number</p>
                    <p className='Email'> example@example.com</p>
                    
                    
                </div>
                
            </div>
        </div>
    );
};

export default Footer;