import React from 'react';
import "./PublicProfile.css";
import image from "../../assets/Images/image.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faUser } from '@fortawesome/free-solid-svg-icons';

const PublicProfile = () => {
    return (
        <div className='Profile-container'>
            <div className="form-container">
                <div className="from-heading">
                    <h3>Your Public Profile</h3>
                    <p>Everything on this page can be seen by anyone</p>
                    <div className="view-btn">
                        <button className='btn'><a href=""> View Profile</a></button>
                    </div>   
                </div>

                <div className="form-info">
                    
                   


                </div>


            </div>
            
            
        </div>
    );
};

export default PublicProfile;