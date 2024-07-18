import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const CoachRegistrationModal = ({ show, onClose, coach }) => {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [submitted, setSubmitted] = useState(false); 

    if (!show) return null;

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true); 
        console.log("Booking Details:", { email, date, time, coachName: coach.name });
    };

    const handleClose = () => {
        setEmail('');
        setDate('');
        setTime('');
        setSubmitted(false);
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={handleClose}>&times;</span>
                {!submitted ? (
                    <div>
                        <div className="coach-details">
                            <img src={coach.image} alt={coach.name} className="coach-image" />
                            <h2>{t('bookSessionWith', { name: coach.name })}</h2>
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
                                type="date" 
                                value={date}
                                onChange={(e) => setDate(e.target.value)} 
                                required 
                            />
                            <input 
                                type="time" 
                                value={time}
                                onChange={(e) => setTime(e.target.value)} 
                                required 
                            />
                            <button type="submit">{t('registerNow')}</button>
                        </form>
                    </div>
                ) : (
                    <div className="confirmation">
                        <h2>{t('registrationSuccessful')}</h2>
                        <p>{t('sessionBooked', { name: coach.name, date, time })}</p>
                        <button onClick={handleClose}>{t('close')}</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CoachRegistrationModal;
