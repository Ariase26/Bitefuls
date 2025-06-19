'use client'
import Link from "next/link";
import { useState } from "react";
import { HiXMark, HiBars3 } from "react-icons/hi2";

export default function NavigationBar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header id="navbar" className="flex flex-row justify-between md:justify-center items-center p-7 gap-11 absolute top-0 left-0 right-0 z-50 text-oldlace">
            <nav className="flex gap-6 hidden md:flex">
                <Link href="/" className="shadow-text rounded-full border border-transparent hover:border-white px-3 transition-all ease-in-out duration-300">
                    HOME
                </Link>
                <Link href="/#overview" className="shadow-text rounded-full border border-transparent hover:border-white px-3 transition-all ease-in-out duration-300">
                    OVERVIEW
                </Link>
            </nav>
                
            <span className="text-2xl md:text-3xl shadow-text font-bold">BITEFULS</span>

            <nav className="flex gap-6 hidden md:flex">
                <Link href="/recipes/1" className="shadow-text rounded-full border border-transparent hover:border-white px-3 transition-all ease-in-out duration-300">
                    RECIPES
                </Link>
                <Link href="#footer" className="shadow-text rounded-full border border-transparent hover:border-white px-3 transition-all ease-in-out duration-300">
                    ABOUT
                </Link>
            </nav>

            <div className="md:hidden z-50">
                <button onClick={()=>setIsMenuOpen(!isMenuOpen)} className="rounded-full bg-charcoal/50 shadow p-2 -mr-1 text-oldlace">
                    {isMenuOpen ? (
                        <HiXMark className="h-6 w-6" />
                    ) : (
                        <HiBars3 className="h-6 w-6" />
                    )}
                </button>
            </div>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-black/90 z-40 flex flex-col items-center justify-center gap-6 md:hidden animate-fade-in">
                    <Link href="/" className="text-oldlace text-xl font-bold" onClick={() => setIsMenuOpen(false)}>
                        HOME
                    </Link>
                    <Link href="/#overview" className="text-oldlace text-xl font-bold" onClick={() => setIsMenuOpen(false)}>
                        OVERVIEW
                    </Link>
                    <Link href="/recipes/1" className="text-oldlace text-xl font-bold" onClick={() => setIsMenuOpen(false)}>
                        RECIPES
                    </Link>
                    <Link href="#footer" className="text-oldlace text-xl font-bold" onClick={() => setIsMenuOpen(false)}>
                        ABOUT
                    </Link>
                </div>
            )}
        </header>
    );
}