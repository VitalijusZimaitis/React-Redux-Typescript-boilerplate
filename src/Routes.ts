import * as React from 'react';

import { TRouteType } from './containers/Routes/RouteManager';

const Home = React.lazy(() => import(/* webpackChunkName: "HomePage" */ './pages/Home'));
const Forms = React.lazy(() => import(/* webpackChunkName: "Forms" */ './pages/Forms'));
const Users = React.lazy(() => import(/* webpackChunkName: "Users" */ './pages/Users'));
const NotFound = React.lazy(
  () => import(/* webpackChunkName: "NotFound" */ './containers/Error/NotFound'),
);

export const routes = {
  home: '/',
  userList: '/users',
  userProfile: '/user/:id',
  forms: '/forms',
};

export const Routes: TRouteType = {
  home: {
    path: routes.home,
    exact: true,
    component: Home,
  },
  forms: {
    path: routes.forms,
    exact: true,
    component: Forms,
  },
  userList: {
    path: routes.userList,
    exact: true,
    component: Users,
  },
  test: {
    path: '/test',
    exact: true,
    redirect: () => '/',
  },
  authorized: {
    path: '/authorized',
    authorized: true,
    exact: true,
    component: Users,
  },
  notFound: {
    path: '*',
    exact: false,
    component: NotFound,
  },
};
