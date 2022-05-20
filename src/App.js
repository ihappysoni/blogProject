
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./components/Home"
import Bollywood from './components/Bollywood';
import Technology from './components/Technology';
import Travel from './components/Travel'
import Api from './components/Api';

function App() {
  return (
    <Api>

    
    <div className="App">
      <BrowserRouter>
      <Home/>
      <Routes>
        <Route path="/bollywood" element={<Bollywood/>}/>
        <Route path="/technology" element={<Technology/>}/>
        <Route path="/travel" element={<Travel/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </Api>
  );
}

export default App;
