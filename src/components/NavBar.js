import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ButtonContainer from "./ButtonContainer";

class NavBar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm nabar-dark px-sm-5">
        <Link to="/">
          <i className="fas fa-igloo"></i>
        </Link>
        {/* <ul className="navbar-nav.align-items-center"> */}
        {/* <li className="nav-item ml-5"> */}
        <Link to="/" className="nav-link">
          Products
        </Link>
        {/* </li> */}
        {/* </ul> */}
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fab fa-opencart"></i>Cart
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    //1rem=16px
    text-transform: capitalize;
  }
`;

export default NavBar;
