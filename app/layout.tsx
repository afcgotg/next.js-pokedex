import type { Metadata } from "next";
import Link from "next/link";

import "@/app/ui/globals.css";
import { archivo_black, inter } from "@/app/ui/fonts";
import  Search  from '@/app/ui/search'


export const metadata: Metadata = {
  title: "PokeBLING",
  description: "created by github@afcgotg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-red-background text-white relative`}>
          <header className="px-3">
            <Link href="/">
              <h1 className={`${archivo_black.className} text-main-title antialiased mt-20 mb-5 w-min mx-auto`}>PokeBLING</h1>
            </Link>
              <Search/>
          </header>
        {children}
        <footer><p className="text-center py-6 absolute-bottom-0">Created by <a href="https://github.com/afcgotg/next.js-pokedex">@afcgotg</a></p></footer>
      </body>
    </html>
  );
}
