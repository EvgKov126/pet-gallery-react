import React, { useState } from 'react';
import '../styles/AddPetForm.css';

const AddPetForm = ({ onAddPet }) => {
    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');
    const [age, setAge] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || !species.trim() || !age || !imageUrl.trim()) {
            alert("Будь ласка, заповніть усі поля!");
            return;
        }

        if (parseInt(age) < 0) {
            alert("Вік не може бути від’ємним!");
            return;
        }

        const newPet = {
            id: Date.now(),
            name: name,
            species: species,
            age: parseInt(age),
            imageUrl: imageUrl,
            isLiked: false
        };

        onAddPet(newPet);

        setName('');
        setSpecies('');
        setAge('');
        setImageUrl('');
    };

    return (
        <form className="add-pet-form container" onSubmit={handleSubmit}>
            <h3>🐾 Додати нового мешканця</h3>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Ім'я"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    list="species-options"
                    placeholder="Вид"
                    value={species}
                    onChange={(e) => setSpecies(e.target.value)}
                />
                <datalist id="species-options">
                    <option value="Собака" />
                    <option value="Кішка" />
                    <option value="Хом'як" />
                </datalist>

                <input
                    type="number"
                    placeholder="Вік"
                    min="0"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="URL фото"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
                <button type="submit">Додати</button>
            </div>
        </form>
    );
};

export default AddPetForm;