import React, { useState, useEffect } from 'react';

import './PokemonBanner.scss';

function PokemonBanner(props: { pokemonInfo: any; }) {
    let { pokemonInfo } = props;

    const pokemonName = pokemonInfo.name;
    const pokemonMainInfo = `weight: ${pokemonInfo.weight}\n` +
        `height: ${pokemonInfo.height}\n` +
        `base experience: ${pokemonInfo.baseExperience}`;

    let abilities = pokemonInfo.abilities.map((ability: { ability: { name: any; }; }) => {
        return <li>{ ability.ability.name }</li>;
    });
    const abilitiesText = `Abilities:\n`

    return (
        <div className="pokemon-banner-wrapper">
            <div className="pokemon-front-img" style={{ backgroundImage: `url(${pokemonInfo.sprites.front_default})`}}/>
            <div className="pokemon-back-img" style={{ backgroundImage: `url(${pokemonInfo.sprites.back_default})`}}/>
            <div className="main-info-column">
                <div className="pokemon-title">{ pokemonName }</div>
                <div className="pokemon-properties">{ pokemonMainInfo }</div>
            </div>
            <div className="main-info-column">
                <div className="abilities-title">{ abilitiesText }</div>
                <ul className="abilities-list">
                    { abilities }
                </ul>
            </div>
        </div>
    )
}

export default PokemonBanner;