import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import { createStore } from "redux";

import App from '../components/App';
import reducers from "../reducers";

describe("App",() => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={createStore(reducers)}>
        <App />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

