import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { routes } from '../Routes';

const Home: React.FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <h1>
        {t('Welcome to React', {
          color: 'red',
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
