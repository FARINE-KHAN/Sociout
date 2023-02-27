import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"

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
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark"
  }
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
     event.preventDefault()
      try{await axios.post("http://localhost:9000/register",values);
      navigate("/login")
    }
      catch(err){
     toast.error(err.response.data,toastOptions)
      }
    
  }


  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  return (
    <div>
      
      <div className='form'>
        <form onSubmit={handleSubmit}>

          <div className="heading">

            <h1>SOCIOUT</h1>
          </div>
          <div>
          <input type="text"
            placeholder='fullName'
            name='fullName'
            onChange={handleChange} />

          <input type="text"
            placeholder='username'
            name='userName'
            onChange={handleChange} />

          <input type="email"
            placeholder='email'
            name='email'
            onChange={handleChange} />

          <input type="text"
            placeholder='Phone Number'
            name='phone'
            onChange={handleChange} />

          <input type="password"
            placeholder='password'
            name='password'
            onChange={handleChange} />

          <input type="password"
            placeholder='confirm password'
            name='confirmPassword'
            onChange={handleChange} />
          </div>
          <div className='btn-primery'><button type="submit">Create User </button></div>
          <span> Already have an account? <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Register