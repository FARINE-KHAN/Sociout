import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify"
import { AuthContext } from "../../Context/AuthContext";
// import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const [inputs,setInputs]=useState({
        body:"",
        password:"",
    })
   const {login}= useContext(AuthContext)
  
    const [error, setError] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await login(inputs);
      } catch (error) {
        // toast.error(error.response.data);
        setError(error.response.data)
      }
    };
  
    const handleChange = async (e) => {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="enter email or phone or username" name="body" onChange={handleChange}/>
        <input placeholder="enter password" type="password" name="password" onChange={handleChange}/>
        <Link to="/home">
     
       <div className="btn-primery">  <input type="submit" value="Done" /></div> 
        </Link>
        {/* <ToastContainer/> */}
      </form>
    </div>
  );
};

export default Login;
