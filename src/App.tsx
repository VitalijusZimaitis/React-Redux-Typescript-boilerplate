import React from "react";
import UsersListContainer from "./containers/UsersListContainer";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles/css/App.css";
import ErrorBoundary from "./ErrorBoundary";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Route exact path={"/"} component={UsersListContainer} />
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
