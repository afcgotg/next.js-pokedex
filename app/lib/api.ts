const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export async function fetchPokemonList(offset: number){
    const response = await fetch(`${BASE_URL}/?offset=${offset}&limit=20`);
    if(!response.ok){
        throw new Error(`Error fetching Pokemon database: ${response.statusText}`);
    }
    return response.json();
}


export async function fetchPokemonDetails(name: string){
    const response = await fetch(`${BASE_URL}/${name}`);
    if(!response.ok){
        if(response.status === 404){
            throw new Error("Pokemon not found (Error 404)");
        } else {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
    }
    return response.json();
}
