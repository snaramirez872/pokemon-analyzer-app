import React, { useState } from 'react';
import { onSnapshot, collection, query, orderBy } from 'firebase/firestore';
import db from '../firebase';
import './styles/type-colors.css';

function Types() {
    const [type, setType] = useState('');
    const [pokeTypes, setPokeTypes] = useState([]);

    const handleChange = (e) => {
        setType(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!type) {
            return; // if the input is empty, do nothing
        }

        try {
            const collRef = collection(db, type.toLowerCase());
            const q = query(collRef, orderBy('type'));

            const unsub = onSnapshot(q, (snap) => {
                setPokeTypes(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            });

            return unsub;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Class Changes for Type Colors
    function typeColor(value) {
        switch(value) {
            case 'normal':
                return 'normal';
            case 'fire':
                return 'fire';
            case 'water':
                return 'water';
            case 'electric':
                return 'electric';
            case 'grass':
                return 'grass';
            case 'ice':
                return 'ice';
            case 'fighting':
                return 'fighting';
            case 'poison':
                return 'poison';
            case 'ground':
                return 'ground';
            case 'flying':
                return 'flying';
            case 'psychic':
                return 'psychic';
            case 'bug':
                return 'bug';
            case 'rock':
                return 'rock';
            case 'ghost':
                return 'ghost';
            case 'dragon':
                return 'dragon';
            case 'dark':
                return 'dark';
            case 'steel':
                return 'steel';
            case 'fairy':
                return 'fairy';
        }
    }

    // Class Changes for Damage Colors
    function damageColor(value) {
        switch(value) {
            case 'Half Damage':
                return 'half-damage';
            case 'Strong':
                return 'strong';
            case 'Weak':
                return 'weak';
            case 'Null':
                return 'null';
        }
    }

    return (
        <div className='Types'>
            <h1>Pokemon Type Effectiveness</h1>
            <form className='type-form' onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    id='inType' 
                    value={type}
                    onChange={handleChange}
                />
                <button type='submit'>Search</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th className={typeColor(type.toLowerCase())}>Type</th>
                        <th className={typeColor(type.toLowerCase())}>Attack Status</th>
                        <th className={typeColor(type.toLowerCase())}>Defense Status</th>
                    </tr>
                </thead>
                {pokeTypes.length > 0 && (
                    <tbody>
                        {pokeTypes.map((pokeType) => (
                            <tr key={pokeType.id}>
                                <td>{pokeType.type}</td>
                                <td className={damageColor(pokeType.attacking)}>{pokeType.attacking}</td>
                                <td className={damageColor(pokeType.defending)}>{pokeType.defending}</td>
                            </tr>
                        ))}
                    </tbody>
                )}
            </table>
        </div>
    );
}

export default Types;
