import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ProfileModal.css';

const ProfileModal = ({ profile, onSave, onClose }) => {
  const { t } = useTranslation();
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [team, setTeam] = useState(profile.team);
  const [bio, setBio] = useState(profile.bio);
  const [profilePic, setProfilePic] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave({ name, email, team, bio, profilePic });
  };

  const handleFileChange = (event) => {
    setProfilePic(event.target.files[0]);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="modal-header">
          <img src="/images/logo.png" alt="GG Esports" className="modal-logo" />
          <h2>{t('createUpdateProfile')}</h2>
        </div>
        <form onSubmit={handleSubmit} className="modal-form">
          <input 
            type="text" 
            placeholder={t('name')} 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          <input 
            type="email" 
            placeholder={t('email')} 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="text" 
            placeholder={t('team')} 
            value={team}
            onChange={(e) => setTeam(e.target.value)} 
            required 
          />
          <textarea 
            placeholder={t('profileDescription')} 
            value={bio}
            onChange={(e) => setBio(e.target.value)} 
            required 
          />
          <div className="file-input-container">
            <label htmlFor="profilePic">{t('profilePicture')}</label>
            <input 
              type="file" 
              id="profilePic" 
              onChange={handleFileChange} 
            />
          </div>
          <button type="submit">{t('saveProfile')}</button>
        </form>
      </div>
    </div>
  );
};

export default ProfileModal;
