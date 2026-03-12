import React, { useState } from 'react';
import '../styles/PetCard.css';

const PetCard = ({ pet }) => {
    const [isLiked, setIsLiked] = useState(false);

    const getAgeText = (age) => {
        const lastDigit = age % 10;
        const lastTwoDigits = age % 100;

        if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
            return `${age} років`;
        }
        if (lastDigit === 1) {
            return `${age} рік`;
        }
        if (lastDigit >= 2 && lastDigit <= 4) {
            return `${age} роки`;
        }
        return `${age} років`;
    };

    return (
        <div className="pet-card">
            <div className="pet-card-image-container">
                {pet.imageUrl ? (
                    <img src={pet.imageUrl} alt={pet.name} className="pet-card-image" />
                ) : (
                    <div className="pet-card-placeholder">Фото</div>
                )}
            </div>

            <div className="pet-card-info">
                <h3 className="pet-card-name">ім’я: {pet.name}</h3>
                <p className="pet-card-species">вид: {pet.species}</p>
                <p className="pet-card-age">вік: {getAgeText(pet.age)}</p>
            </div>

            <button
                className={`like-button ${isLiked ? 'active' : ''}`}
                onClick={() => setIsLiked(!isLiked)}
            >
                <svg className="heart-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <span>{isLiked ? 'Улюблений' : 'Лайк'}</span>
            </button>
        </div>
    );
};

export default PetCard;