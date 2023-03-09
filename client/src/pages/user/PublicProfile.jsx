import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import SuggestFriends from "../../components/SuggestFriends";

const PublicProfile = () => {
  return (
    <div>
      <div className="profile">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div>
          <div className="naviagate">
            <button onClick={() => history.go(-1)}>
              <i className="fa-sharp fa-solid fa-arrow-left"></i>
            </button>
            &nbsp; Go back
          </div>

          <div className="img">
            <img
              src="https://qph.cf2.quoracdn.net/main-qimg-a8cafcc4acb60054c65bd209e7f5cc79.webp"
              alt="img"
            />
            <div className="profile-btns">
            <div
              to="/user/editprofile/:id/:userName"
              className="btn-secondary"
              style={{ marginLeft: "15rem" }}
            >
              <button>Add Friend</button>
            </div>
            <div
              to="/user/editprofile/:id/:userName"
              className="btn-thrd"
            >
              <button>Message</button>
            </div>
            </div>
          </div>
          <div className="profile-name">
            <h3>Someone FullName</h3>
            <h4>@username</h4>
          </div>
          <div className="profile-bio">
            <h3>Bio</h3>
            <h4>
              Lorem epsom bla bla bla saf dfgd dfgd dfs f ioj seuyh as9i fuih
              sfoi siof sfiou oie frsof s
            </h4>
          </div>
          <div className="profile-list">
            <h3>
              <span>6</span> Posts
            </h3>
            <Link style={{ textDecoration: "none" }}>
              <h3>
                <span>50</span> Friends
              </h3>
            </Link>
          </div>

          <div className="profile-posts">
            <img src="https://picsum.photos/300/301" alt="posts" />
            <img src="https://picsum.photos/300/302" alt="posts" />
            <img src="https://picsum.photos/300/303" alt="posts" />
            <img src="https://picsum.photos/300/304" alt="posts" />
            <img src="https://picsum.photos/300/305" alt="posts" />
            <img src="https://picsum.photos/300/306" alt="posts" />
          </div>
        </div>
        <div className="sgst-sec" >
          <SuggestFriends />
        </div>
      </div>
    </div>
  );
};

export default PublicProfile
