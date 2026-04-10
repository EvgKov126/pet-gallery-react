import React, { useState } from 'react';
import AddPetForm from './AddPetForm';
import Main from './Main';
import PetExperts from './PetExperts';
import '../styles/PetsPage.css';

export default function PetsPage({ pets, onToggleLike, onAddPet }) {
    const [filter, setFilter] = useState('all');

    const filteredPets = pets.filter(pet => {
        if (filter === 'liked') return pet.isLiked;
        return true;
    });

    return (
        <main className="container main">
            <AddPetForm onAddPet={onAddPet} />
            <div className="filter-container">
                <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>
                    Усі ({pets.length})
                </button>
                <button onClick={() => setFilter('liked')} className={filter === 'liked' ? 'active' : ''}>
                    Улюблені ({pets.filter(p => p.isLiked).length})
                </button>
            </div>
            <Main pets={filteredPets} onToggleLike={onToggleLike} />
            <PetExperts />
        </main>
    );
}