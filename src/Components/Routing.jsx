import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import WeatherApi from "./WeatherApp/WeatherApi";
import DictionarysApi from "./Dictionary/DictionarysApi";
import RandomQuotes from "./RandomQuotes/RandomQuotes"
import MemeGen from "./MemeGenerator.jsx/MemeGen";
import ScrollToTop from "../ScrollToTop";

const Routing = (props) => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={() => <Home mode={props.mode} />} />
        <Route exact path="/weather" component={WeatherApi} />
        <Route exact path="/dictionary" component={()=><DictionarysApi mode={props.mode}/>} />
        <Route exact path="/quotes" component={()=><RandomQuotes mode={props.mode}/>} />
        <Route exact path="/meme" component={()=><MemeGen mode={props.mode}/>} />
        <Redirect to="/" />
      </Switch>
      <ScrollToTop />
    </>
  );
};

export default Routing;
