import { useParams, Link } from 'react-router-dom'
import artisans from '../../mocks/artisans'
import CategorieBadge from '../../components/CategorieBadge/CategorieBadge'
import './ArtisanDetail.scss'

function ArtisanDetail() {
  const { id } = useParams()
  const artisan = artisans.find((a) => a.id === parseInt(id))

  // Si artisan non trouvé
  if (!artisan) {
    return (
      <div className="container mt-5 text-center">
        <h2>Artisan introuvable</h2>
        <Link to="/" className="btn btn-primary mt-3">Retour à l'accueil</Link>
      </div>
    )
  }

  return (
    
    <div className="artisan-detail container">

      <section className='section-top row row-cols-1 row-cols-md-2 g-4'>
      <div className="col">
      {/* En-tête */}
      <div className="artisan-detail__header row mt-4">
        <div className="col-12 col-md-4 text-center">
          <img src={artisan.photo} alt={artisan.nom} className="artisan-detail__photo" />
        </div>
        <div className="artisanDetail col-12 col-md-8">
          <h1>{artisan.nom}</h1>
          <p><CategorieBadge categorie={artisan.categorie} /></p>
          <p><strong>Spécialité :</strong> {artisan.specialite}</p>
          <p><strong>Adresse :</strong> {artisan.adresse.rue}</p>
          <p><strong>Ville :</strong> {artisan.adresse.ville}</p>
          <p><strong>Note :</strong> ⭐ {artisan.note}/5</p>
          <p><strong>E-mail :</strong> {artisan.email}</p>
          {artisan.siteWeb && (
            <a href={artisan.siteWeb} target="_blank" rel="noopener noreferrer" className="btn btn-custom">
              Voir le site web
            </a>
          )}
        </div>
      </div>

      {/* A propos */}
      <div className="artisan-detail__apropos mt-4">
        <h2>À propos</h2>
        <p>{artisan.apropos || "Aucune description disponible."}</p>
      </div>

      </div>

      <div className='localisation col'>
      {/* Google Maps */}
      <div className="artisan-detail__map mt-4">
        <h2>Localisation</h2>
        <iframe
        title="carte"
        width="100%"
        height="100%"
        style={{border: 0}}
        loading="lazy"
        allowFullScreen
        src={`https://maps.google.com/maps?q=${encodeURIComponent(artisan.adresse.rue + ' ' + artisan.adresse.ville)}&output=embed`}        />
      </div>
      </div>
      </section>

      {/* Formulaire de contact */}
      <div className="artisan-detail__contact mt-4">
        <h2>Contacter : {artisan.nom}</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="nom" className="form-label">Votre nom</label>
            <input type="text" className="form-control" id="nom" placeholder="Votre nom" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Votre email</label>
            <input type="email" className="form-control" id="email" placeholder="Votre email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="objet" className="form-label">Objet</label>
            <input type="text" className="form-control" id="objet" placeholder="Objet de votre message" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Votre message" required></textarea>
          </div>
          <div className='d-flex justify-content-center'>
          <button type="submit" className="btn btn-primary">Envoyer</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default ArtisanDetail