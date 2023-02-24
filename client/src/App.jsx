import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./style.scss"
import Register from "./pages/user/Register"
import Login from "./pages/user/Login"
import Home from "./pages/main/Home"
import PageNotFound from "./pages/main/PageNotFound"
import Dashboard from "./pages/user/Dashboard"
import Profile from "./pages/user/Profile"
import About from "./pages/main/About"
import Contact from "./pages/main/Contact"


function App() {
  return (
    <div className="app">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/user/dashboard' element={<Dashboard/>} />
        <Route path='/user/profile/:id' element={<Profile/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
