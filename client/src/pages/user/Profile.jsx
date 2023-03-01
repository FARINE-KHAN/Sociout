import React, { useContext, useState } from 'react'
import { AuthContext } from "../../Context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: ''
  })

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const { currentUser } = useContext(AuthContext)
  let id = currentUser.User.id

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:9000/edit/${id}`, values);
    } catch (err) {
      toast.error(err.response.data, toastOptions);
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      await axios.delete(`http://localhost:9000/delete/${id}`, values);
    } catch (err) {
      toast.error(err.response.data, toastOptions);
    }
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div className='profile'><h1> PROFILE </h1>
        <form>
          <input placeholder='Full Name' name='fullName' onChange={handleChange} />
          <input placeholder='Email' name='email' onChange={handleChange} />
          <input placeholder='Phone' name='phone' onChange={handleChange} />
          <input placeholder='password' name='password' onChange={handleChange} />

          <button onClick={handleSubmit}> Update </button>
          <button onClick={handleDelete} > Delete Account </button>
        </form>

      </div>
    </div>
  )
}

export default Profile
