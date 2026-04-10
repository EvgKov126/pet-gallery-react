// src/components/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFoundPage.css'; // Переконайся, що імпорт є!

const NotFoundPage = () => {
    return (
        <main className="container main">
            <section className="panel not-found-panel">
                <svg
                    className="not-found-icon warning-sign"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >

                    <path
                        d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                        fill="#f39c12"
                        stroke="none"
                    />

                    <line
                        x1="12" y1="9" x2="12" y2="13"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                    <line
                        x1="12" y1="17" x2="12.01" y2="17"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                </svg>
                <h1>404 — Сторінку не знайдено</h1>
                <p>Вибачте, але ми не можемо знайти те, що ви шукаєте.</p>
                <Link to="/" className="home-link">
                    Повернутися на головну
                </Link>
            </section>
        </main>
    );
};

export default NotFoundPage;