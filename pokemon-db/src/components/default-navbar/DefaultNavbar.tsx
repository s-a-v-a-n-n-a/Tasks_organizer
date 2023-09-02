import React from 'react';

import './DefaultNavbar.scss';

function DefaultNavbar() {
    const headerText = "Welcome to pokémon world!";
    let buttons = [
        { text: "Pokémons", path: "pokemons" },
        { text: "Berries", path: "berries" },
        { text: "Items", path: "items" }
    ]

    let buttonComponents = buttons.map((buttonProps) => {
        return (
            <button className="navigation-button" key={ buttonProps.text }
                    onClick={ () => {} }>
                { buttonProps.text }
            </button>
        )
    })

    return (
        <div className="default-navbar-wrapper">
            <div className="navbar-header">{ headerText }</div>
            <div className="navigation-buttons-wrapper">
                { buttonComponents }
            </div>
        </div>
    )
}

export default DefaultNavbar;