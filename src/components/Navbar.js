import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#collapsing-links"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <Link to="/" className="navbar-brand">Cameron's Blog</Link>
        </div>
        <div className="collapse navbar-collapse" id="collapsing-links">
          <ul className="nav navbar-nav">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/links">Links</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
