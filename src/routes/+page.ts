export async function load({ fetch}) {
    const pokemons = []
    
    for (let i = 1; i < 9; i++){
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        const json =  await resp.json();
        const type = json.types.map(t=>t.type.name).join("/")
        pokemons.push({
            name: json.name.charAt(0).toUpperCase() + json.name.slice(1),
            number: i,
            type: type,
            hp: json.stats[0].base_stat
        })}

    return { pokemons };
    }
    

