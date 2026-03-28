import React, { useEffect } from 'react';
import PetCard from './PetCard';
import log from '../utils/logger';

const PetList = ({ items, onToggleLike }) => {

    useEffect(() => {
        log.info(`Компонент PetList отримав ${items.length} елементів`);
        if (items.length === 0) {
            log.warn("PetList відрендерено з порожнім масивом даних");
        }
    }, [items.length]);

    const handleLikeClick = (id) => {
        log.debug(`Користувач взаємодіє з карткою ID: ${id}`);
        onToggleLike(id);
    };

    if (items.length === 0) {
        return (
            <div className="empty-state">
                <p>Наразі у цій категорії немає улюбленців.</p>
            </div>
        );
    }

    return (
        <div className="pet-list-grid">
            {items.map(pet => (
                <PetCard key={pet.id} pet={pet} handleToggleLike={() => handleLikeClick(pet.id)} />
            ))}
        </div>
    );
};

export default PetList;