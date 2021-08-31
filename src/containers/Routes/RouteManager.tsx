import React, { ReactNode } from 'react';
import { Redirect, RouteProps, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import UnauthorizedRoute from './UnauthorizedRoute';

export interface IRoute extends RouteProps {
  redirect?: (hasRedirect: boolean) => string;
  authorized?: boolean;
}

export type TRouteType = {
  [key: string]: IRoute;
};

type RouteManageProps = {
  routes: TRouteType;
};

const RouteManager: React.FC<RouteManageProps> = ({ routes }): JSX.Element => (
  <Switch>
    {Object.entries(routes).map(([key, route]) => {
      const {
        path,
        exact = false,
        redirect = null,
        component: Cmp,
        authorized = false,
      } = route;

      const redirectPath = redirect ? redirect(true) : '';
      const fallback: NonNullable<ReactNode> | null = 'Loading...';

      if (redirect) {
        return <Redirect key={key} to={redirectPath} />;
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

export default RouteManager;
