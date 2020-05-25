import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
//npm install --save react-router-dom to install react router : Imported to index.js
//npm install --save styled-components : to include styled-components from website https://styled-components.com/
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//npm install --save bootstrap in command prompt
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Header from "./components/Header";
import Modal from "./components/Modal";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}
export default App;
