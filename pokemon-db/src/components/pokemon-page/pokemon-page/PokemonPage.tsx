import React, {ReactNode, useEffect, useState} from 'react';

import './PokemonPage.scss';

import DefaultNavbar from "../../default-navbar";
import PokemonBanner from "../pokemon-banner";
import { ClientRequests } from "../../../server-requests/ServerRequests";
import PokemonToggler from "../pokemon-toggler";

interface PokemonProps {
    id?: number;
    name?: string;
    weight?: number;
    height?: number;
    baseExperience?: number;
    abilities?: any;
    sprites?: any;
}

function PokemonPage() {
    const [pokemonInfo, setPokemonInfo] = useState<PokemonProps>({});
    const [banner, setBanner] = useState<ReactNode | null>(null);

    let generateRandomId = () => {
        return Math.floor(Math.random() * 1000 + 2);
    }

    let loadPokemon = (pokemon : PokemonProps) => {
        console.log("pokemonInfo loaded");
        console.log(pokemon);
        setPokemonInfo(pokemon);
    }

    let updateBanner = (newPokemonInfo: PokemonProps) => {
        setBanner(PokemonBannerView(newPokemonInfo));
    }
    async function getPokemon(id: number) {
        console.log("Getting pokemon");
        const pokemon = await ClientRequests.GetPokemonById(id);
        loadPokemon(pokemon);
    }

    useEffect(() => {
        getPokemon(generateRandomId()).then();
    }, []);

    let changePokemon = () => {
        getPokemon(generateRandomId()).then();
    }

    useEffect(() => {
        if (pokemonInfo.id) {
            setBanner(PokemonBannerView(pokemonInfo));
        }
    }, [pokemonInfo]);

    return (
        <div className="pokemon-page-wrapper">
            <DefaultNavbar/>
            <div className="pokemon-banner">
                { banner }
            </div>
            <PokemonToggler onRandomChange={changePokemon}/>
        </div>
    )
}

const PokemonBannerView = (pokemonInfo: PokemonProps) => {
    return (
        <PokemonBanner pokemonInfo={ pokemonInfo }/>
    );
}

export default PokemonPage;