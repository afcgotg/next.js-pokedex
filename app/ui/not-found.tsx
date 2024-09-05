import Image from 'next/image';
import Link from "next/link";

import { handjet } from "@/app/ui/fonts";


export function PokemonNotFound() {
    return(
      <main className={`${handjet.className} flex flex-col items-center bg-white md:w-[768px] md:h-[300px] mx-3 md:mx-auto mt-20 p-10 relative rounded-3xl`}>
          <header className="p-5">
              <h1 className="text-pokemon-name text-red-pokedex text-center mb-5">Pokémon not found</h1>
          </header>
          <Image
              src="/pikachu.png"
              alt="Pokémon not found"
              width={100}
              height={100}
          />
          <Link href="/" className="text-red-pokedex absolute p-3 top-3 left-3 bg-red-background rounded-full" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          </Link>
      </main>
    );
  }
  
  export function PokemonListNotFound() {
      return(
        <main className={`${handjet.className} flex flex-col items-center m-10`}>
          <header className="p-5">
              <h1 className="text-pokemon-name text-white text-center">Cannot connect to the Pokémon database</h1>
          </header>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
          </svg>
        </main>
      );
    }