import React, { useState } from 'react';
import './FAQ.css';
import { useTranslation } from 'react-i18next';

const FAQItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-title" onClick={toggleOpen}>
        {title}
      </div>
      {isOpen && <div className="faq-content">{content}</div>}
    </div>
  );
};

const FAQ = () => {
  const { t } = useTranslation();

  return (
    <section className="faq-section" id="faq">
      <h2 className="faq-heading">{t('faqHeading')}</h2>
      <div className="faq-container">
        <FAQItem
          title={t('faqTournamentSchedulesTitle')}
          content={t('faqTournamentSchedulesContent')}
        />
        <FAQItem
          title={t('faqPricingTitle')}
          content={t('faqPricingContent')}
        />
        <FAQItem
          title={t('faqSponsorsInformationTitle')}
          content={t('faqSponsorsInformationContent')}
        />
      </div>
    </section>
  );
};

export default FAQ;
