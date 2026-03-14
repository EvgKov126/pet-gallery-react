import React, { useState, useEffect } from 'react';
import '../styles/PetExperts.css';

const PetExperts = () => {
    const [experts, setExperts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchExperts = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://dummyjson.com/users?limit=4');

                if (!response.ok) {
                    throw new Error(`Помилка: ${response.status}`);
                }

                const data = await response.json();
                setExperts(data.users);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchExperts();
    }, []);

    if (loading) {
        return (
            <div className="api-status-container">
                <div className="loader-spinner"></div>
                <p className="loading-text">Шукаємо кращих фахівців...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="api-status-container">
                <div className="error-box">
                    <div className="error-icon-wrapper">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="error-svg"
                        >
                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                            <line x1="12" y1="9" x2="12" y2="13"></line>
                            <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                    </div>
                    <h3>Упс! Щось пішло не так</h3>
                    <p>Не вдалося завантажити команду. {error}</p>
                    <button onClick={() => window.location.reload()} className="retry-button">
                        Спробувати знову
                    </button>
                </div>
            </div>
        );
    }

    return (
        <section className="experts-section container">
            <hr className="section-hr" />
            <h2 className="experts-title">Наша команда догляду</h2>
            <div className="experts-grid">
                {experts.map((expert) => (
                    <article key={expert.id} className="expert-card">
                        <img src={expert.image} alt={expert.firstName} className="expert-img" />
                        <h3>{expert.firstName} {expert.lastName}</h3>
                        <span className="expert-role">{expert.company.title}</span>
                        <p className="expert-email" title={expert.email}>
                            {expert.email}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default PetExperts;