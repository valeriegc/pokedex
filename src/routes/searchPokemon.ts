import { showPokeDetails,pokemonDisplay } from "./stores";

export async function loadPokemon(searchTerm: string) {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
    const json = await resp.json();
    const type = json.types.map((t) => t.type.name).join('/');
    pokemonDisplay.set( {
        name: json.name.charAt(0).toUpperCase() + json.name.slice(1),
        number: json.order,
        type: type,
        hp: json.stats[0].base_stat,
        experience: json.base_experience,
        weight: json.weight,
        height: json.height,
        image: json.sprites.other.dream_world.front_default
    });
    showPokeDetails.set(true);
}