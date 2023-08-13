import React, { useState } from "react";
import carimage from "../image/car.png";
import { Link } from "react-router-dom";
import "../styles/ProductDescription.css";

const ProductDescription = () => {
  const [state, setState] = useState(false);
  const stateHandler = () => {
    setState(true);
  };
  return (
    <div>
      <center>
        <h1>Welcome to the Product Page 🚗</h1>
        <img src={carimage} alt="Product" /> &nbsp;&nbsp;
        <p>
          <h3> Electronic Parking Brake</h3>A feature that allows you to engage
          or disengage the handbrake with the press of a button instead of
          pulling the lever.
        </p>
        <p>
          <h3>Automatic Parking Assist</h3>
          Detects empty spots if you’re moving slowly or stopped & helps you
          park without controlling steering. You still have to control
          accelerator & brakes.
        </p>
        <p>
          <h3>Night Vision Assist</h3>
          An infrared camera that detects objects in the car’s path that may not
          be visible to the naked eye, & sends the driver an alert on the
          screen.
        </p>
        <p>
          <h3>Tyre Pressure Monitoring System (TPMS)</h3>
          System that continuously monitors tyre pressure in all 4 tyres and
          informs you on the cluster meter if it detects a drop in tyre
          pressure.
        </p>
        <p>
          <h3>Automatic Climate Control</h3>
          Works like a home AC and maintains the set temperature, thus saving
          fuel by switching compressor off when not needed.
        </p>
       <p>click here to move next page</p>
       <Link to="/parts">
        <button>Next</button>
      </Link>
      </center>
    </div>
  );
};

export default ProductDescription;
