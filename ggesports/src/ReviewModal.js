import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ReviewModal.css';  

const ReviewModal = ({ show, onClose, coach }) => {
    const { t } = useTranslation();
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [confirmation, setConfirmation] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Review Submitted:", { coach: coach.name, rating, comment });
        setConfirmation(true);
    };

    return (
        <div className="modal" style={{ display: show ? 'flex' : 'none' }}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                {confirmation ? (
                    <div className="confirmation">
                        <h2>{t('reviewSubmitted')}</h2>
                        <p>{t('thankYouForReviewing', { name: coach.name })}</p>
                        <button onClick={() => { setConfirmation(false); onClose(); }}>{t('close')}</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <h2>{t('review', { name: coach.name })}</h2>
                        <label>{t('rating')}</label>
                        <select value={rating} onChange={e => setRating(e.target.value)}>
                            <option value="1">1 {t('star')}</option>
                            <option value="2">2 {t('stars')}</option>
                            <option value="3">3 {t('stars')}</option>
                            <option value="4">4 {t('stars')}</option>
                            <option value="5">5 {t('stars')}</option>
                        </select>
                        <label>{t('additionalComments')}</label>
                        <textarea value={comment} onChange={e => setComment(e.target.value)} />
                        <button type="submit">{t('submitReview')}</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ReviewModal;
