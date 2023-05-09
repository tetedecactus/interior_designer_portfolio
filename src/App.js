import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Option1 from './option1/Option1';
// import Navbar from './Navbar';


function App() {
  return (
      <Router>
        <div className="App">
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Option1 />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
