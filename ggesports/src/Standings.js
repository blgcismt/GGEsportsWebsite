import React, { useState } from 'react';
import './Standings.css';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
    const { t } = useTranslation();
    return (
        <div className="hero">
            <img src="/images/main.jpeg" alt={t('gaming')} />
            <div className="hero-text">
                <h1>{t('standingsTitle')}</h1>
            </div>
        </div>
    );
};

const LeaderboardTable = ({ data }) => {
    const { t } = useTranslation();

    const getRowClass = (index) => {
        if (index < 2) {  
            return 'promotion';
        } else if (index >= data.length - 2) {  
            return 'relegation';
        }
        return '';
    };

    return (
        <table className="leaderboard-table">
            <thead>
                <tr>
                    <th>{t('rank')}</th>
                    <th>{t('teamName')}</th>
                    <th>{t('matchesPlayed')}</th>
                    <th>{t('tournamentsPlayed')}</th>
                    <th>{t('matchesWon')}</th>
                    <th>{t('matchesLost')}</th>
                    <th>{t('tournamentsWon')}</th>
                    <th>{t('tournamentsLost')}</th>
                    <th>{t('points')}</th>
                </tr>
            </thead>
            <tbody>
                {data.map((team, index) => (
                    <tr key={index} className={getRowClass(index)}>
                        <td>{index + 1}</td>
                        <td>{team.name}</td>
                        <td>{team.matchesPlayed}</td>
                        <td>{team.tournamentsPlayed}</td>
                        <td>{team.matchesWon}</td>
                        <td>{team.matchesLost}</td>
                        <td>{team.tournamentsWon}</td>
                        <td>{team.tournamentsLost}</td>
                        <td>{team.points}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const Standings = () => {
    const { t } = useTranslation();
    const [activeGame, setActiveGame] = useState('League of Legends');
    const leaderboards = {
        'League of Legends': [
            { name: "Dragons", matchesPlayed: 10, tournamentsPlayed: 2, matchesWon: 8, matchesLost: 2, tournamentsWon: 1, tournamentsLost: 1, points: 32 },
            { name: "Wizards", matchesPlayed: 10, tournamentsPlayed: 2, matchesWon: 6, matchesLost: 4, tournamentsWon: 1, tournamentsLost: 1, points: 25 },
            { name: "Archers", matchesPlayed: 10, tournamentsPlayed: 2, matchesWon: 7, matchesLost: 3, tournamentsWon: 1, tournamentsLost: 1, points: 23 },
            { name: "Knights", matchesPlayed: 10, tournamentsPlayed: 2, matchesWon: 5, matchesLost: 5, tournamentsWon: 0, tournamentsLost: 2, points: 19 },
            { name: "Sorcerers", matchesPlayed: 10, tournamentsPlayed: 2, matchesWon: 9, matchesLost: 1, tournamentsWon: 2, tournamentsLost: 0, points: 17 },
            { name: "Rangers", matchesPlayed: 10, tournamentsPlayed: 2, matchesWon: 4, matchesLost: 6, tournamentsWon: 0, tournamentsLost: 2, points: 13 },
            { name: "Clerics", matchesPlayed: 10, tournamentsPlayed: 2, matchesWon: 3, matchesLost: 7, tournamentsWon: 0, tournamentsLost: 2, points: 9 },
            { name: "Paladins", matchesPlayed: 10, tournamentsPlayed: 2, matchesWon: 2, matchesLost: 8, tournamentsWon: 0, tournamentsLost: 2, points: 6 }
        ],
        'CS2': [
            { name: "Blasters", matchesPlayed: 12, tournamentsPlayed: 3, matchesWon: 9, matchesLost: 3, tournamentsWon: 2, tournamentsLost: 1, points: 32 },
            { name: "Sharpshooters", matchesPlayed: 12, tournamentsPlayed: 3, matchesWon: 7, matchesLost: 5, tournamentsWon: 1, tournamentsLost: 2, points: 29 },
            { name: "Snipers", matchesPlayed: 12, tournamentsPlayed: 3, matchesWon: 10, matchesLost: 2, tournamentsWon: 2, tournamentsLost: 1, points: 28 },
            { name: "Gunners", matchesPlayed: 12, tournamentsPlayed: 3, matchesWon: 6, matchesLost: 6, tournamentsWon: 1, tournamentsLost: 2, points: 25 },
            { name: "Cannoneers", matchesPlayed: 12, tournamentsPlayed: 3, matchesWon: 8, matchesLost: 4, tournamentsWon: 2, tournamentsLost: 1, points: 23 },
            { name: "Artillery", matchesPlayed: 12, tournamentsPlayed: 3, matchesWon: 3, matchesLost: 9, tournamentsWon: 0, tournamentsLost: 3, points: 20 },
            { name: "Riflemen", matchesPlayed: 12, tournamentsPlayed: 3, matchesWon: 5, matchesLost: 7, tournamentsWon: 0, tournamentsLost: 3, points: 15 },
            { name: "Marksmen", matchesPlayed: 12, tournamentsPlayed: 3, matchesWon: 11, matchesLost: 1, tournamentsWon: 3, tournamentsLost: 0, points: 4 }
        ],
        'Valorant': [
            { name: "Phantoms", matchesPlayed: 8, tournamentsPlayed: 2, matchesWon: 5, matchesLost: 3, tournamentsWon: 1, tournamentsLost: 1, points: 40 },
            { name: "Ghosts", matchesPlayed: 8, tournamentsPlayed: 2, matchesWon: 3, matchesLost: 5, tournamentsWon: 0, tournamentsLost: 2, points: 35 },
            { name: "Shadows", matchesPlayed: 8, tournamentsPlayed: 2, matchesWon: 7, matchesLost: 1, tournamentsWon: 2, tournamentsLost: 0, points: 33 },
            { name: "Revenants", matchesPlayed: 8, tournamentsPlayed: 2, matchesWon: 6, matchesLost: 2, tournamentsWon: 1, tournamentsLost: 1, points: 31 },
            { name: "Spectres", matchesPlayed: 8, tournamentsPlayed: 2, matchesWon: 4, matchesLost: 4, tournamentsWon: 1, tournamentsLost: 1, points: 30 },
            { name: "Wraiths", matchesPlayed: 8, tournamentsPlayed: 2, matchesWon: 2, matchesLost: 6, tournamentsWon: 0, tournamentsLost: 2, points: 20 },
            { name: "Spirits", matchesPlayed: 8, tournamentsPlayed: 2, matchesWon: 8, matchesLost: 0, tournamentsWon: 2, tournamentsLost: 0, points: 12 },
            { name: "Ghouls", matchesPlayed: 8, tournamentsPlayed: 2, matchesWon: 1, matchesLost: 7, tournamentsWon: 0, tournamentsLost: 2, points: 4 }
        ],
        'EA FC24': [
            { name: "Strikers", matchesPlayed: 14, tournamentsPlayed: 3, matchesWon: 10, matchesLost: 4, tournamentsWon: 2, tournamentsLost: 1, points: 33 },
            { name: "Defenders", matchesPlayed: 14, tournamentsPlayed: 3, matchesWon: 8, matchesLost: 6, tournamentsWon: 2, tournamentsLost: 1, points: 21 },
            { name: "Midfielders", matchesPlayed: 14, tournamentsPlayed: 3, matchesWon: 11, matchesLost: 3, tournamentsWon: 2, tournamentsLost: 1, points: 20 },
            { name: "Goalkeepers", matchesPlayed: 14, tournamentsPlayed: 3, matchesWon: 5, matchesLost: 9, tournamentsWon: 0, tournamentsLost: 3, points: 19 },
            { name: "Forwards", matchesPlayed: 14, tournamentsPlayed: 3, matchesWon: 9, matchesLost: 5, tournamentsWon: 2, tournamentsLost: 1, points: 18 },
            { name: "Fullbacks", matchesPlayed: 14, tournamentsPlayed: 3, matchesWon: 7, matchesLost: 7, tournamentsWon: 1, tournamentsLost: 2, points: 17 },
            { name: "Wingers", matchesPlayed: 14, tournamentsPlayed: 3, matchesWon: 6, matchesLost: 8, tournamentsWon: 1, tournamentsLost: 2, points: 16 },
            { name: "Sweepers", matchesPlayed: 14, tournamentsPlayed: 3, matchesWon: 12, matchesLost: 2, tournamentsWon: 3, tournamentsLost: 0, points: 13 }
        ],
    };

    return (
        <>
            <HeroSection />
            <div className="tabs">
                {Object.keys(leaderboards).map(game => (
                    <button
                        key={game}
                        className={`tab-button ${activeGame === game ? 'active' : ''}`}
                        onClick={() => setActiveGame(game)}
                    >
                        {t(game)}
                    </button>
                ))}
            </div>
            <div className="leaderboard">
                <LeaderboardTable data={leaderboards[activeGame]} />
            </div>
        </>
    );
}

export default Standings;
