import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className='ml-4 mt-4 mr-4 '>
            <div className="row new mt-4 back-gp">

                <div className="row Deals  align-items-center">
                    <div className="col-12 text-center">
                        <h3>Get The Latest Deals</h3>
                        <h6>$ 30 coupon for first shopping</h6>
                        <input type="text" className="input col-6 mt-3 rounded-lg" placeholder="Email" />
                         <br /><br />
                        <button type="button" className="btn btn-danger button ">Subscribe</button>
                        
                    </div>                    
                </div>

            </div>


            <div className="row mb-4 about">

                <div className=" row mt-4 mb-4 align-items-center">

                    <div className="col-12 text-center">
                        <h4>ABOUT OUR SHOP</h4>
                        
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium blanditiis beatae dolor.</p>

                        <p className='location'>Location</p>
                        <p className='Phone'>Contact Number</p>
                        <p className='Email'> example@example.com</p>

                    </div>
                   
                </div>
                
            </div>
        </div>
    );
};

export default Footer;