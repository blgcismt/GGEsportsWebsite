import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Modal.css'; 

const SignInModal = ({ onClose, onSwitchToRegister }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [staySignedIn, setStaySignedIn] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Sign In Details:", { email, password, staySignedIn });
    setShowConfirmation(true);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {showConfirmation ? (
          <div className="confirmation">
            <h2>{t('signInSuccessful')}</h2>
            <p>{t('signInSuccessMessage')}</p>
            <button onClick={handleCloseConfirmation} className="modal-button">{t('close')}</button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <img src="/images/logo.png" alt="GG Esports" className="modal-logo" />
              <h2>{t('welcomeTitle')}</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder={t('yourEmail')} 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
              <input 
                type="password" 
                placeholder={t('password')} 
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
              <div className="stay-signed-in">
                <input 
                  type="checkbox" 
                  checked={staySignedIn}
                  onChange={(e) => setStaySignedIn(e.target.checked)}
                />
                <label>{t('keepMeSignedIn')}</label>
              </div>
              <button type="submit" className="modal-button">{t('signIn')}</button>
            </form>
            <button onClick={onSwitchToRegister} className="modal-button">{t('registerNow')}</button>
          </>
        )}
      </div>
    </div>
  );
};

export default SignInModal;
