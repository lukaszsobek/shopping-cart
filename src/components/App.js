import React, { Component } from 'react';
import '../assets/styles/App.css';

import CartHeader from "./CartHeader/index";
import CartContent from "./CartContent/index";
import CartSummary from "./CartSummary/index";

export default class App extends Component {
  render() {
    return (
      <div className="shopping-cart">
        <CartHeader />
        <CartContent />
        <CartSummary />
      </div>
    );
  }
}