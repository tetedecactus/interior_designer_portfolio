import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Option1 from './Option1';
import Option2 from './Option2';


function App() {
  return (
      <Router>
    <div className="App">
      <Routes>
        <Route path="/about" element={<Option1 />} />
        <Route path="/portfolio" element={<Option2 />} />
      </Routes>
      
      {/* <div className="container pb-11">
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
      </div> */}
    </div>
          </Router>
  );
}

export default App;
