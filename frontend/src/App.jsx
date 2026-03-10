// Importation du router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importation des pages
import Home from './pages/Home/Home'
import ArtisanList from './pages/ArtisanList/ArtisanList.jsx'
import ArtisanDetail from './pages/ArtisanDetail/ArtisanDetail.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'

// Importation des composants
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// Importation des styles
import './styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          {/* Page d'accueil */}
          <Route path="/" element={<Home />} />

          {/* Recherche */}
          <Route path="/recherche" element={<ArtisanList />} />

          {/* Liste des artisans par catégorie */}
          <Route path="/categorie/:categorie" element={<ArtisanList />} />

          {/* Fiche détaillée d'un artisan */}
          <Route path="/artisan/:id" element={<ArtisanDetail />} />

          {/* Page 404 - toute route non reconnue */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}
//build fix
export default App
