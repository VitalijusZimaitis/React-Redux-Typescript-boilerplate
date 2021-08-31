import React, { ReactNode, Suspense } from 'react';
import { Route, RouteProps } from 'react-router-dom';

interface IUnauthorizedRouteProps extends RouteProps {
  component: React.ComponentClass | React.FC;
  fallback: NonNullable<ReactNode> | null;
}

const UnauthorizedRoute: React.FC<IUnauthorizedRouteProps> = (
  props,
  ...rest
): JSX.Element => {
  const { fallback, component, path } = props;
  return (
    <Suspense fallback={fallback}>
      <Route component={component} exact path={path} {...rest} />
    </Suspense>
  );
};

export default UnauthorizedRoute;
