import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
export default function Apphome() {
  return (
    <div>
        <nav className="home-page-nav">
          <ul className="home-page-nav-ul">
            <li>
              <Link to="/home.js" className="home-page-nav-li">Home</Link>
            </li>
            <li>
              <Link to="/formcomponents" className="home-page-nav-li">Form Components</Link>
            </li>
            <li>
              <Link to="/countrieslist" className="home-page-nav-li">Countries</Link>
            </li>
          </ul>
        </nav>
      </div>
  );
}
