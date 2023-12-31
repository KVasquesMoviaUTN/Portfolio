import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t('about')}</h2>
      <p>{t('description')}</p>
    </div>
  );
};

export default AboutMe;