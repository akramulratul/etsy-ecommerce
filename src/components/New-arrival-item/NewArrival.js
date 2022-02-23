import React, { useState } from 'react';
import "./NewArrival.css";
import data from "../../NewArrivalData/New-arrival-items.json";
import Product from '../Product/Product';

const NewArrival = () => {
    // const Flower = data;
    const [flowers,setFlowers] = useState(data);
    return (
        <div className='new-arrival-area'>
            <h2>New Arrival items</h2>
            <div className="product-container">
                 {
                    flowers.map(fl => <Product product = {fl}></Product>)
                }
            </div>
           
               
                           
        </div>
    );
};

export default NewArrival;