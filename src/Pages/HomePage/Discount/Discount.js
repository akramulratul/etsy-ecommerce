import React from 'react';
import "./Discount.css";

const Discount = () => {
    return (
        <div className="container mt-4">

            <div className="row  mt-4 justify-content-around  ">

                <div className="first mt-3 mr-4 second d-flex align-items-center justify-content-center col-sm-10 col-md-4 col-lg-3 ">
                    <h3 className='h3 '>New Collection</h3>

                </div>

                <div className="second mt-3 d-flex align-items-center justify-content-center col-sm-10 col-md-4 col-lg-3">
                    <h3 className='h3 '>25% Off</h3>
                </div>

                <div className="third mt-3 second d-flex align-items-center justify-content-center col-sm-10 col-md-4 col-lg-3">
                    <h3 className='h3 '>New Collection</h3>
                </div>

            </div> 
                        
        </div>
        
    );
};

export default Discount;