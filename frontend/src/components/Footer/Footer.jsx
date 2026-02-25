import { Link } from "react-router-dom"
import "./Footer.scss"

function Footer() {
  return (
    <footer className="bg-$color-primary pt-5">
      <div className="container-fluid">
        <div className="row align-items-start">

          {/* Logo */}
          <div className="col-md-3 mb-4">
            <Link to="/">
              <img src="/Logo.png" alt="Artisans Auvergne-Rhône-Alpes" className="img-fluid" style={{ maxHeight: "150px" }} />
            </Link>
          </div>

          {/* Pages */}
          <div className="col-md-3 mb-4">
            <h5>Pages</h5>
            <ul className="list-unstyled">
              <li><Link className="footerLink" to="/">Accueil</Link></li>
              <li><Link className="footerLink" to="/batiment">Bâtiment</Link></li>
              <li><Link className="footerLink" to="/services">Services</Link></li>
              <li><Link className="footerLink" to="/fabrication">Fabrication</Link></li>
              <li><Link className="footerLink" to="/alimentaire">Alimentaire</Link></li>
            </ul>
          </div>

          {/* Conditions */}
          <div className="col-md-3 mb-4">
            <h5>Conditions</h5>
            <ul className="list-unstyled">
              <li><Link className="footerLink" to="/mentions-legales">Mentions légales</Link></li>
              <li><Link className="footerLink" to="/rgpd">RGPD</Link></li>
              <li><Link className="footerLink" to="/accessibilite">Accessibilité</Link></li>
              <li><Link className="footerLink" to="/cookies">Cookies</Link></li>
            </ul>
          </div>

          {/* Adresse */}
          <div className="col-md-3 mb-4">
            <h5>Adresse</h5>
            <address className="text-black">
              101 Cours de Charlemagne <br />
              CS20033 <br />
              69269 LYON CEDEX 02 <br />
              France <br />
              <a href="tel:+33426734000" className="text-$color-secondary text-decoration-none">
                +33 04 26 73 40 00
              </a>
            </address>
          </div>

        </div>
      </div>

      <div className="droitReserved">
        <small>© {new Date().getFullYear()} - Tous droits réservés</small>
      </div>
    </footer>
  )
}

export default Footer