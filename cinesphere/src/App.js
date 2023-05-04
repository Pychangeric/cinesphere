import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import Sidebar from './components/Sidebar';
import Downloads from './components/Downloads';
import Navbar from './Navbar';
import Delete from './components/Delete';
import Menu from './components/Menu';






function App() {
  return (
    <div className="App">

<Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Menu">Menu</Link>
            </li>
            <li>
              <Link to="/Add">Add</Link>
            </li>
            <li>
              <Link to="/Navbar">Search</Link>
            </li>
          
          </ul>
        </nav>
        <Routes>
        <Route path="/" element={<Home cards={Home} />} />
          <Route path="/Menu" element={<Menu Menu={Menu}/>} />
          <Route path="/Add" element={<Add Add={Add}/>} />
          <Route path="/Navbar" element={<Navbar Navbar={Navbar}/>} />
        </Routes>
      </Router>
      <Home />
    
     
    </div>
  );
}

export default App;