import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

const Footer = (props) => {
  return (
    <>
      <div>
        <div className="footer-dark fixed-bottom-0" style={{backgroundColor:props.mode==="light"?"#28d":"#000"}}>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-3 item">
                  <h3>About</h3>
                  <ul>
                    <li>
                      <a
                        href="https://github.com/xakash00"
                        rel="noreferrer"
                        target="_blank"
                      >
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://facebook.com"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Twitter
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-3 item">
                <h3>Explore</h3>
                  <ul>
                    <li>
                     <NavLink to = "/weather">
                        Weather App
                     </NavLink>
                    </li>
                    <li>
                    <NavLink to = "/dictionary">
                        Dictionary App
                     </NavLink>
                    </li>
                    <li>
                    <NavLink to = "/quotes">
                        Quotes App
                     </NavLink>
                    </li>
                    <li>
                    <NavLink to = "/meme">
                       Reddit Memes
                     </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 item text">
                  <h3>Akash's App</h3>
                  <p>
                    This App is a compilation of ReactJs applications I
                    created to potray my front-end web development skills.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
