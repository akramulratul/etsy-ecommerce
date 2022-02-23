import React from 'react';
import "./Product.css";

const Product = (props) => {
    console.log(props);
    const {id,name,price,img} = props.product;
    return (


        <div class="card" >
        {/* <img src={img} class="card-img-top" alt="..."> */}
        <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <h5>Price: $ {price}</h5>
            
        </div>
</div>
        

    );
};

export default Product;