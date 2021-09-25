import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Routing from "./Components/Routing";

const App = () => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#082c6c";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#f5f5f5";
    }
  };

  return (
    <>
      <NavBar mode={mode} toggleMode={toggleMode} />
      <Routing mode={mode} />
      <Footer mode={mode} />
    </>
  );
};

export default App;
