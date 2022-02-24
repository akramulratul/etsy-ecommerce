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
    <div className="Container">
      <div className="favPage-container">
        <div className="profile-picture">
          <img src={image} id="photo" className="img" alt="" />
        </div>
        <div className="up-btn">
          <input type="file" id="file" />
          <label for="file" id="uploadBtn" className="upload-btn">
            {" "}
            <FontAwesomeIcon icon={faUser} />{" "}
          </label>
        </div>

        <div className="profile-name">
          <div className="name">
            <h3 className="nayeem">Nayeem islam </h3>
            <Link to="/edit-profile">
              <button className="change-button">
                <FontAwesomeIcon icon={faPen} />
              </button>
            </Link>
          </div>

          <div className="follow">
            <span> 0 Following </span>
            <span>0 Followers</span>
          </div>
        </div>
      </div>
      <div className="cart-body"></div>
      <Footer></Footer>
    </div>
  );
};

export default Favourite;
