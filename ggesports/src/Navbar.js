import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

const Navbar = ({ onSignInClick }) => {
  const location = useLocation();
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const { t } = useTranslation();

  const toggleDropdown = () => setShowLanguageDropdown(!showLanguageDropdown);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowLanguageDropdown(false);
  };

  return (
    <div className="navbar">
      <div className="logo-container">
        <img src="/images/logo.png" alt="GG Esports" className="logo" />
        <span>GGEsports</span>
      </div>
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>{t('home')}</Link>
        <Link to="/tournaments" className={location.pathname === '/tournaments' ? 'active-link' : ''}>{t('tournaments')}</Link>
        <Link to="/standings" className={location.pathname === '/standings' ? 'active-link' : ''}>{t('standings')}</Link>
        <Link to="/coaches" className={location.pathname === '/coaches' ? 'active-link' : ''}>{t('coaches')}</Link>
        <Link to="/profile" className={location.pathname === '/profile' ? 'active-link' : ''}>{t('myProfile')}</Link>
        <Link to="#" onClick={onSignInClick} className="sign-in-link">{t('signIn')}</Link>
        <div className="language-switcher">
          <FontAwesomeIcon icon={faGlobe} onClick={toggleDropdown} className="language-icon" />
          {showLanguageDropdown && (
            <ul className="language-dropdown">
              <li onClick={() => changeLanguage('en')}>
                <img src="/images/english.png" alt="English" className="flag-icon" /> English
              </li>
              <li onClick={() => changeLanguage('fr')}>
                <img src="/images/french.png" alt="Français" className="flag-icon" /> Français
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
