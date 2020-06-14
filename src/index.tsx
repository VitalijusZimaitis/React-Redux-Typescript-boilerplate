import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/Store";
import { Provider } from "react-redux";
import App from "./App";
import i18n from "./config/i18next";
import { I18nextProvider } from "react-i18next";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
