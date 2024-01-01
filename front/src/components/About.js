import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles/About.css';

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="about-container">
      <ul>
        <li className="topic">
          <li className="container">{t('about')}</li>
          <li className="container-description">{t('about-description')}</li>
        </li>
        <li className="topic">
          <li className="container">{t('education')}</li>
          <li className="container-description">{t('education-description')}</li>
        </li>
        <li className="topic">
          <li className="container">{t('experience')}</li>
          <li className="container-description">{t('experience-description')}</li>
        </li>
        <li className="topic">
          <li className="container">{t('habilities')}</li>
          <li className="container-description">{t('habilities-description')}</li>
        </li>
        <li className="topic">
          <li className="container">{t('tech-habilities')}</li>
          <li className="container-description">{t('tech-habilities-description')}</li>
        </li>
      </ul>
    </div>
  );
};

export default About;