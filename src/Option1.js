import './option1.css'

function Option1() {
    return (
        <div className="option1" id="/about">
            <header className="nav-bar h-12 flex justify-between text-center items-center justify-center">
        <h2 className="nav-title">Logo</h2>
        <nav className="link">
          <ul className="inline-flex space-x-4">
            <li><a href="/about">about us</a></li>
            <li><a href="portfolio">portfolio</a></li>
            <li>contact</li>
          </ul>
        </nav>
      </header>
      <div className="container pb-11">
        <div className="box1 mx-11">
          <div className="content-wrapper page-1" id="page1">
            <header className="App-header">
              <h1 className="header-title">
                Justine Pardiac | Designer Intérieur
              </h1>
              <a href="#page2">
                <p>click here! </p>
              </a>
            </header>
          </div>
        </div>
        <div className="box2 mx-11">
          <div className="content-wrapper page-2" id="page2">
            <header className="App-header">
              <h1 className="header-title text-[#fb240f]">
                Designer Intérieur | Justine Pardiac
              </h1>
              <a href="#page3">
                <p>click here! </p>
              </a>
            </header>
          </div>
        </div>
        <div className="box3 mx-11">
          <div className="content-wrapper page-3" id="page3">
            <header className="App-header">
              <h1 className="header-title text-[#24751a]">
                Designer Intérieur | Justine Pardiac
              </h1>
              <a href="#page4">
                <p>click here! </p>
              </a>
            </header>
          </div>
        </div>
        <div className="box4 mx-11">
          <div className="content-wrapper page-4" id="page4">
            <header className="App-header">
              <h1 className="header-title text-[#5240a1]">
                Justine Pardiac | Designer Intérieur
              </h1>
              <a href="#page1">
                <p>click here! </p>
              </a>
            </header>
          </div>
        </div>
      </div>
        </div>
    ); 
}

export default Option1;