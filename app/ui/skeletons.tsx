import Image from 'next/image';

import { handjet } from "@/app/ui/fonts";


export function PokemonDetailsSkeleton(){
    return (
        <main className={`${handjet.className} flex flex-col justify-center items-center h-[460px] sm:flex-row bg-white md:w-[768px] md:h-[300px] mx-3 md:mx-auto mt-20 p-10 relative rounded-3xl`}>
            <Image src="/loading.gif" 
                    alt="loading"
                    width={50}
                    height={50}/>
        </main>
    );
}