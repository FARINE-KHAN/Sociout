import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"
import { AuthContext } from "../../Context/AuthContext";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [inputs, setInputs] = useState({
    body: "",
    password: "",
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate()

  const toastOptions = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark"
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
    navigate("/user/dashboard")
    } catch (error) {
      toast.error(error.response.data,toastOptions);
    }
  };
  const handleChange = async (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input
          placeholder="enter email or phone or username"
          name="body"
          onChange={handleChange}
        />
        <input
          placeholder="enter password"
          type="password"
          name="password"
          onChange={handleChange}
        />

        <div className="btn-primery">      
           <button type="submit" >Login</button>
        </div>
  
        <ToastContainer/>
      </form>
    </div>
  );
};

export default Login;
