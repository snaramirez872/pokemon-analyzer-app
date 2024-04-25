import React from "react";

function TypeDropdown({ func }) {
    return (
        <select className='type-dropdown'>
            <option value=''>Select a Type...</option>
            <option value='normal'>Normal</option>
            <option value='fire'>Fire</option>
            <option value='water'>Water</option>
            <option value='electric'>Electric</option>
            <option value='grass'>Grass</option>
            <option value='ice'>Ice</option>
            <option value='fighting'>Fighting</option>
            <option value='poison'>Poison</option>
            <option value='ground'>Ground</option>
            <option value='flying'>Flying</option>
            <option value='psychic'>Psychic</option>
            <option value='bug'>Bug</option>
            <option value='rock'>Rock</option>
            <option value='ghost'>Ghost</option>
            <option value='dragon'>Dragon</option>
            <option value='dark'>Dark</option>
            <option value='steel'>Steel</option>
            <option value='fairy'>Fairy</option>
        </select>
    );
}

export default TypeDropdown;