import React from "react";
import UsersListContainer from "./containers/UsersListContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/css/App.css";
import ErrorBoundary from "./ErrorBoundary";
import { routes } from "./Routes";
import { UserExample } from "./components/UserExample";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Switch>
          <Route exact path={routes.home} component={UsersListContainer} />
          <Route exact path={routes.user} component={UserExample} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
