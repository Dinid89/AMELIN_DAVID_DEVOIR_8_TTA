import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAllCategories } from '../../services/api'
import './Header.scss'

function Header() {
  const [categories, setCategories] = useState([])
  const [recherche, setRecherche] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    getAllCategories()
      .then((response) => setCategories(response.data))
      .catch((err) => console.error('Erreur chargement catégories', err))
  }, [])

  const handleRecherche = (e) => {
    e.preventDefault()
    if (recherche.trim()) {
      navigate(`/recherche?q=${recherche}`)
    }
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">

          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src="/Logo.png" alt="Artisans Auvergne-Rhône-Alpes" height="200" />
          </Link>

          {/* Burger mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu + Recherche */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div className="rightMenu ms-auto">

              {/* Barre de recherche */}
              <form className="searchBar d-flex" role="search" onSubmit={handleRecherche}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Rechercher un artisan..."
                  aria-label="Rechercher un artisan"
                  value={recherche}
                  onChange={(e) => setRecherche(e.target.value)}
                />
                <button className="btn btn-primary" type="submit">
                  Rechercher
                </button>
              </form>

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {categories.map((cat) => (
                  <li className="nav-item" key={cat.id_categorie}>
                    <Link className="nav-link" to={`/categorie/${cat.nom_categorie}`}>
                      {cat.nom_categorie}
                    </Link>
                  </li>
                ))}
              </ul>

            </div>
          </div>

        </div>
      </nav>
    </header>
  )
}

export default Header