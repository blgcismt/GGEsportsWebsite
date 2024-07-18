import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
        <div className="footer-left">
            <img src="/images/logo.png" alt="GG Esports" className="footer-logo" />
            <span className="footer-text">GGEsports</span>
        </div>
        <p className="footer-copy">© 2024 GG Esports. {t('allRightsReserved')}</p>
        <div className="footer-contact">
            <p><FontAwesomeIcon icon={faPhone} /> +1 234 567 890</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> info@ggesports.com</p>
        </div>
    </footer>
  );
};

export default Footer;
