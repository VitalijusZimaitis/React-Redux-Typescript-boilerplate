import * as React from "react";
import "./assets/styles/css/App.css";
import { BrowserRouter, Route } from "react-router-dom";
import UserListContainer from "./containers/UserListContainer";
import { routes } from "./Routes";
import ErrorBoundary from "./ErrorBoundary";
import Home from "./components/Home";
import i18n from "i18next";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <button onClick={() => i18n.changeLanguage("en-GB")}>Change</button>
        <Route key={"home"} exact path={routes.home} component={Home} />
        <Route
          key={"user-list"}
          exact
          path={routes.userList}
          component={UserListContainer}
        />
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
