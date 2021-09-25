import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import logo from "./images/icon.png";

const NavBar = (props) => {
  return (
    <>
      <div style={{ color: props.mode === "dark" ? "#fff" : "#000" }}>
        <nav
          className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        >
          <NavLink className="navbar-brand" to="/">
            <div className="container">
              <div className="row">
                <div
                  className="col-sm"
                  style={{ color: props.mode === "dark" ? "#00FFFF" : "#28d" }}
                >
                  Akash's Apps
                  <img className="logo" src={logo} alt="icon" />
                </div>
              </div>
            </div>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-3">
                <NavLink className="nav-link active" to="/weather">
                  Weather<span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink className="nav-link active" to="/dictionary">
                  Dictionary
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink className="nav-link active" to="/quotes">
                  Quotes
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink className="nav-link active" to="/meme">
                  Reddit Memes
                </NavLink>
              </li>
            </ul>
            <div
              className="form-check form-switch"
              style={{
                color: props.mode === "light" ? "#000" : "#fff",
              }}
            >
              <input
                onClick={props.toggleMode}
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode === "light" ? (
                  <span
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Enable Dark Mode"
                  >
                    <i className="fa fa-moon"></i>
                  </span>
                ) : (
                  <span
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Enable Light Mode"
                  >
                    <i className="fa fa-sun"></i>
                  </span>
                )}
              </label>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
