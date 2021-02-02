import * as React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../Routes";
import { useTranslation } from "react-i18next";

const Home: React.FC = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <>
      <h1>
        {t("Welcome to React", {
          color: "red",
          interpolation: { escapeValue: false },
        })}
      </h1>
      <Link to={routes.userList}>Users</Link>
      <br />
      <Link to={routes.forms}>Formik</Link>
    </>
  );
};

export default Home;
