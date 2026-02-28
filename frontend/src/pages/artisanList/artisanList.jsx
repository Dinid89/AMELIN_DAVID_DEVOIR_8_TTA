import { useParams, useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getArtisansByCategorie, searchArtisans } from '../../services/api'
import ArtisanCard from '../../components/ArtisanCard/ArtisanCard'
import './ArtisanList.scss'

function ArtisanList() {
  const { categorie } = useParams()
  const [searchParams] = useSearchParams()
  const recherche = searchParams.get('q')

  const [artisans, setArtisans] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (recherche) {
      searchArtisans(recherche)
        .then((response) => {
          setArtisans(response.data)
          setLoading(false)
        })
        .catch(() => {
          setError('Erreur lors de la recherche')
          setLoading(false)
        })
    } else if (categorie) {
      getArtisansByCategorie(categorie)
        .then((response) => {
          setArtisans(response.data)
          setLoading(false)
        })
        .catch(() => {
          setError('Erreur lors du chargement')
          setLoading(false)
        })
    }
  }, [categorie, recherche])

  return (
    <div className="artisan-list">
      <div className="container">

        {/* Titre de la page */}
        <h1 className="artisan-list__titre">
          {recherche ? `Résultats pour "${recherche}"` : `Tous les artisans : ${categorie}`}
        </h1>

        {loading && <p>Chargement...</p>}
        {error && <p className="text-danger">{error}</p>}

        {/* Résultats */}
        {!loading && artisans.length === 0 ? (
          <p className="artisan-list__vide">Aucun artisan trouvé.</p>
        ) : (
          <div className="artisanList row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {artisans.map((artisan) => (
              <div className="col" key={artisan.id_artisan}>
                <ArtisanCard artisan={artisan} />
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}

export default ArtisanList