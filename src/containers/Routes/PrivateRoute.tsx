import React, { ReactNode, Suspense } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface IPrivateRouteProps extends RouteProps {
  component: React.ComponentClass | React.FC;
  fallback: NonNullable<ReactNode> | null;
}

const PrivateRoute: React.FC<IPrivateRouteProps & RouteComponentProps> = (
  props,
  ...rest
) => {
  // Authorization logic
  const authorized = false;
  const { fallback, component, path } = props;

  if (!authorized) {
    return <Redirect to="/" />;
  }

  return (
    <Suspense fallback={fallback}>
      <Route component={component} exact path={path} {...rest} />
    </Suspense>
  );
};
export default withRouter(PrivateRoute);
