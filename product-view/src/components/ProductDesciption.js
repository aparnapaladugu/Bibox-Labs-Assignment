import React from 'react';
import { Link } from 'react-router-dom';
import carimage from '../image/car.png';
import PartsSelection from './PartsSelection';


const ProductDescription = () => {
  return (
    <div>
        <center>
        <h1>Product Description</h1>
      <img src={carimage} alt="Product" />
      {/* <p></p>
      <Link to="/parts-selection">
        <button>START</button>{PartsSelection}
      </Link> */}
 
        </center>
    </div>
  );
};

export default ProductDescription;
