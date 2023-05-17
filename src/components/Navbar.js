import logo from '../asset/img/pardi_design_logo.svg';
import '../style/Navbar.css';

function Navbar() {
  return (
    <header className="nav-bar h-14 mt-4 mx-4">
      <div className=" flex justify-between text-center items-center justify-center">
        <img src={logo} alt="Pardi Design Logo" width={130} />
        <div class="button r" id="button">
          <input type="checkbox" class="checkbox" />
          <div class="knobs"></div>
          <div class="layer"></div>
        </div>
        <nav className="link">
          <ul className="inline-flex space-x-4">
            <li>
              <a className="font-bold uppercase" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="font-bold uppercase" href="portfolio">
                portfolio
              </a>
            </li>
            <li>
              <a className="font-bold uppercase" href="contact">
                contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
