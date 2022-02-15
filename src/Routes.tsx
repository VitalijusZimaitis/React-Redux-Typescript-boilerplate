import React, { lazy } from 'react';

import { TRouteType } from './containers/Routes/RouteManager';
import { withSuspense } from './hoc/withSuspense';

const Home = withSuspense(lazy(() => import('pages/Home')));
const Login = withSuspense(lazy(() => import('pages/Auth/Login')));
const NotFound = withSuspense(lazy(() => import('pages/Error/NotFound')));

export const routes = {
  home: '/',
  login: '/login',
};

export const Routes: TRouteType = {
  home: {
    path: routes.home,
    authorized: true,
    element: <Home />,
  },
  login: {
    path: routes.login,
    element: <Login />,
  },
  notFound: {
    path: '*',
    element: <NotFound />,
  },
};
