import React from 'react';

import { Routes } from '../../Routes';
import RouteManager from './RouteManager';

const AppRoutes: React.FC = (): JSX.Element => <RouteManager routes={Routes} />;

export default AppRoutes;
