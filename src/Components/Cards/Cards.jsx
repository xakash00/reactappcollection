import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.css";

const Cards = (props) => {
  return (
    <>
      <div className="col-md-3 col-10 mx-auto">
        <div className="card card-item" style={{background:"none"}}>
          <NavLink to={props.link}>
            <img className="card-img-top" src={props.imgsrc} alt="Card cap" />
          </NavLink>

          <div className="card-body">
            <h5
              className="card-title text-center"
              style={{ color: props.mode === "dark" ? "#00FFFF" : "#28d" }}
            >
              {props.title}
            </h5>
            <p
              className="card-text text-center"
              style={{ color: props.mode === "light" ? "#000" : "#fff" }}
            >
              {props.para}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
