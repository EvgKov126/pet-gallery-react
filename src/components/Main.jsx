import PetList from './PetList';

const Main = ({ pets }) => {
    return (
        <main className="container">
            <h2 className="main-title">Наші улюбленці</h2>
            <PetList items={pets} />
        </main>
    );
};

export default Main;