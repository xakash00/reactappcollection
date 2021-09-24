import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactAudioPlayer from "react-audio-player";
import "./Dictionary.css";

const DictionarysApi = (props) => {
  const [wordFromButtonClick, setWordFromButtonClick] = useState("welcome");
  const [search, setSearch] = useState("welcome");
  const [words, setWords] = useState({
    word: "",
    meaning: "",
    phonetics: "",
    syno: [],
    sound: "",
    example: "",
  });

  const handleClick = () => {
    setWordFromButtonClick(search);
  };

  const wordSearch = async () => {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en_US/${wordFromButtonClick}`
    );
    setWords({
      word: response.data[0].word,
      phonetics: response.data[0].phonetic,
      syno: response.data[0].meanings[0].definitions[0].synonyms,
      meaning: response.data[0].meanings[0].definitions[0].definition,
      example: response.data[0].meanings[0].definitions[0].example,
      sound: response.data[0].phonetics[0].audio,
    });
  };

  useEffect(() => {
    /* eslint-disable */
    wordSearch();
  }, [wordFromButtonClick]);

  return (
    <>
      <div className="maincont container">
        <h1
          style={{
            color: props.mode === "light" ? "#28d" : "#00ffff",
          }}
          className="titleDict text-center"
        >
          Dictionary App
        </h1>
        <div className="jumbotron">
          <input
            className="form-control-sm mx-2"
            type="text"
            placeholder="type word to search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <button className="glow-on-hover" type="button" onClick={handleClick}>
            Search
          </button>

          <div className="my-3 mx-2">
            <p className="placed">
              Word : <span className="word">{words.word}</span>
            </p>
            <p className="placed">
              Phonetics : <span className="phonetic">{words.phonetics}</span>
            </p>
            <p className="placed">
              Meaning : <span className="meaning">{words.meaning}</span>
            </p>
            <p className="placed">
              Example :<span className="example"> {words.example}</span>
            </p>
            <p>
              <button
                className="btn btn-info"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Synonyms
              </button>
            </p>
            <div className="collapse" id="collapseExample">
              <div className="card card-body">
                {words.syno.map((item) => (
                  <li>{item}</li>
                ))}
              </div>
            </div>
            <hr className="my-4" />
            <ReactAudioPlayer
              className="audio"
              src={words.sound}
              autoPlay
              controls
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DictionarysApi;
