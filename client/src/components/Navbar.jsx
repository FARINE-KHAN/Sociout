import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
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
            <Link className="link" to="/user/profile/:id" style={{textDecoration : "none"}}>
              <h3>Muhaz</h3>
            </Link>
            <Link className="link" to="/login" style={{textDecoration : "none"}}>
              <h3>Logout</h3>
            </Link>

            {/* <Link to="/user/update" style={{"textDecoration" : "none"}}>
            <span>{currentUser?.User.username}</span></Link>
            {currentUser ? (
              <Link to="/login" style={{"textDecoration" : "none"}}>
            <span onClick={logout}>Logout</span></Link>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )} */}
        </div>
    </div>
  )
}

export default Navbar
