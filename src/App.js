import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { Home } from './pages/Home';
import { Marca } from './components/Marca';
import { VerProdu } from './pages/VerProdu';
import { Cart } from './pages/Cart';
import NavBar from './components/NavBar';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<NavBar/>}> 
            <Route index element={<Home/>}/>
            <Route path={"/marca/:marcas"} element={<Marca/>}/>
            <Route path={"/producto/:producto"} element={<VerProdu/>}/>
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
