import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";

export default function FooterBar() {
    return (
        <footer id='footer' className="flex flex-row items-center justify-center justify-between p-5 bg-eerieblack text-oldlace">
            <p>&copy; {new Date().getFullYear()} Bitefuls by Jake Clarin</p>
            <Link href="#navbar" className="flex flex-row justify-center items-center border text-sm border-oldlace rounded-full py-1 px-4 hover:bg-oldlace hover:text-eerieblack">
                To top <FaArrowUp className="ml-2"/>
            </Link>
        </footer>
    );
}