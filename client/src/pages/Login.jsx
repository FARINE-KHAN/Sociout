import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [inputs,setInputs]=useState({
        body:"",
        password:"",
    })
  return (
    <div>
      <form>
        <input placeholder="enter email or phone or username" name="body" />
        <input placeholder="enter password" type="password" name="password"/>
        <Link to="/home">
     
          <input type="submit" value="Save" />
        </Link>
      </form>
    </div>
  );
};

export default Login;
