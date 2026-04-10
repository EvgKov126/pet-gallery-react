import React from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <main className="main container">
            <section className="hero-section">
                <h1>Вітаємо у Pet Gallery!</h1>
                <p>
                    Це сучасний SPA-застосунок для перегляду та керування вашою особистою галереєю улюбленців.
                    Ми використовуємо клієнтську маршрутизацію для швидкої навігації без перезавантаження сторінки.
                </p>
                <div className="home-features">
                    <h3>Наші можливості:</h3>
                    <ul>
                        <li>Швидкий перегляд карток тварин</li>
                        <li>Додавання нових улюбленців через інтерактивну форму</li>
                        <li>Збереження ваших вподобань у локальному сховищі</li>
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default HomePage;