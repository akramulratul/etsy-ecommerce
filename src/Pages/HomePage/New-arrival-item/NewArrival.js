import  { useState } from "react";
import "./NewArrival.css";
import data from "../../../NewArrivalData/New-arrival-items.json";
import Product from "../Product/Product";

const NewArrival = () => {
  const Flower = data.slice(0,8);
  const [products, setProducts] = useState(Flower);

  return (
    <div className="container mt-4 mb-4 text-center">
      <h2>New Arrival items</h2>

      <div className="row d-flex justify-content-center">
        {
          products.map(Pd => <Product product ={Pd} ></Product> )
        }
      </div>

    </div>
  );
};

export default NewArrival;
