import PetCard from './PetCard';

const PetList = ({ items, onToggleLike }) => {

    if (items.length === 0) {
        return (
            <div className="empty-state">
                <p>Наразі у цій категорії немає улюбленців.</p>
            </div>
        );
    }

    return (
        <div className="pet-list-grid">
            {items.map(pet => (
                <PetCard key={pet.id} pet={pet} handleToggleLike={onToggleLike} />
            ))}
        </div>
    );
};

export default PetList;