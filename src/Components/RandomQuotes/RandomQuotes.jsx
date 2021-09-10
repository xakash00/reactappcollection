import React, { useState, useEffect } from "react";
import Jumbotron from "./Jumbotron";
import "./RandomQuotes.css";

const RandomQuotes = () => {
  const [data, setData] = useState({
    text: "",
    author: "",
  });

  let realData = "";
  let quotesData = "";

  const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
      let data = await fetch(api);
      realData = await data.json();
      getNewQuotes();
    } catch (error) {}
  };

  const getNewQuotes = () => {
    let randomNum = Math.floor(Math.random() * 1000);
    quotesData = realData[randomNum];
    setData({
      text: quotesData.text,
      author: quotesData.author,
    });
  };

  const tweetQuote = () => {
    let postQuote = `https://twitter.com/intent/tweet?text=${data.text}`;
    window.open(postQuote);
  };

  useEffect(() => {
    /* eslint-disable */
    getQuotes();
  }, []);

  return (
    <>
      <div className="quoteBox">
        <Jumbotron
          text={data.text}
          author={data.author}
          tweetQuote={tweetQuote}
          nextQuote={getQuotes}
        />
      </div>
    </>
  );
};

export default RandomQuotes;
