import React from "react";

import AllCards from "./Cards/AllCards";

const Home = (props) => {
  return (
    <>
      <div className="homepage">
        <AllCards mode={props.mode}/>
      </div>
    </>
  );
};

export default Home;
