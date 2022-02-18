import React from 'react';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation();

  return <>{t('login')}</>;
};

export default Login;
