import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="box1">
          <div className="content-wrapper page-1" id="page1">
            <header className="App-header">
              <h1 className="header-title text-[#000] text-center">
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
              <h1 className="header-title text-[#ob240f]">
                Justine Pardiac | Designer Intérieur
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
              <h1 className="header-title text-[#ededed]">
                Justine Pardiac | Designer Intérieur
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
              <h1 className="header-title text-[#f3f3f3]">
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
