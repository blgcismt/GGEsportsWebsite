import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './MessageTeamModal.css';

const MessageTeamModal = ({ onClose }) => {
  const { t } = useTranslation();
  const [selectedTeam, setSelectedTeam] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const teams = [
    'Dragons', 'Wizards', 'Blasters', 'Sharpshooters', 
    'Phantoms', 'Ghosts', 'Strikers', 'Defenders', 
    'Warriors', 'Knights'
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {submitted ? (
          <div className="confirmation">
            <h2>{t('messageSent')}</h2>
            <p>{t('messageConfirmation', { team: selectedTeam })}</p>
            <button onClick={onClose} className="modal-button">{t('close')}</button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <img src="/images/logo.png" alt="GG Esports" className="modal-logo" />
              <h2>{t('messageTeam')}</h2>
            </div>
            <form onSubmit={handleSubmit} className="modal-form">
              <select 
                value={selectedTeam} 
                onChange={(e) => setSelectedTeam(e.target.value)} 
                required
              >
                <option value="" disabled>{t('selectTeam')}</option>
                {teams.map((team, index) => (
                  <option key={index} value={team}>{team}</option>
                ))}
              </select>
              <textarea 
                placeholder={t('yourMessage')} 
                value={message}
                onChange={(e) => setMessage(e.target.value)} 
                required 
                rows="5"
              />
              <button type="submit" className="modal-button">{t('sendMessage')}</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default MessageTeamModal;
