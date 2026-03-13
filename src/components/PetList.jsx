import PetCard from './PetCard';

const PetList = ({ items, onToggleLike }) => {
    return (
        <div className="pet-list-grid">
            {items.map(pet => (
                <PetCard key={pet.id} pet={pet} handleToggleLike={onToggleLike} />
            ))}
        </div>
    );
};

export default PetList;