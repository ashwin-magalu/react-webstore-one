import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart,
          } = value.detailProducts;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}
              {/* Product Info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>Product name: {title}</h2>
                  <h5 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Product of:{" "}
                    <span className="text-uppercase">{company}</span>
                  </h5>
                  <h5 className="text-blue">
                    <strong>
                      Price:<span> ₹ </span>
                      {price}
                      <span>/- </span>
                    </strong>
                  </h5>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Product info:
                  </p>
                  <p className="text-muted lead"> {info}</p>
                  <div>
                    <Link to="/">
                      <ButtonCont>Back to Products</ButtonCont>
                    </Link>
                    <ButtonCont
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "In cart" : "Add to cart"}
                    </ButtonCont>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
const ButtonCont = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${(props) =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: ${(props) => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &: hover {
    background: ${(props) =>
      props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;

export default Details;
