import * as React from "react";
import { Route, RouteProps } from "react-router-dom";
import { ReactNode, Suspense } from "react";

interface IUnauthorizedRouteProps extends RouteProps {
  component: React.ComponentClass | React.FC;
  fallback: NonNullable<ReactNode> | null;
}

const UnauthorizedRoute: React.FC<IUnauthorizedRouteProps> = (
  props,
  ...rest
): JSX.Element => {
  return (
    <Suspense fallback={props.fallback}>
      <Route component={props.component} exact path={props.path} {...rest} />
    </Suspense>
  );
};

export default UnauthorizedRoute;
