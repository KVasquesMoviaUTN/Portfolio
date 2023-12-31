import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (    
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('introduction')}</p>
    </div>
  );
};

export default Home;