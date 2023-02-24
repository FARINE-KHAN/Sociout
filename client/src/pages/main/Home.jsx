import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <Navbar/>
      <div className='home'>
        <h1>Welcome to <span>Sociout</span> </h1>
        <p>Be Imagine, Be Artistic And Let’s Engage.</p>
        <Link to="/login" className='btn-primery'>
          <button>Login</button>
        </Link>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
