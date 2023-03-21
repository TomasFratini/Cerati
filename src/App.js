import Audio from './components/audio/Audio';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from './components/Home/NavBar';
import ItemContainer from './components/ContainerItem/ItemContainer';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemContainer/>}/>
    </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
