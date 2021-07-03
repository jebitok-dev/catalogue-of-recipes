import React, {useState, useEffect} from 'react';
import pet, {ANIMALS} from '@frontendmasters/pet';
import Dropdown from '../containers/Dropdown';

const SearchParams = () => {
    const [location, updateLocation] = useState('Seattle, WA');
    const [breeds, updateBreeds] = useState([]);
    const [animal, AnimalDropDown] = Dropdown('Breed', '', breeds);
    const [Pets, setPets] = useState([]);

    async function requestPets() {
        const {animals} = await pet.animals({
            location,
            breed,
            type: animal,
        });

        setPets(animals || []);
    }

    useEffect(() => {
        updateBreeds([]);
        updateBreed('');
        pet.breeds(animal).then(({breeds}) => {
            const breedItems= breeds.map(({name}) => name);
            updateBreeds(breedItems);
        });
        [animal, updateBreed, updateBreeds])

        return (
            <div className="search-params">
                {name}
                <form onSubmit={(e) => {
                    e.preventDefault();
                    requestPets();
                }}
                >
                    <label 
                        htmlFor="location">
                            location
                            <input
                                id="location"
                                value={location}
                                onChange={(e) => updateLocation(e.target.value)}
                            />
                        </label>
                        <AnimalDropDown />
                        <BreedDropDown />
                        <button
                            type="submit"
                        >Submit</button>
                </form>
            </div>
        )
    })
}

export default SearchParams;
