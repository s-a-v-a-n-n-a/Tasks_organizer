import React from 'react';

import './PokemonToggler.scss';

function PokemonToggler(props: { onRandomChange: React.MouseEventHandler<HTMLButtonElement>}) {
    const randomPokemonText = "Random pokémon";

    return (
        <div className="pokemon-toggler-wrapper">
            <button className="toggle-button" onClick={props.onRandomChange}>{ randomPokemonText }</button>
            <button className="toggle-button">{ randomPokemonText }</button>
        </div>
    );
}

export default PokemonToggler;