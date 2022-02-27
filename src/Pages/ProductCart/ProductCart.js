import React from 'react';
import  "./ProductCart.css";
import img from "../../assets/Images/image.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPen, faUser } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Footer/Footer';

const ProductCart = () => {
    return (
        <div className='container'>

            <div className="row mt-4 d-flex justify-content-around cart">
                <div className="col-5 p-3 mr-4 image ">
                    

                    <button type="button" class="btn btn-light fav-btn border"><FontAwesomeIcon icon={faHeart}  /></button>
                    <img src={img} class="img-fluid  p-4" alt="Responsive image"></img>
                </div>

                <div className="col-5 info mt-4">

                    <div className="cart-info mt-4">
                        <p>Easybar 2022</p>
                        <h5>Product title <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, impedit! </h5>
                        <h4>USD 1300.00</h4>
                        <p>Local taxes included (where applicable)</p>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Quantity</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <button type="button" class="btn  btn-lg btn-block btn-outline-dark buy-btn">Buy it now</button>
                        <button type="button" class="btn btn-secondary btn-lg btn-block basket-btn">Add to basket</button>
                    </div>
                    
                    
                </div>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default ProductCart;