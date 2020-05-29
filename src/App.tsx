import React, { Suspense } from "react";
import "./App.css";
import { I18nProvider } from "@lingui/react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { getSelectedLanguage } from "./store/general/selectors";
import routes from "./router";

function App(): JSX.Element {
  const language = useSelector(getSelectedLanguage);

  const renderLoading = (text: string): JSX.Element => {
    return <h1>{text}</h1>;
  };

  return (
    <Suspense fallback={renderLoading("Aplikace se nacita")}>
      <I18nProvider language={language}>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              {routes.map((route) => (
                <Route key={route.path} path={route.path} {...route.props} />
              ))}
            </Switch>
          </div>
        </Router>
      </I18nProvider>
    </Suspense>
  );
}

export default App;
