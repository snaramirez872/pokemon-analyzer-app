import React from "react";

function EffectTable({ set }) {

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
            default:
                return '';
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
            default:
                return '';
        }
    }

    return (
        <table className='effect-table'>
            <thead>
                <tr>
                    {Object.keys(set[0]).map((key, idx) => (
                        <th key={idx} className={typeColor(key)}>{key}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {set.map((item, rowIDX) => (
                    <tr key={rowIDX}>
                        {Object.keys(item).map((key, colIDX) => (
                            <td key={colIDX} className={damageColor(item[key])}>
                                {item[key]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default EffectTable;
