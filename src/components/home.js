import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <nav className="home-page-nav">
        <ul className="home-page-nav-ul">
          <li>
            <Link to="/home.js" className="home-page-nav-li">Home</Link>
          </li>
          <li>
            <Link to="/todos" className="home-page-nav-li">Todos</Link>
          </li>
          <li>
            <Link to="/formcomponents" className="home-page-nav-li">Form Components</Link>
          </li>
          <li>
            <Link to="/countrieslist" className="home-page-nav-li">Countries</Link>
          </li>
          <li>
            <Link to="/mobxtodo" className="home-page-nav-li">MobX Todo</Link>
          </li>
          <li>
            <Link to="/GridMemoryGame" className="home-page-nav-li">Page1</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
