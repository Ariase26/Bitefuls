import Link from "next/link";

export default function NavigationBar(){
    return (
        <header className="flex flex-row justify-center items-center p-7 gap-11 absolute top-0 left-0 right-0 z-50 text-oldlace">
            <nav className="flex gap-6">
                <Link href="/" className="shadow-text rounded-full border border-transparent hover:border-white px-3 transition-all ease-in-out duration-300">HOME</Link>
                <Link href="/#overview" className="shadow-text rounded-full border border-transparent hover:border-white px-3 transition-all ease-in-out duration-300">OVERVIEW</Link>
            </nav>
                
            <span className="text-3xl shadow-text font-bold">BITEFULS</span>

            <nav className="flex gap-6">
                <Link href="/recipes/1" className="shadow-text rounded-full border border-transparent hover:border-white px-3 transition-all ease-in-out duration-300">RECIPES</Link>
                <Link href="#footer" className="shadow-text rounded-full border border-transparent hover:border-white px-3 transition-all ease-in-out duration-300">ABOUT</Link>
            </nav>
        </header>
    );
}