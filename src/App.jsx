import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AddPetForm from './components/AddPetForm';
import Main from './components/Main';
import PetExperts from './components/PetExperts';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import PetsPage from './components/PetsPage';
import PetDetailsPage from './components/PetDetailsPage';
import NotFoundPage from './components/NotFoundPage';
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

  const [pets, setPets] = useState(() => {
    const savePets = localStorage.getItem('pet-gallery-data');
    return savePets ? JSON.parse(savePets) : INITIAL_PETS;

  });

  const handleToggleLike = (id) => {
    setPets(pets.map(pet =>
      pet.id === id ? { ...pet, isLiked: !pet.isLiked } : pet
    ));
  };

  const handleAddPet = (newPet) => {
    setPets(prevPets => [...prevPets, newPet]);
  };

  useEffect(() => {
    localStorage.setItem('pet-gallery-data', JSON.stringify(pets));
  }, [pets]);

  return (
    <div className="App">
      <Header likedCount={pets.filter(pet => pet.isLiked).length} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pets" element={<PetsPage pets={pets} onToggleLike={handleToggleLike} onAddPet={handleAddPet} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pet/:id" element={<PetDetailsPage pets={pets} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer year="2026" author="Коваленко Євгеній" />
    </div>
  );
}

export default App;