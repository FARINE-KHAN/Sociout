import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./style.scss"
import Register from "./pages/user/Register"
import Login from "./pages/user/Login"
import Home from "./pages/main/Home"
import PageNotFound from "./pages/main/PageNotFound"
import Dashboard from "./pages/app/Dashboard"
import EditProfile from "./pages/user/EditProfile"
import Profile from "./pages/user/Profile"
import PublicProfile from "./pages/user/PublicProfile"
import About from "./pages/main/About"
import Contact from "./pages/main/Contact"
import ProtectedRoute from "./components/ProtectedRoute"
import Settings from "./pages/app/Settings"
import Messages from "./pages/app/Messages"


function App() {
  return (
    <div className="app">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/user/public_profile/:id/:userName' element={<PublicProfile/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />

        {/* =======ProtectedRoute============ */}

        <Route path='/user/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
        <Route path='/user/settings/:id' element={<ProtectedRoute><Settings/></ProtectedRoute>} />
        <Route path='/user/messages/:id/:userName' element={<ProtectedRoute><Messages/></ProtectedRoute>} />
        <Route path='/user/editprofile/:id/:userName' element={<ProtectedRoute><EditProfile/></ProtectedRoute>} />
        <Route path='/user/profile/:id/:userName' element={<ProtectedRoute><Profile/></ProtectedRoute>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
