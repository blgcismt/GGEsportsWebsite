import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Tournaments.css'; 
import RegistrationModal from './RegistrationModal';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
    const { t } = useTranslation();
    return (
        <div className="hero">
            <img src="/images/main.jpeg" alt={t('gaming')} />
            <div className="hero-text">
                <h1>{t('tournamentsTitle')}</h1>
            </div>
        </div>
    );
};

const Tournaments = () => {
    const { t } = useTranslation();
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('All Games');
    const [modalShow, setModalShow] = useState(false); 
    const [tournaments, setTournaments] = useState([
        { id: 1, image: "/images/valorant.jpeg", title: t("globalMastersTitle"), description: t("globalMastersDescription"), category: "FPS" },
        { id: 2, image: "/images/fps.png", title: t("counterStrikeTitle"), description: t("counterStrikeDescription"), category: "FPS" },
        { id: 3, image: "/images/sports.jpg", title: t("championsCupTitle"), description: t("championsCupDescription"), category: "Sports" },
        { id: 4, image: "/images/moba.png", title: t("battleArenaTitle"), description: t("battleArenaDescription"), category: "MOBA" }
    ]);

    const filteredTournaments = tournaments.filter(tournament =>
        tournament.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        (tournament.category === activeTab || activeTab === 'All Games')
    );

    return (
        <>
            <HeroSection />
            <div className="tabs">
                <button className={`tab-button ${activeTab === 'All Games' ? 'active' : ''}`} onClick={() => setActiveTab('All Games')}>{t('allGames')}</button>
                <button className={`tab-button ${activeTab === 'FPS' ? 'active' : ''}`} onClick={() => setActiveTab('FPS')}>{t('fps')}</button>
                <button className={`tab-button ${activeTab === 'Sports' ? 'active' : ''}`} onClick={() => setActiveTab('Sports')}>{t('sports')}</button>
                <button className={`tab-button ${activeTab === 'MOBA' ? 'active' : ''}`} onClick={() => setActiveTab('MOBA')}>{t('moba')}</button>
            </div>
            <div className="search-bar">
                <input 
                    type="text" 
                    placeholder={t('searchTournaments')} 
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </div>
            <div className="tournament-list">
                {filteredTournaments.map(tournament => (
                    <div key={tournament.id} className="tournament-card">
                        <img src={tournament.image} alt={tournament.category} className="tournament-logo" />
                        <h3>{tournament.title}</h3>
                        <p>{tournament.description}</p>
                        <button className="register-button" onClick={() => setModalShow(true)}>{t('register')}</button>
                    </div>
                ))}
            </div>
            <RegistrationModal 
                show={modalShow} 
                onClose={() => setModalShow(false)}
                resetOnClose={true}
            />
        </>
    );
}

export default Tournaments;
