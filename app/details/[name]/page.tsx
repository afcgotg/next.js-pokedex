'use client';

import { useParams } from 'next/navigation'
import { PokemonDetailsSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import PokemonDetailsCard from '@/app/ui/details/card';


export default function Page() {
    const { name } = useParams();
    const strName:string = Array.isArray(name)? name[0] : name;
    
    return (
        <Suspense fallback={<PokemonDetailsSkeleton/>}>
            <PokemonDetailsCard name={strName} />
        </Suspense>
    );
}