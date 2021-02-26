import * as React from "react";
import "./assets/styles/css/App.css";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import i18n from "i18next";
import AppRoutes from "./containers/Routes/AppRoutes";
import * as Sentry from "@sentry/react";
import ErrorPage from "./containers/Error/ErrorPage";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Sentry.ErrorBoundary
      fallback={<ErrorPage message={t("internal.server.error")} />}
    >
      <ErrorBoundary>
        <BrowserRouter>
          <button onClick={() => i18n.changeLanguage("en-GB")}>
            Change language
          </button>
          <hr />
          <AppRoutes />
        </BrowserRouter>
      </ErrorBoundary>
    </Sentry.ErrorBoundary>
  );
};

export default App;
