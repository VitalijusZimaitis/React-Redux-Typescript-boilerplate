import * as React from "react";
import RouteManager from "../RouteManager/RouteManager";
import { Routes } from "../../Routes";

const AppRoutes: React.FC = (): JSX.Element => {
  return <RouteManager routes={Routes} />;
};

export default AppRoutes;
