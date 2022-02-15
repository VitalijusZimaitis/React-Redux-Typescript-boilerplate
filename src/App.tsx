import React from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import * as Sentry from '@sentry/react';

import AppRoutes from './containers/Routes/AppRoutes';
import ErrorPage from './pages/Error/ErrorPage';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
  const { t } = useTranslation();

  return (
    <Sentry.ErrorBoundary fallback={<ErrorPage message={t('internal.server.error')} />}>
      <ErrorBoundary>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ErrorBoundary>
    </Sentry.ErrorBoundary>
  );
};

export default App;
