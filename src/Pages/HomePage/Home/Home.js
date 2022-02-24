import React from "react";
import Heading from "../Heading/Heading";
import NavBar from "../../../components/navbar/NavBar";
import NewArrival from "../New-arrival-item/NewArrival";
import Discount from "../Discount/Discount";
import Footer from "../../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <Heading />
      <NewArrival />
      <Discount />
      <Footer />
    </div>
  );
};

export default Home;
