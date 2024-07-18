import React from 'react';
import './HomePage.css';
import FAQ from './FAQ';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <div className="hero">
      <img src="/images/main.jpeg" alt={t('welcomeTitle')} />
      <div className="hero-text">
        <h1>{t('welcomeTitle')}</h1>
      </div>
    </div>
  );
};


const WhoAreWe = () => {
  const { t } = useTranslation();
  return (
    <section className="who-are-we-section" aria-labelledby="who-are-we-heading">
      <h2 id="who-are-we-heading" className="who-are-we-heading">{t('whoAreWe')}</h2>
      <div className="who-are-we">
        <p>{t('whoAreWeDescription')}</p>
      </div>
    </section>
  );
};

const Sponsor = ({ logo, name }) => {
  const { t } = useTranslation();
  return (
    <div className="sponsor">
      <img src={logo} alt={t(name)} className="sponsor-logo" />
      <p className="sponsor-name">{t(name)}</p>
    </div>
  );
};

const Sponsors = () => {
  const { t } = useTranslation();
  return (
    <section className="sponsors-section" aria-labelledby="sponsors-title">
      <h2 id="sponsors-title" className="sponsors-title">{t('sponsorsTitle')}</h2> 
      <div className="sponsors-container">
        <Sponsor logo="/images/logitech.png" name="sponsorLogitech" />
        <Sponsor logo="/images/redbull.png" name="sponsorRedBull" />
        <Sponsor logo="/images/coca-cola.jpg" name="sponsorCocaCola" />
      </div>
    </section>
  );
};

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <WhoAreWe />
            <Sponsors />
            <FAQ />
        </>
    );
};

export default HomePage;
