class ServerRequests {
    protected static request(url: string, options = {}) {
        return fetch(url, options).then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status} for url ${url}`)
            }
            return response.json()
        });
    }
}

export class ClientRequests extends ServerRequests {
    static _baseUrl = 'https://pokeapi.co/api/v2/';

    static _transformPokemonInfo(pokemonInfo: {
                                    id: number;
                                    name: string;
                                    weight: number;
                                    height: number;
                                    base_experience: number;
                                    abilities: any;
                                    sprites: any;
                                }) {
        return {
            id: pokemonInfo.id,
            name: pokemonInfo.name,
            weight: pokemonInfo.weight,
            height: pokemonInfo.height,
            baseExperience: pokemonInfo.base_experience,
            abilities: pokemonInfo.abilities,
            sprites: pokemonInfo.sprites
        }
    }

    static async GetPokemonsAmount() {
        const pokemonsMainInfo = await this.request(this._baseUrl + 'pokemon/', {method: 'GET'});
        return pokemonsMainInfo.count;
    }

    static async GetPokemonById(id: number) {
        const pokemonInfo = await this.request(this._baseUrl + `pokemon/${id}`, {method: 'GET'});
        return this._transformPokemonInfo(pokemonInfo);
    }

    static async GetPokemonByName(name: string) {
        const pokemonInfo = await this.request(this._baseUrl + `pokemon/${name}`, {method: 'GET'});
        return this._transformPokemonInfo(pokemonInfo);
    }
}
