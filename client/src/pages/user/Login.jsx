import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import svg from "../../images/form.svg";
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [inputs, setInputs] = useState({
    body: "",
    password: "",
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/user/dashboard");
    } catch (error) {
      toast.error(error.response.data, toastOptions);
    }
  };
  const handleChange = async (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
    <Navbar/>
      <div className="form" style={{height : "33rem"}} data-aos="zoom-in">
        <div className="form-svg" data-aos="zoom-out">
          <img src={svg} alt="svg" />
        </div>
        <div className="form-main" style={{margin : "7rem"}}>
      <form onSubmit={handleSubmit} data-aos="slide-right">
      <h1>LOGIN</h1>
        <input
          placeholder="Enter email or phone or username"
          name="body"
          onChange={handleChange}
        />
        <input
          placeholder="Enter password"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <div className="btn-primery">
          <button type="submit">Login</button>
        </div>
        <p>
          New member ?
          <Link to="/register" style={{ textDecoration: "none" }}>
            <span>&nbsp;Register</span>
          </Link>
        </p>

      </form>
      </div>
    </div>
        <ToastContainer />
    <Footer/>
    </>
  );
};

export default Login;
