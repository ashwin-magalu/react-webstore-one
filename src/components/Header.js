import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <img
            src="../Udhyama.jpg"
            style={{ height: "200px", width: "200px" }}
            alt="Udhyama Logo"
          />
        </Link>
      </div>
    );
  }
}

export default Header;
