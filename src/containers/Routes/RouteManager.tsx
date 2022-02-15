import React from 'react';
import { Navigate, Route, RouteProps, Routes } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

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
  <Routes>
    {Object.entries(routes).map(([key, route]) => {
      const { path, redirect = null, element, authorized = false } = route;

      const redirectPath = redirect ? redirect(true) : '';

      if (redirect) {
        return <Route element={<Navigate key={key} to={redirectPath} />} path={path} key={key} />;
      }

      if (authorized && !redirect) {
        return (
          <Route element={<PrivateRoute />} path={path} key={key}>
            <Route element={element} path={path} key={key} />
          </Route>
        );
      }

      return <Route element={element} path={path as string} key={key} />;
    })}
  </Routes>
);

export default RouteManager;
