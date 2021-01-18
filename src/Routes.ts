import { RouteType } from "./types/Route";
import * as React from "react";
const Home = React.lazy(
  () => import(/* webpackChunkName: "HomePage" */ "./components/Home")
);
const FormsContainer = React.lazy(() => import("./containers/FormsContainer"));
const UserListContainer = React.lazy(
  () => import("./containers/UserListContainer")
);
const NotFound = React.lazy(() => import("./containers/Error/NotFound"));

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
    component: FormsContainer,
  },
  userList: {
    path: routes.userList,
    exact: true,
    component: UserListContainer,
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
    component: UserListContainer,
  },
  notFound: {
    path: "*",
    exact: false,
    component: NotFound,
  },
};
