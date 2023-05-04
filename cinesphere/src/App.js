import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import Sidebar from './components/Sidebar';
import Downloads from './components/Downloads';
import Navbar from './Navbar';
//import SearchResults from './SearchResults';





function App() {
  return (
    <div className="App">
    
     <Navbar />
    
      <Add/>
      <Home/>
      <Sidebar/>
      <Add/>
      <Home/>
      <Downloads/>
     
    </div>
  );
}

export default App;