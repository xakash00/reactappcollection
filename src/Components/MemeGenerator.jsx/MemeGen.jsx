import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MemeGen.css";

const MemeGenerator = (props) => {
  const [meme, setMeme] = useState({
    title: "",
    url: "",
  });

  const getMeme = async () => {
    const response = await axios.get("https://meme-api.herokuapp.com/gimme");
    setMeme({
      title: response.data.title,
      url: response.data.preview[2],
    });
  };

  const nextMeme = () => {
    getMeme();
  };

  useEffect(() => {
    getMeme();
  }, []);

  return (
    <>
      <div className="main-container container">
        <div
          style={{
            backgroundColor: props.mode === "light" ? "#fff" : "#082c6c",
          }}
          className="card mb-4 border-0 text-center"
        >
          <h3
            style={{
              color: props.mode === "light" ? "#28d" : "#00ffff",
            }}
            className="card-title title"
          >
            Daily Memes
          </h3>

          <div className="card-header">
            <h3 style={{ color: props.mode === "light" ? "#000" : "#fff" }}>
              {meme.title}
            </h3>
            <hr />
            <button onClick={nextMeme} className="glow-on-hover">
              Next
            </button>
          </div>

          <div
            className="card-body card-image"
            style={{
              backgroundColor: props.mode === "light" ? "#fff" : "#082c6c",
            }}
          >
            <div className="container"></div>
            <div>
              <img className="img-fluid" src={meme.url} alt="meme" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemeGenerator;
