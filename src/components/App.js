import React, { Component } from 'react';
import '../assets/styles/App.css';

import CartHeader from "./CartHeader/index";
import CartContent from "./CartContent/index";
import CartSummary from "./CartSummary/index";
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