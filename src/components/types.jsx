import React, { useState } from 'react';
import TypeDropdown from './styles/items/type-dropdown';
import EffectTable from './styles/items/effect-table';
import './styles/type-colors.css';

function Types() {
    const [type, setType] = useState(null);
    const [data, setData] = useState(null);

    const handleChange = (e) => {
        setType(e.target.value);
    };

    // Switch Data
    const handleSelection = () => {
        switch(type) {
            case 'normal':
                setData();
                break;
            case 'fire':
                setData();
                break;
            case 'water':
                setData();
                break;
            case 'electric':
                setData();
                break;
            case 'grass':
                setData();
                break;
            case 'ice':
                setData();
                break;
            case 'fighting':
                setData();
                break;
            case 'poison':
                setData();
                break;
            case 'ground':
                setData();
                break;
            case 'flying':
                setData();
                break;
            case 'psychic':
                setData();
                break;
            case 'bug':
                setData();
                break;
            case 'rock':
                setData();
                break;
            case 'ghost':
                setData();
                break;
            case 'dragon':
                setData();
                break;
            case 'dark':
                setData();
                break;
            case 'steel':
                setData();
                break;
            case 'fairy':
                setData();
                break;
        }
    };

    return (
        <div className='Types'>
            <h1>Pokemon Type Effectiveness</h1>
            <TypeDropdown func={handleChange} />
            <button onClick={handleSelection}>Get Data</button>

            {data && <EffectTable set={data} />}
        </div>
    );
}

export default Types;
