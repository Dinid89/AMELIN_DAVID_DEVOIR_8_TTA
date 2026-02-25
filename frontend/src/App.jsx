// Importation du router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importation des pages
import Home from './pages/Home/Home'
import ArtisanList from './pages/artisanList/ArtisanList'
import ArtisanDetail from './pages/ArtisanDetail/ArtisanDetail'
import Legal from './pages/MentionLegale/MentionLegale'
import NotFound from './pages/NotFound/NotFound'

// Importation des composants
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// Importation des styles
import './styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      {/* Header présent sur toutes les pages */}
      <Header />

      <main>
        <Routes>
          {/* Page d'accueil */}
          <Route path="/" element={<Home />} />

          {/* Liste des artisans par catégorie */}
          <Route path="/categorie/:categorie" element={<ArtisanList />} />

          {/* Fiche détaillée d'un artisan */}
          <Route path="/artisan/:id" element={<ArtisanDetail />} />

          {/* Pages légales */}
          <Route path="/legal/:page" element={<Legal />} />

          {/* Page 404 - toute route non reconnue */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer présent sur toutes les pages */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
