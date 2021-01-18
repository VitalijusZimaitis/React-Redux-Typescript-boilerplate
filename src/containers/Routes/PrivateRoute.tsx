import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { withRouter, RouteComponentProps } from "react-router";

interface IPrivateRouteProps extends RouteProps {
  component: React.ComponentClass | React.FC;
}

const PrivateRoute: React.FC<IPrivateRouteProps & RouteComponentProps> = (
  props,
  ...rest
) => {
  const authorized = false;

  return authorized ? (
    <Route component={props.component} exact path={props.path} {...rest} />
  ) : (
    <Redirect to="/" />
  );
};
export default withRouter(PrivateRoute);
