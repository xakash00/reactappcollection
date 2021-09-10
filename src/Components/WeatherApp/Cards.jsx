import React from "react";

const Cards = (props) => {
  return (
    <>
      <div className="cards">
        <div className="container">
          <div className="row">
            <div className="col">
              <div>
                <div className="card-body">
                  <i className="fas fa-temperature-high fa-5x"></i><hr/>
                  <h5 className="card-title">Feels Like</h5>
                  <p className="card-text">{props.feels} °c</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div>
                <div className="card-body">
                  <i className="fas fa-water fa-5x"></i><hr/>
                  <h5 className="card-title">Humidity</h5>
                  <p className="card-text">{props.humidity} g/kg</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div>
                <div className="card-body">
                  <i className="fas fa-wind fa-5x"></i><hr/>
                  <h5 className="card-title">Wind Speed</h5>
                  <p className="card-text">{props.wind} mph</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div>
                <div className="card-body">
                  <i className="far fa-clock fa-5x"></i><hr/>
                  <h5 className="card-title">Timezone</h5>
                  <p className="card-text">{props.timezone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
