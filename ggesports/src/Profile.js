import React, { useState } from 'react';
import './Profile.css';
import ProfileModal from './ProfileModal';
import JoinTeamModal from './JoinTeamModal';
import MessageTeamModal from './MessageTeamModal';
import { useTranslation } from 'react-i18next';

import './ProfileModal.css';
import './JoinTeamModal.css';
import './MessageTeamModal.css';

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <div className="hero">
      <img src="/images/main.jpeg" alt={t('gaming')} />
      <div className="hero-text">
        <h1>{t('yourProfile')}</h1>
      </div>
    </div>
  );
};

const Profile = () => {
  const { t } = useTranslation();
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    team: "Dragons",
    bio: t('profileBio'),
  });
  
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showJoinTeamModal, setShowJoinTeamModal] = useState(false);
  const [showMessageTeamModal, setShowMessageTeamModal] = useState(false);

  const handleCreateUpdateProfile = () => {
    setShowProfileModal(true);
  };

  const handleSaveProfile = (updatedProfile) => {
    setProfile(updatedProfile);
    setShowProfileModal(false);
  };

  const handleJoinTeam = () => {
    setShowJoinTeamModal(true);
  };

  const handleMessageTeam = () => {
    setShowMessageTeamModal(true);
  };

  return (
    <>
      <HeroSection />
      <div className="profile-container">
        <div className="profile-details">
          <img src="/images/profile-pic.jpg" alt="Profile" className="profile-pic" />
          <h2>{profile.name}</h2>
          <p><strong>{t('email')}:</strong> {profile.email}</p>
          <p><strong>{t('team')}:</strong> {profile.team}</p>
          <p>{profile.bio}</p>
          <button className="profile-button" onClick={handleCreateUpdateProfile}>{t('createUpdateProfile')}</button>
          <button className="profile-button" onClick={handleJoinTeam}>{t('joinTeam')}</button>
          <button className="profile-button" onClick={handleMessageTeam}>{t('messageTeam')}</button>
        </div>
      </div>
      {showProfileModal && (
        <ProfileModal 
          profile={profile} 
          onSave={handleSaveProfile} 
          onClose={() => setShowProfileModal(false)} 
        />
      )}
      {showJoinTeamModal && (
        <JoinTeamModal 
          onClose={() => setShowJoinTeamModal(false)} 
        />
      )}
      {showMessageTeamModal && (
        <MessageTeamModal 
          onClose={() => setShowMessageTeamModal(false)} 
        />
      )}
    </>
  );
}

export default Profile;
