import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { routes } from '../../Routes';

const PrivateRoute = () => {
  // Authorization logic
  const authorized = false;

  return authorized ? <Outlet /> : <Navigate to={routes.login} />;
};
export default PrivateRoute;
