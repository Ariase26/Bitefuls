export default function FooterBar() {
    return (
        <footer id='footer' className="flex flex-col items-center justify-center p-5 bg-eerieblack text-oldlace">
            <div className="text-center">
                <p>&copy; {new Date().getFullYear()} Bitefuls. All rights reserved.</p>
            </div>
        </footer>
    );
}