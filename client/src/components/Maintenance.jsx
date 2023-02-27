import React, { useContext } from "react";
import svg from "../images/Maintenance.svg";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Maintenance = () => {
  return (
    <div>
      <Navbar />
      <div className="error-page">
        <img src={svg} alt="img" data-aos="fade-in" />
        <p>This page is under maintenance</p>
        <p>Please contact us if you still have any issue.</p>
        <Link className="btn-primery" to="/">
          <button onClick={() => history.go(-1)}>Go Back</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Maintenance;
