import React from "react";

const Jumbotron = (props) => {
  return (
    <>
      <div>
        <h1
          style={{
            color: props.mode === "light" ? "#28d" : "#00ffff",
          }}
          className="titleQuote text-center my-5"
        >
          Quote Generator
        </h1>
        <div className="jumbotron">
          <div>
            <div className="container">
              <div className="row">
                <div className="col-sm">
                  <h3 style={{ color: "#28d" }} className="display-4">
                    Quotes
                  </h3>
                </div>
                <div className="col-sm">
                  <i
                    onClick={props.tweetQuote}
                    className="fab fa-twitter fa-2x"
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <br />
          <p className="qtext">{props.text}</p>

          <hr className="my-4" />
          <p className="atext">
            By- {props.author === null ? "Anonymous" : props.author}
          </p>
          <p className="lead">
            <br />
            <button className="glow-on-hover" onClick={props.nextQuote}>
              Next
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
