import React from 'react';
import "./Heading.css";

// import background from "../../assets/Images/heading-img.jpg";


const Heading = () => {
    return (
        <div className='heading-area container d-flex justify-content-center' >
            
            <div className="info col-8  justify-content-center">
                <h4 className='Flower'>Flower & Gift</h4>
                <h1 className='title'>Perfect Bounch For Every Occasion</h1>

                <button className='shop-button btn mt-4'> Shop Now</button>
            </div>
            
            
        </div>
        
    );
};

export default Heading;