import React from "react";
// import ReactDom from ''
import "./Favourite.css";
import Link from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faUser } from "@fortawesome/free-solid-svg-icons";
import image from "../../assets/Images/image.jpg";
import Footer from "../../components/Footer/Footer";

const Favourite = () => {
  return (
    <div className="container mt-4 mb-4">

      <div className="row">
        <div className="col-2 ml-4 d-flex justify-content-center">
          <img src={image} id="photo" className="img-thumbnail " alt="" />
          <input type="file" id="file" />
          <label for="file" id="uploadBtn" className="upload-btn mt-4 d-flex justify-content-center">
              <FontAwesomeIcon icon={faUser} />
          </label>
        </div>

        <div className="col-4 ">
          <div className="row ">
            <div className="col d-flex">
              <h3 className="">Nayeem islam </h3>
            
              <button className="change-button ml-2 ">
                <FontAwesomeIcon icon={faPen} />
              </button>
            </div>
            
          </div>

          <div className="row">
            <div className="col d-flex">
            <span className="mr-2"> 0 Following </span>
            <span>0 Followers</span>
            </div>
            
          </div>
              
        </div>

        
      </div>

      <div className="cart-body">


      </div>
      <Footer></Footer>
    </div>
  );
};

export default Favourite;
