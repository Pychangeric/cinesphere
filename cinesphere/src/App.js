import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import Sidebar from './components/Sidebar';



function App() {
  return (
    
    <div className="App">
      <Sidebar/>
      <Add/>
      <Home/>
     
    </div>
  );
}

export default App;
