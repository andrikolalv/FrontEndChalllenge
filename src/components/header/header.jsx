import React, { Component } from "react";
import "./header.scss";

class header extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/#">
          El Baratón
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                <i className="fas fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default header;
