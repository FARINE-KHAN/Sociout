import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import svg from "../../images/form.svg";
import axios from "axios";

function Register() {
  const [values, setValues] = useState({
    fullName: "",
    userName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:9000/register", values);
      navigate("/login");
    } catch (err) {
      toast.error(err.response.data, toastOptions);
    }
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <>
    <Navbar/>
      <div className="form">
        <div className="form-svg">
          <img src={svg} alt="svg" />
        </div>
        <div className="form-main">
          <form onSubmit={handleSubmit}>
              <h1>REGISTER</h1>
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                onChange={handleChange}
              />

              <input
                type="text"
                placeholder="Username"
                name="userName"
                onChange={handleChange}
              />

              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />

              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                onChange={handleChange}
              />

              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />

              <input
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
                onChange={handleChange}
              />
            <div className="btn-primery">
              <button type="submit">Create User </button>
            </div>
            <span>
              Already have an account? <Link style={{textDecoration : "none"}} to="/login">Login</Link>
            </span>
          </form>
        </div>
        <ToastContainer/>
      </div>
      <Footer/>
    </>
  );
}

export default Register;
