import React from 'react';
import '../styles/AboutPage.css';

const AboutPage = () => {
    return (
        <main className="main container">
            <section className="about-content">
                <h1>Про застосунок</h1>
                <p>
                    Даний проєкт реалізовано в межах дисципліни
                    "Розробка інтерактивних мультимедійних додатків".
                </p>
                <h3>Використані технології:</h3>
                <ul>
                    <li><strong>React Router</strong> — для організації SPA-навігації</li>
                    <li><strong>Hooks (useState, useEffect, useParams)</strong> — для керування станом та параметрами</li>
                    <li><strong>LocalStorage</strong> — для збереження клієнтського стану</li>
                </ul>
                <p>Розробник: Коваленко Євгеній, 2026 рік.</p>
            </section>
        </main>
    );
};

export default AboutPage;