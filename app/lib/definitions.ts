export interface PokemonList {
    next: string | null;
    results: Pokemon[];
}

export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonDetails {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: {
        other: {
            'official-artwork': {
                front_default: string;
                front_shiny: string;        
            };
        };
    };
    abilities: PokemonAbility[];
    stats: PokemonStat[];
}

export interface PokemonAbility {
    ability: {
        name: string;
    };
};

export interface PokemonStat {
    stat: {
        name: string;
    }
}