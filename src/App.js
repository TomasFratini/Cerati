import Audio from './components/audio/Audio';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from './components/Home/NavBar';
import ItemContainer from './components/ContainerItem/ItemContainer';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import Home from './components/Home/Home';
import Footer from './components/Home/Footer';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/imagenes/:imagenId' element={<ItemDetailContainer/>}/>
      <Route path='/categoria/:categoriaId' element={<ItemContainer/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    
  );
}

export default App;
