import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Modal.css'; 

const RegistrationModal = ({ onClose, show, resetOnClose }) => {
    const { t } = useTranslation();
    const [tab, setTab] = useState('Solo');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    const handleClose = () => {
        if (resetOnClose) {
            setSubmitted(false);
            setTab('Solo'); 
        }
        onClose();
    };

    if (!show) return null;

    return (
        <div className={`modal ${show ? 'show' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={handleClose}>&times;</span>
                <div className="tabs">
                    <button className={`tab-button ${tab === 'Solo' ? 'active' : ''}`} onClick={() => setTab('Solo')}>{t('solo')}</button>
                    <button className={`tab-button ${tab === 'Team' ? 'active' : ''}`} onClick={() => setTab('Team')}>{t('team')}</button>
                </div>
                {submitted ? (
                    <div>
                        <h2>{t('registrationSuccessful')}</h2>
                        <p>{t('thankYouForRegistering')}</p>
                        <button onClick={handleClose}>{t('close')}</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="registration-form">
                        {tab === 'Solo' ? (
                            <>
                                <input type="email" placeholder={t('yourEmail')} required />
                                <input type="text" placeholder={t('username')} required />
                                <button type="submit">{t('registerNow')}</button>
                            </>
                        ) : (
                            <>
                                <input type="email" placeholder={t('yourEmail')} required />
                                <input type="text" placeholder={t('captainUsername')} required />
                                <input type="text" placeholder={t('teamName')} required />
                                <button type="submit">{t('registerNow')}</button>
                            </>
                        )}
                    </form>
                )}
            </div>
        </div>
    );
};

export default RegistrationModal;
