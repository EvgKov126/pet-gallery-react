import React, { useState } from 'react';
import Header from './components/Header';
import AddPetForm from './components/AddPetForm';
import Main from './components/Main';
import Footer from './components/Footer';
import './index.css';


const INITIAL_PETS = [
  { id: 1, name: "Бакс", species: "Собака", age: 7, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp3oZBH312SzPuSV5wtYK3meaay3axZXG-ug&s" },
  { id: 2, name: "Мурка", species: "Кішка", age: 3, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwHSaeGOMGbRAQBkkwL6kSyjNse9LFbaq75Q&s" },
  { id: 3, name: "Рекс", species: "Собака", age: 5, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0QdoyIu1C-9_NqSENqzokmCVmIOrneWXfCg&s" },
  { id: 4, name: "Сімба", species: "Кішка", age: 2, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWKolOwe99yaAns-rE19pdRntMps-AVoOjIg&s" },
  { id: 5, name: "Барсик", species: "Собака", age: 3, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0d4HhnuFCTEkDdv_tpjZXGY2uo2Uod0h6yA&s" },
  { id: 6, name: "Антон", species: "Хом'як", age: 1, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF1lcCVB7c2wwB7FgD3FpdFMYNuoOzXWospg&s" }
];

function App() {

  const [pets, setPets] = useState(INITIAL_PETS);
  const [filter, setFilter] = useState('all');

  const handleToggleLike = (id) => {
    setPets(pets.map(pet =>
      pet.id === id ? { ...pet, isLiked: !pet.isLiked } : pet
    ));
  };

  const filteredPets = pets.filter(pet => {
    if (filter === 'liked') return pet.isLiked;
    return true; // для 'all' повертаємо всіх
  });

  const handleAddPet = (newPet) => {
    setPets(prevPets => [...prevPets, newPet]);
  };

  return (
    <div className="App">
      <Header likedCount={pets.filter(pet => pet.isLiked).length} />
      <AddPetForm onAddPet={handleAddPet} />
      <div className="filter-container container">
        <button
          className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setFilter('all')}
        >
          Усі ({pets.length})
        </button>
        <button
          className={filter === 'liked' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setFilter('liked')}
        >
          Тільки улюблені ({pets.filter(p => p.isLiked).length})
        </button>
      </div>
      <Main pets={filteredPets} onToggleLike={handleToggleLike} currentFilter={filter} />
      <Footer year="2026" author="Коваленко Євгеній" />
    </div>
  );
}

export default App;