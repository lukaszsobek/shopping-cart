import React, { Component } from 'react';
import '../assets/styles/App.css';

import TopBar from "./TopBar";

export default class App extends Component {
  render() {
    return (
      <div className="shopping-cart">
        <TopBar />
      </div>
    );
  }
}