function Navbar() {
    return (
        <header className="nav-bar h-14 flex justify-between text-center items-center justify-center">
            <h2 className="nav-title">Logo</h2>
            <nav className="link">
                <ul className="inline-flex space-x-4">
                    <li><a href="/about">about us</a></li>
                    <li><a href="portfolio">portfolio</a></li>
                    <li>contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;