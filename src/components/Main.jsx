import PetList from './PetList';

const Main = ({ pets, onToggleLike }) => {
    return (
        <main className="container">
            <h2 className="main-title">Наші улюбленці</h2>
            <PetList items={pets} onToggleLike={onToggleLike} />
        </main>
    );
};

export default Main;