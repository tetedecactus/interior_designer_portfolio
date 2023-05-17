import './style/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
