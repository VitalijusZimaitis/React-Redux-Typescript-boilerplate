import * as React from "react";
import { Redirect, Switch } from "react-router-dom";
import { RouteType } from "../../types/Route";
import PrivateRoute from "./PrivateRoute";
import { ReactNode } from "react";
import UnauthorizedRoute from "./UnauthorizedRoute";

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
        const fallback: NonNullable<ReactNode> | null = "Loading...";

        if (redirect) {
          return <Redirect to={redirectPath} />;
        }

        if (authorized && !redirect) {
          return (
            <PrivateRoute
              fallback={fallback}
              key={key}
              path={path}
              exact={exact}
              component={Cmp as React.FC}
            />
          );
        }

        return (
          <UnauthorizedRoute
            fallback={fallback}
            key={key}
            path={path}
            exact={exact}
            component={Cmp as React.FC}
          />
        );
      })}
    </Switch>
  );
};

export default RouteManager;
