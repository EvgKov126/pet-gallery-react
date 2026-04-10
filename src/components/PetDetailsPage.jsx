import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/PetDetailsPage.css';

const PetDetailsPage = ({ pets }) => {
    const { id } = useParams();
    const pet = pets.find(p => String(p.id) === id);

    if (!pet) {
        return (
            <main className="container main">
                <section className="panel error-panel">
                    <svg className="error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <h2>Тварину не знайдено</h2>
                    <p>Улюбленця з ідентифікатором <strong>{id}</strong> не існує.</p>
                    <Link to="/pets" className="back-link-btn">
                        Повернутися до галереї
                    </Link>
                </section>
            </main>
        );
    }

    return (
        <main className="container main">
            <section className="panel">
                <Link to="/pets" className="navigation-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Назад до списку
                </Link>

                <div className="details-grid">
                    <div className="details-image-container">
                        <img src={pet.imageUrl} alt={pet.name} className="details-image" />
                    </div>

                    <div className="details-info">
                        <h1 className="details-title">{pet.name}</h1>
                        <div className="details-row">
                            <span className="details-label">Вид:</span>
                            <span className="details-value">{pet.species}</span>
                        </div>
                        <div className="details-row">
                            <span className="details-label">Вік:</span>
                            <span className="details-value">{pet.age} років</span>
                        </div>

                        <div className="details-status">
                            <svg
                                className="status-heart"
                                viewBox="0 0 24 24"
                                fill={pet.isLiked ? "#ff7675" : "none"}
                                stroke={pet.isLiked ? "#ff7675" : "#636e72"}
                                strokeWidth="2"
                            >
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                            <span className={pet.isLiked ? "status-text liked" : "status-text"}>
                                {pet.isLiked ? "В улюблених" : "Не в улюблених"}
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PetDetailsPage;