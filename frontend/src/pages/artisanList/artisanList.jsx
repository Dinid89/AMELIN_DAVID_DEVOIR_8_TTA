import { useParams, useSearchParams } from 'react-router-dom'
import ArtisanCard from '../../components/ArtisanCard/ArtisanCard'
import artisans from '../../mocks/artisans'
import './ArtisanList.scss'

function ArtisanList() {
  const { categorie } = useParams()
  const [searchParams] = useSearchParams()
  const recherche = searchParams.get('q')

  // Filtrer par catégorie ou par recherche
  const artisansFiltres = artisans.filter((artisan) => {
    if (recherche) {
      return artisan.nom.toLowerCase().includes(recherche.toLowerCase())
    }
    if (categorie) {
      return artisan.categorie.toLowerCase() === categorie.toLowerCase()
    }
    return true
  })

  return (
    <div className="artisan-list">
      <div className="container">

        {/* Titre de la page */}
        <h1 className="artisan-list__titre">
          {recherche ? `Résultats pour "${recherche}"` : categorie}
        </h1>

        {/* Résultats */}
        {artisansFiltres.length === 0 ? (
          <p className="artisan-list__vide">Aucun artisan trouvé.</p>
        ) : (
          <div className="artisanList row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {artisansFiltres.map((artisan) => (
              <div className="col" key={artisan.id}>
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
