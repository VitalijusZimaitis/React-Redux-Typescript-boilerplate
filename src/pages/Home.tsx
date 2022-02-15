import React from 'react';

import { useTypedTranslations } from 'hooks/useTypedTranslation';

const Home = () => {
  const { t } = useTypedTranslations();

  return (
    <>
      {t('welcome')}
    </>
  );
};

export default Home;
