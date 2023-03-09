import React from "react";
import { Link } from "react-router-dom";

const SuggestFriends = () => {
  return (
    <div className="suggest">
      <h2>You might like</h2>
      <div className="suggest-main">
        <div className="sgst-img">
          <Link to="/user/public_profile/:id/:userName">
            <img
              src="https://qph.cf2.quoracdn.net/main-qimg-a8cafcc4acb60054c65bd209e7f5cc79.webp"
              alt="dp"
            />
          </Link>
        </div>
        <div className="names">
          <Link to="/user/public_profile/:id/:userName" style={{textDecoration : "none", color : "black"}}>
            <h3>Someone fullName</h3>
            <h4>@someone</h4>
          </Link>
        </div>
        <div className="btn-thrd">
          <button>Add Friend</button>
        </div>
      </div>
      <div className="suggest-main">
        <div className="sgst-img">
          <Link to="/user/public_profile/:id/:userName">
            <img
              src="https://qph.cf2.quoracdn.net/main-qimg-a8cafcc4acb60054c65bd209e7f5cc79.webp"
              alt="dp"
            />
          </Link>
        </div>
        <div className="names">
          <Link to="/user/public_profile/:id/:userName" style={{textDecoration : "none", color : "black"}}>
            <h3>Someone fullName</h3>
            <h4>@someone</h4>
          </Link>
        </div>
        <div className="btn-thrd">
          <button>Add Friend</button>
        </div>
      </div>
      <div className="suggest-main">
        <div className="sgst-img">
          <Link to="/user/public_profile/:id/:userName">
            <img
              src="https://qph.cf2.quoracdn.net/main-qimg-a8cafcc4acb60054c65bd209e7f5cc79.webp"
              alt="dp"
            />
          </Link>
        </div>
        <div className="names">
          <Link to="/user/public_profile/:id/:userName" style={{textDecoration : "none", color : "black"}}>
            <h3>Someone fullName</h3>
            <h4>@someone</h4>
          </Link>
        </div>
        <div className="btn-thrd">
          <button>Add Friend</button>
        </div>
      </div>
      <div className="suggest-main">
        <div className="sgst-img">
          <Link to="/user/public_profile/:id/:userName">
            <img
              src="https://qph.cf2.quoracdn.net/main-qimg-a8cafcc4acb60054c65bd209e7f5cc79.webp"
              alt="dp"
            />
          </Link>
        </div>
        <div className="names">
          <Link to="/user/public_profile/:id/:userName" style={{textDecoration : "none", color : "black"}}>
            <h3>Someone fullName</h3>
            <h4>@someone</h4>
          </Link>
        </div>
        <div className="btn-thrd">
          <button>Add Friend</button>
        </div>
      </div>
    </div>
  );
};

export default SuggestFriends;
