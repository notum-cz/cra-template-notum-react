import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as Sentry from "@sentry/react";
import { Provider } from "react-redux";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store";

if (process.env.NODE_ENV === "production") {
  Sentry.init({ dsn: process.env.REACT_APP_SENTRY_DNS });
}

ReactDOM.render(
  // TODO: Add <React.StrictMode> when lingui@v3 will be released
  <Provider store={store}>
    {/* See https://emotion.sh/docs/theming for more info */}
    {/* <ThemeProvider theme={theme}> */}
    <App />
    {/* </ThemeProvider> */}
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
