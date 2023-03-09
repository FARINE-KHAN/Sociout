import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <Link to="/"  style={{textDecoration : "none", color: "rgb(0, 255, 191)" }}>
          <i className="fa-solid fa-dove"></i><h2>Sociout</h2>
        </Link>
      </div>
      <div className="tools">
        <h3>
          <Link to="/user/dashboard" style={{textDecoration : "none", color : "black"}}>
            <i className="fa-solid fa-house"></i>Dashboard
          </Link>
        </h3>
        <h3>
        <Link to="/user/search" style={{textDecoration : "none", color : "black"}}>
          <i className="fa-solid fa-magnifying-glass"></i>Search</Link>
        </h3>
        <h3>
        <Link to="/user/messages/:id/:userName" style={{textDecoration : "none", color : "black"}}>
          <i className="fa-solid fa-envelope"></i>Messages</Link>
        </h3>
        <h3>
        <Link to="/user/profile/:id/:userName" style={{textDecoration : "none", color : "black"}}>
          <i className="fa-solid fa-user"></i>Profile</Link>
        </h3>
        <h3>
        <Link to="/user/settings/:id" style={{textDecoration : "none", color : "black"}}>
          <i className="fa-solid fa-gear"></i>Settings</Link>
        </h3>
        <Link className="btn-secondary">
          <button>
            <i className="fa-solid fa-cloud-arrow-up"></i>Upload Post
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
