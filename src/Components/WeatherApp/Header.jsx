import React from "react";

const Header = (props) => {
  return (
    <>
      <div
      >
        <div className="px-4 py-1 my-4 text-center">
          <h1>{props.name}</h1>
          <h3>
            {props.region}, {props.country}
          </h3>
          <img className="icon" src={props.icon} alt="icon" />
          <h1 className="display-5 fw-bold">{props.temperature}°c</h1>
          <div className="col-lg-6 mx-auto">
            <h2 className="mb-4">{props.text}</h2>
          </div>
          <div>
            <h5>{props.time}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
