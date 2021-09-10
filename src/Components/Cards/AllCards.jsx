import React from "react";
import CardData from "./CardData";
import Cards from "./Cards";

const AllCards = (props) => {
  return (
    <div>
      <div className="allcard container">
        <h1
          className="text-center my-3"
          style={{ color: props.mode === "dark" ? "#00FFFF" : "#28d" }}
        >
          Our Apps
        </h1>
        <hr />
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {CardData.map((val, index) => {
                  return (
                    <Cards
                      mode={props.mode}
                      key={val.title}
                      imgsrc={val.imgsrc}
                      title={val.title}
                      para={val.para}
                      link={val.link}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCards;
