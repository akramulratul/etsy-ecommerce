import React from 'react';
import "./Product.css";

const Product = (props) => {
    
    const {id,name,price,img} = props.product;
    return (
        <div className=" mt-4 mb-3 ml-3 col-sm-10 col-md-5 col-lg-3">
            
                
                    <div className="card d-flex align-items-center align-middle   ">
                        <img src={img} className="card-img-top img-thumbnail " alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"> {name}</h5>
                            <p className="card-text"> $ {price}</p>
                            <a href="#" className="btn btn-dark">Add to cart</a>
                        </div>
                    </div>           
        </div>
    );
};

export default Product;