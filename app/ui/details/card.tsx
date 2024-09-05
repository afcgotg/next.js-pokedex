'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { PokemonDetails } from '@/app/lib/definitions';
import { fetchPokemonDetails } from '@/app/lib/api';
import { titleString } from '@/app/lib/utils';

import { handjet } from '@/app/ui/fonts';
import { PokemonDetailsSkeleton } from '@/app/ui/skeletons';
import { PokemonNotFound } from '@/app/ui/not-found';


export default function PokemonDetailsCard({ name } :
    { name:string }
){
    const [pokemonData, setPokemonData] = useState<PokemonDetails | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPokemonDetails = async () => {
            try {
                const data = await fetchPokemonDetails(name);
                if (!data) {
                    setError('Pokémon not found');
                } else {
                    setPokemonData(data);
                }
            } catch (err) {
                setError('Error fetching Pokémon details');
            } finally {
                setLoading(false);
            }
        };

        getPokemonDetails();
    }, [name]);

    if (loading) {
        return <PokemonDetailsSkeleton />;
    }

    if (error || !pokemonData) {
        return (
            <PokemonNotFound />
        );
    }

    return (
        <main className={`${handjet.className} flex flex-col mx-3 md:mx-auto main-responsive rounded-3xl sm:flex-row bg-white max-w-screen-md mt-20 p-10 relative md:rounded-3xl`}>
            <header className="flex flex-col p-5">
                <h1 className="text-pokemon-name text-red-pokedex text-center mb-5">#{pokemonData.id} {titleString(name)}</h1>
                <div className="flex justify-around items-end">
                    <Image
                        src={pokemonData.sprites.other['official-artwork']['front_default']}
                        alt={`${pokemonData.name} official artwork`}
                        width={100}
                        height={100}
                    />
                    <Image 
                        src={pokemonData.sprites.other['official-artwork']['front_shiny']}
                       alt={`${pokemonData.name} shiny official artwork`}
                        width={100}
                        height={100}
                    />
                </div>
            </header>
            <Link href="/" className="text-red-pokedex absolute p-3 top-3 left-3 bg-red-background rounded-full" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            </Link>
            <article className="text-black pt-10 sm:pl-10">
                <p>Height: {pokemonData.height} dm.</p>
                <p>Weight: {pokemonData.weight} hg.</p>
                <div className="flex gap-1">
                    <p>Abilities:</p>
                    <p>{pokemonData.abilities.map((ability, index) =>
                        ability.ability.name
                    ).join(', ')}.</p>
                </div>
                <div className="flex gap-1">
                    <p>Stats:</p>
                    <p>{pokemonData.stats.map((stat, index) =>
                        stat.stat.name
                    ).join(', ')}.</p>
                </div>
            </article>
        </main>
    );
}