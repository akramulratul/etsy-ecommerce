import React from 'react';
import "./Product.css";

const Product = (props) => {
    console.log(props);
    const {id,name,price,img} = props.product;
    return (


        <div className="card" >
        {/* <img src={img} className="card-img-top" alt="..."> */}
        <div class="card-body">
            <h5 className="card-title">{name}</h5>
            <h5>Price: $ {price}</h5>
            
        </div>
</div>
        

    );
};

export default Product;