import React from 'react'
import { Link } from 'react-router-dom'
import svg from "../../images/404.svg"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const PageNotFound = () => {
  return (
    <div>
    <Navbar/>
    <div className='error-page'>
    <img src={svg} alt="svg"/>
    <Link className='btn-primery'>
      <button onClick={() => history.go(-1)}>Go Back</button>
    </Link>
    </div><Footer/></div>
  )
}

export default PageNotFound
