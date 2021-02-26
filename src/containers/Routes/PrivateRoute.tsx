import React, { ReactNode, Suspense } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { withRouter, RouteComponentProps } from "react-router";

interface IPrivateRouteProps extends RouteProps {
  component: React.ComponentClass | React.FC;
  fallback: NonNullable<ReactNode> | null;
}

const PrivateRoute: React.FC<IPrivateRouteProps & RouteComponentProps> = (
  props,
  ...rest
) => {
  //Authorization logic
  const authorized = false;

  if (!authorized) {
    return <Redirect to="/" />;
  }

  return (
    <Suspense fallback={props.fallback}>
      <Route component={props.component} exact path={props.path} {...rest} />
    </Suspense>
  );
};
export default withRouter(PrivateRoute);
