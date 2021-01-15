import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "../../Routes";
import Home from "../../components/Home";
import UserListContainer from "../UserListContainer";
import FormsContainer from "../FormsContainer";

const AppRoutes: React.FC = (): JSX.Element => {
  return (
    <Switch>
      <Route key={"home"} exact path={routes.home} component={Home} />
      <Route
        key={"forms"}
        exact
        path={routes.forms}
        component={FormsContainer}
      />
      <Route
        key={"user-list"}
        exact
        path={routes.userList}
        component={UserListContainer}
      />
    </Switch>
  );
};

export default AppRoutes;
