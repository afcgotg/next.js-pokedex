import Link from 'next/link';

import { handjet } from '@/app/ui/fonts';


export default function NotFound() {
  return (
    <main className={`${handjet.className} flex flex-col items-center md:w-[768px] md:h-[300px] mx-3 md:mx-auto mt-20 p-10 relative rounded-3xl`}>
      <header className="flex flex-col items-center p-5">
        <h1 className="text-pokemon-name text-white text-center mb-5">Page Not Found</h1>
        <Link href="/"
        className={`${handjet.className} items-center text-xl text-red-background bg-white p-5 rounded-3xl`}>
          Go to home page
        </Link>
      </header>
    </main>
  );
}