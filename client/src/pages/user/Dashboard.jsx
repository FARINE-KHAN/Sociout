import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const [input,setinput]=useState({})
  console.log(input)
  useEffect(()=>{
    setinput()
  },[input])

  return (
    <div>
      <input placeholder='kya gunda banega re tu' onChange={(e)=>{
      setinput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
      }}/>
      <button>
        hellow
      </button> 
      Dashboard
    </div>
  )
}

export default Dashboard
