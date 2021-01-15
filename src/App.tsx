import * as React from "react";
import "./assets/styles/css/App.css";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import i18n from "i18next";
import AppRoutes from "./containers/routes/AppRoutes";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <button onClick={() => i18n.changeLanguage("en-GB")}>
          Change language
        </button>
        <hr />
        <AppRoutes />
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
