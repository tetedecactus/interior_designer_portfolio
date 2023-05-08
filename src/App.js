import './App.css';

function App() {
  return (
    <div className="App">
      <header className="nav-bar h-11 flex justify-between text-center items-center justify-center">
        <h2 className="nav-title">Logo</h2>
        <nav className="link">
          <ul className="inline-flex space-x-4">
            <li>about us</li>
            <li>portfolio</li>
            <li>contact</li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <div className="box1">
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
        <div className="box2">
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
        <div className="box3">
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
        <div className="box4">
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

export default App;
