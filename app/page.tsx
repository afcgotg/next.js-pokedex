'use client';

import { useEffect, useState } from 'react';

import Link from "next/link";

import { titleString } from '@/app/lib/utils'
import { Pokemon, PokemonList } from '@/app/lib/definitions'
import { fetchPokemonList } from '@/app/lib/api';

import { handjet } from "@/app/ui/fonts";
import { PokemonListNotFound } from '@/app/ui/not-found';


export default function Home() {
  const [pokemonList, setPokemonList] = useState<Pokemon[] | null>([]);
  const [offset, setOffset] = useState<number>(0);
  const [isNext, setIsNext] = useState<Boolean>(false);

  useEffect(() => {
    async function fetchPokemon() {
      let data : PokemonList;
      try {
        data = await fetchPokemonList(offset);
      } catch (error) {
        setPokemonList(null);
        return;
      }
      
      if(pokemonList){
        setPokemonList(pokemonList.concat(data.results));
      }
      setIsNext(data.next != null);
    }

    fetchPokemon();
  },[offset]);

  function handleClick() {
    setOffset(offset+20);
  }

  if(!pokemonList){
    return <PokemonListNotFound />;
  }

  return (
    <main className="flex flex-col items-center min-h-screen py-12 px-3 md:mx-auto md:max-w-screen-md">
      <article className={`${handjet.className} text-4xl w-full`}>
        <ul>
          {pokemonList.map((pokemon, index) => (
          <Link key={index} href={`/details/${pokemon.name}`} className="rounded-lg ">
            <li key={index} className="py-6 my-3 text-center rounded-2xl text-white bg-red-background
              lg:hover:bg-white lg:hover:text-red-background lg:bg-inherit lg:text-white
              lg:hover:shadow-md lg:py-3 lg:border-0">{titleString(pokemon.name)}</li>
          </Link>
          ))}
        </ul>
      </article>
      {isNext && (
      <button onClick={handleClick}
        className="bg-white text-red-pokedex text-2xl font-bold size-20 mt-5 rounded-full md:hover:shadow-xl">+</button>
      )}
    </main>
  );
}