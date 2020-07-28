import React, { Suspense, useEffect } from "react";
import "./App.css";
import { I18nProvider } from "@lingui/react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import * as Sentry from "@sentry/react";
import { getSelectedLanguage } from "./store/general/selectors";
import routes from "./router";
import { AppLanguages } from "./helpers/constants/languages";
import catalogCs from "./plugins/locales/cs/messages";
import catalogEn from "./plugins/locales/en/messages";
import { ErrorFallback } from "./ErrorFallback";

const catalogs: { [key in AppLanguages]: any } = {
  cs: catalogCs,
  en: catalogEn,
};

function App(): JSX.Element {
  const language = useSelector(getSelectedLanguage);

  const renderLoading = (text: string): JSX.Element => {
    return <h1>{text}</h1>;
  };

  return (
    <Sentry.ErrorBoundary fallback={ErrorFallback} showDialog>
      <Suspense fallback={renderLoading("Aplikace se nacita")}>
        <I18nProvider language={language} catalogs={catalogs}>
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
    </Sentry.ErrorBoundary>
  );
}

export default App;
