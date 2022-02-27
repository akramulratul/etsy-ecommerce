import React from "react";
import "./PublicProfile.css";
import image from "../../assets/Images/image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faUser } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/Footer/Footer";

const PublicProfile = () => {
  return (
    
    <div className="container mb-4">
        <div class="row mb-3 mt-3">
            <div class="col-sm align-self-center">
                <h3>Your Public Profile</h3>
                <h6>Everything on this page can be seen by anyone</h6>
            </div>
            <div class="col-sm d-flex justify-content-end">
                <button type="button" class="btn view-btn ">View Profile</button>
            </div>
            
        </div>

        <form className='info border rounded-lg mb-4 p-4 '>
            <div class="form-group ml-4">
                <div className="row border-bottom p-3 ">
                    <label for="exampleFormControlFile1">Example file input</label>
                    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                </div>
                <br />
                <div class="row img-container border-bottom">
                    <img src={image} id="photo"/> 
                    
                    <p>Must be a .jpg, .gif or .png file smaller than 10 MB and at least 400px by 400px</p>                      
                </div>
            </div>

            <fieldset className='from-group ml-4'>
                <div className="row d-flex justify-content-start">
                    <legend class="col-form-label col-sm-2 pt-0">Gender</legend>

                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                            <label class="form-check-label" for="gridRadios1">
                                Male
                            </label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                        <label class="form-check-label" for="gridRadios2">
                            Female
                        </label>
                        </div>
                        
                    </div>
                </div>

                <div class="form-group ">
                    <label for="exampleInputPassword1">Country</label>
                    <input type="text" class="form-control  col-6" id="exampleInputPassword1" placeholder="Country"/>
                </div>

                <div class="form-group  ">
                    <label for="exampleInputPassword1">About</label>
                    <input type="text" class="form-control country col-6" id="exampleInputPassword1" placeholder=""/>
                </div>

            </fieldset>
            
        </form >


        <button type="submit" class="btn btn-primary save-btn">Save Change</button>

        <Footer></Footer>
    
    </div>
  );
};

export default PublicProfile;
