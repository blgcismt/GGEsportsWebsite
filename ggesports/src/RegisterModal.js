import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Modal.css'; 

const RegisterModal = ({ onClose }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Register Details:", { email, password, dob });
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
            <h2>{t('registrationSuccessful')}</h2>
            <p>{t('registrationSuccessMessage')}</p>
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
              <label htmlFor="dob">{t('dateOfBirth')}</label>
              <input 
                type="date" 
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)} 
                required 
              />
              <button type="submit" className="modal-button">{t('registerNow')}</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default RegisterModal;
