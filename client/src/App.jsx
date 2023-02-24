import React from "react"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
const router = createBrowserRouter([
  {path:"/",element:<Login/>},
  {path:"/register",element:<Register/>},
  {path:"/home",element:<Home/>}

])






function App() {
  return (
    <div >
     <RouterProvider router={router}/>
    </div>
  )
}

export default App
