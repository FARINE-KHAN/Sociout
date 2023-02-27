import React, { useContext } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { AuthContext } from "../../Context/AuthContext";
import { Link } from 'react-router-dom'

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
    <Navbar/>
      <div className='home'>
        <h1>Welcome to <span>Sociout</span> </h1>
        <p>Be Imagine, Be Artistic And Let’s Engage.</p>
        <div className="btn-primery">
        {currentUser ? (
        <Link 
          to="/user/dashboard"
          style={{ textDecoration: "none" }}
        >
          <button >Dashboard</button>
        </Link>
      ) : (
        <Link  to="/login">
          <button >Login</button>
        </Link>
      )}
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
