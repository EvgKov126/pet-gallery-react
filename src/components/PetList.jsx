import PetCard from './PetCard';

const PetList = ({ items }) => {
    return (
        <div className="pet-list-grid">
            {items.map(pet => (
                <PetCard key={pet.id} pet={pet} />
            ))}
        </div>
    );
};

export default PetList;