import React, { useState } from 'react';
import './Coaches.css';
import CoachRegistrationModal from './CoachRegistrationModal';
import ReviewModal from './ReviewModal';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
    const { t } = useTranslation();
    return (
        <div className="hero">
            <img src="/images/main.jpeg" alt={t('gaming')} />
            <div className="hero-text">
                <h1>{t('ourCoaches')}</h1>
            </div>
        </div>
    );
};

const coachesData = [
    {
        "id": 1,
        "name": "John Doe",
        "specialization": "FPS Games",
        "descriptionKey": "johnDoeDescription",
        "image": "/images/coach1.jpg"
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "specialization": "MOBA",
        "descriptionKey": "janeSmithDescription",
        "image": "/images/coach2.jpg"
    },
    {
        "id": 3,
        "name": "Mike Lee",
        "specialization": "Real-Time Strategy",
        "descriptionKey": "mikeLeeDescription",
        "image": "/images/coach3.jpg"
    }
];

const CoachCard = ({ coach, onBook, onReview }) => {
    const { t } = useTranslation();
    return (
        <div className="coach-card">
            <img src={coach.image} alt={coach.name} className="coach-photo" />
            <div className="coach-info">
                <h3>{coach.name}</h3>
                <p><strong>{t('specialization')}:</strong> {coach.specialization}</p>
                <p>{t(coach.descriptionKey)}</p>
                <button className="book-now-button" onClick={() => onBook(coach)}>{t('bookNow')}</button>
                <button className="review-button" onClick={() => onReview(coach)}>{t('reviewCoach')}</button>
            </div>
        </div>
    );
};

const Coaches = () => {
    const [selectedCoach, setSelectedCoach] = useState(null);
    const [modalShow, setModalShow] = useState(false);
    const [reviewModalShow, setReviewModalShow] = useState(false);

    const handleBookNow = coach => {
        setSelectedCoach(coach);
        setModalShow(true);
    };

    const handleReview = coach => {
        setSelectedCoach(coach);
        setReviewModalShow(true);
    };

    return (
        <>
            <HeroSection />
            <div className="coaches-container">
                {coachesData.map(coach => (
                    <CoachCard key={coach.id} coach={coach} onBook={handleBookNow} onReview={handleReview} />
                ))}
            </div>
            {selectedCoach && modalShow && (
                <CoachRegistrationModal
                    show={modalShow}
                    onClose={() => setModalShow(false)}
                    coach={selectedCoach}
                />
            )}
            {selectedCoach && reviewModalShow && (
                <ReviewModal
                    show={reviewModalShow}
                    onClose={() => setReviewModalShow(false)}
                    coach={selectedCoach}
                />
            )}
        </>
    );
};

export default Coaches;
