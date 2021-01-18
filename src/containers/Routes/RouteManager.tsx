import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import withSuspense from "../../components/Suspense/Suspense";
import { RouteType } from "../../types/Route";
import PrivateRoute from "./PrivateRoute";

type RouteManageProps = {
  routes: RouteType;
};

const RouteManager: React.FC<RouteManageProps> = ({ routes }): JSX.Element => {
  return (
    <Switch>
      {Object.entries(routes).map(([key, route]) => {
        const {
          path,
          exact = false,
          redirect = null,
          component: Cmp,
          authorized = false,
        } = route;

        const redirectPath = redirect ? redirect(true) : "";
        const RouteComponent = redirect ? (
          <Redirect to={redirectPath} />
        ) : (
          withSuspense(Cmp as React.FC)
        );

        if (authorized && !redirect) {
          return (
            <PrivateRoute
              key={key}
              path={path}
              exact={exact}
              component={RouteComponent as React.FC}
            />
          );
        }

        return (
          <Route key={key} path={path} exact={exact}>
            {RouteComponent}
          </Route>
        );
      })}
    </Switch>
  );
};

export default RouteManager;
