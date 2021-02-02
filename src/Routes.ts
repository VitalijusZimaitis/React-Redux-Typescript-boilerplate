import { RouteType } from "./types/Route";
import * as React from "react";
const Home = React.lazy(
  () => import(/* webpackChunkName: "HomePage" */ "./containers/Pages/Home")
);
const Forms = React.lazy(
  () => import(/* webpackChunkName: "Forms" */ "./containers/Pages/Forms")
);
const Users = React.lazy(
  () => import(/* webpackChunkName: "Users" */ "./containers/Pages/Users")
);
const NotFound = React.lazy(
  () => import(/* webpackChunkName: "NotFound" */ "./containers/Error/NotFound")
);

export const routes = {
  home: "/",
  userList: "/users",
  userProfile: "/user/:id",
  forms: "/forms",
};

export const Routes: RouteType = {
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
    path: "/test",
    exact: true,
    redirect: () => {
      return `/`;
    },
  },
  authorized: {
    path: "/authorized",
    authorized: true,
    exact: true,
    component: Users,
  },
  notFound: {
    path: "*",
    exact: false,
    component: NotFound,
  },
};
