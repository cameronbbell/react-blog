import React from "react";

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
          <a className="navbar-brand" href="#">Brand</a>
        </div>
        <div className="collapse navbar-collapse" id="collapsing-links">
          <ul className="nav navbar-nav">
            <li><a href="#">About</a></li>
            <li><a href="#">Recent Posts</a></li>
            <li><a href="#">Links</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
