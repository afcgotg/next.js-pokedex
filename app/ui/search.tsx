'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


export default function Search() {
    const [placeholder, setPlaceholder] = useState<string>("Search")
    const [input, setInput] = useState<string>("")
    const router = useRouter();

    function handleSearch(term: string) {
        setInput(term);
        setPlaceholder("");
    }

    function handleClick() {
        router.push(`/details/${input.toLowerCase()}`);
        setInput("");
        setPlaceholder("Search");
    }

    function handleKeyDown (key:string) {
        if (key === 'Enter') {
            handleClick();
        }
    }
 
  return (
    <div className="relative flex mx-1 md:mx-auto items-center bg-white rounded-full p-4 max-w-screen-md mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="absolute left-5 size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input
            value={input}
            className="w-full py-0.5 md:py-0 md:py-0 text-gray-600 text-center focus:border-none focus:ring-0 focus:outline-none text-xl md:text-2xl outline-2 placeholder:text-gray-400"
            placeholder={placeholder}
            onChange={(e) => {
                handleSearch(e.target.value);
            }}
            onKeyDown={(e) => {
                handleKeyDown(e.key);
            }}
        />
        {input != "" &&(
        <Link className="absolute right-2 bg-red-background size-12 p-3 rounded-full"
            href={`/details/${input}`}
            onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="white" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
        </Link>
        )}
    </div>
  );
}