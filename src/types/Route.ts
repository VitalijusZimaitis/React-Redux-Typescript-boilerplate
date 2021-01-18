import { RouteProps } from "react-router-dom";

export interface TRoute extends RouteProps {
  redirect?: (hasRedirect: boolean) => string;
  authorized?: boolean;
}

export type RouteType = {
  [key: string]: TRoute;
};
