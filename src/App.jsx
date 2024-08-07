import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import CatalogPage from './pages/CatalogPage/CatalogPage.jsx';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
