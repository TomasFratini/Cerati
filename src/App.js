import Audio from './components/audio/Audio';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from './components/Home/NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
