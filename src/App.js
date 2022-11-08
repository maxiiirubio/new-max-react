import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { Home } from './pages/Home';
import { Marca } from './components/Marca';
import { VerProdu } from './pages/VerProdu';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/marca/:marcas"} element={<Marca/>}/>
          <Route path={"/producto/:producto"} element={<VerProdu/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
