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
          <li className="container-description">{t('education-description-header-1')}</li>
          <li className="container-description-body">{t('education-description-2')}</li>
          <li className="container-description">{t('education-description-header-2')}</li>
          <li className="container-description-body">{t('education-description-2')}</li>
        </li>
        <li className="topic">
          <li className="container">{t('experience')}</li>
          <li className="container-description">{t('experience-description-header-1')}</li>
          <li className="container-description">{t('experience-description-1')}</li>
          <li className="container-description">{t('experience-description-header-2')}</li>
          <li className="container-description">{t('experience-description-2')}</li>
          <li className="container-description">{t('experience-description-header-3')}</li>
          <li className="container-description">{t('experience-description-3')}</li>
        </li>
        <li className="topic">
          <li className="container">{t('projects')}</li>
          <li className="container-description">{t('projects-description-header-1')}</li>
          <li className="container-description-body">{t('projects-description-2')}</li>
          <li className="container-description">{t('projects-description-header-2')}</li>
          <li className="container-description-body">{t('projects-description-2')}</li>
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