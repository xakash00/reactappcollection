import React from "react";

const Form = (props) => {
  return (
    <>
      <div>
        <h1 className="titleWeather text-center">Weather App</h1>
        <div className="cityForm mx-auto my-3">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <input
                  type="text"
                  className="form-controls mx-lg-5"
                  placeholder="City Name"
                  value={props.city}
                  onChange={(event) => props.setCity(event.target.value)}
                />
              </div>
              <div className="col-sm">
                <button
                  type="submit"
                  className="glow-on-hover"
                  onClick={props.handleClick}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
