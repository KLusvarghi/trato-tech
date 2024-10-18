import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaPadrao from './components/PaginaPadrao/PaginaPadrao';
import Categoria from '@/pages/Categoria/Categoria';
import Home from '@/pages/Home/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path="categoria/:nomeCategoria" element={<Categoria />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
