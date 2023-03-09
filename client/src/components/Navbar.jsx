import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className='navbar' data-aos="slide-down">
      <div className='logo'>
        <Link to="/">
        <i className="fa-solid fa-dove"></i>
        </Link>
        </div>
        <div className="links">
            <Link className="link" to="/" style={{textDecoration : "none"}}>
              <h3>Home</h3>
            </Link>
            <Link className="link" to="/about" style={{textDecoration : "none"}}>
              <h3>About</h3>
            </Link>
            <Link className="link" to="/contact" style={{textDecoration : "none"}}>
              <h3>Contact Us</h3>
            </Link>

            <Link to="/user/profile/:id/:userName" style={{"textDecoration" : "none"}}>
            <h3>{currentUser?.User.userName}</h3></Link>
            {currentUser ? (
              <Link to="/login" style={{"textDecoration" : "none"}}>
            <h3 onClick={logout}>Logout</h3></Link>
          ) : (
            <Link className="link" to="/login" style={{"textDecoration" : "none"}}>
              <h3>Login</h3>
            </Link>
          )}
        </div>
    </div>
  )
}

export default Navbar
