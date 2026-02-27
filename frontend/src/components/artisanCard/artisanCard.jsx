import { Link } from "react-router-dom"
import CategorieBadge from "../CategorieBadge/CategorieBadge"
import "./ArtisanCard.scss"

function ArtisanCard({ artisan }) {
  return (
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">{artisan.nom}</h5>
        <hr />
          <div className="row">
            <div className="col">
            <h6>Catégorie:</h6>  
            <CategorieBadge categorie={artisan.categorie} />
            </div>
            <div className="col">
            <h6>Spécialité:</h6>
            <span className="list-group-item">{artisan.specialite}</span>
            </div>
          </div> <br />
        <img src={artisan.photo} className="card-img-top" alt={artisan.nom} />
      </div>
      
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="d-flex align-items-center">
            <h6 className="mb-0 me-auto">Note :</h6>
            <div className="d-flex align-items-center gap-2">
              <img src="/icons/star.png" alt="Icone étoile" height="20"/>
              {artisan.note}/5
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="d-flex align-items-center">
            <h6 className="mb-0 me-auto">Localisation :</h6>
              <div className="d-flex justify-content-center gap-2">
                <img src="/icons/placeholder.png" alt="Icone plan" height="20"/>
                {artisan.ville}
              </div>
          </div>
        </li>
      </ul>
      
      <div className="card-body">
        <Link to={`/artisan/${artisan.id}`} className="btn btn-custom btn-primary w-30">
          En savoir plus
        </Link>
      
      </div>
    </div>
  )
}

export default ArtisanCard
