import React, { Component } from "react";
import "../assets/styles/App.css";

import CartHeader from "./CartHeader";
import CartContent from "./CartContent";
import CartSummary from "./CartSummary";
import Modal from "./Modal";

export default class App extends Component {
  render() {
    return (
      <div className="shopping-cart">
        <CartHeader />
        <CartContent />
        <CartSummary />
        <Modal />
      </div>
    );
  }
}