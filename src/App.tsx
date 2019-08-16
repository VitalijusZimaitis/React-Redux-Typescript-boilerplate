import React from "react";
import UsersListContainer from "./containers/UsersListContainer";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles/css/App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path={"/"} component={UsersListContainer} />
    </BrowserRouter>
  );
};

export default App;
