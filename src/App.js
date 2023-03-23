import Audio from './components/audio/Audio';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from './components/Home/NavBar';
import ItemContainer from './components/ContainerItem/ItemContainer';
import ItemDetailContainer from './components/Item/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemContainer/>}/>
      <Route path='/imagenes/:imagenId' element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
