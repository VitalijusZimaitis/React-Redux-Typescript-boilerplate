import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import withSuspense from "../../components/Suspense/Suspense";
import { RouteType } from "../../types/Route";

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
          authorized,
        } = route;

        const redirectPath = redirect ? redirect(true) : "";
        const RouteComponent = redirect ? (
          <Redirect to={redirectPath} />
        ) : (
          withSuspense(Cmp)
        );

        if (authorized) {
          //Custom logic for authorized Route
          return <h1>Route is authorized</h1>;
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
