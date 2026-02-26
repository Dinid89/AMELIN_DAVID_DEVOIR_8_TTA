import "./Home.scss"

function Home() {
  return (
    <>
    
    <section className="welcome row text-justify">
    <h1>Bienvenue sur notre plateforme</h1>
    <p><strong>Trouve Ton Artisan</strong> est la vitrine digitale des savoir-faire d’Auvergne-Rhône-Alpes.</p>
      <p>Ce site rassemble en un seul endroit tous les artisans de la région, soigneusement classés par catégories de métier : bâtiment, services, fabrication et alimentation.</p>
      <p>En quelques clics, particuliers et professionnels peuvent découvrir des talents locaux, comparer les spécialités et trouver le bon expert près de chez eux.</p>
      <p>Simple, clair et pensé pour valoriser le travail artisanal, <strong>Trouve Ton Artisan</strong> crée un pont direct entre les besoins du quotidien et les mains expertes qui font vivre notre territoire.</p>
    </section>

    <section className="findArtisan">
    <h2>Comment trouver mon artisan ?</h2>
     
    <div className="card-group row row-cols-1 g-3 row-cols-md-2 row-cols-lg-4 g-2">
      
      <div className="col">
      <div className="card">
        <h5 className="card-header">1 - Choisir la catégorie</h5>
          <div className="card-body">
            <p className="card-text">Choisissez la catégorie qui vous convient dans le menu en haut de la page.</p>
          </div>
      </div>
      </div>

      <div className="col">
      <div className="card">
        <h5 className="card-header">2 - Choisir un artisan</h5>
          <div className="card-body">
            <p className="card-text">Choissiez un artisan dans la liste proposée en cliquant sur le bouton "en savoir plus".</p>
          </div>
      </div>
      </div>

      <div className="col">
      <div className="card">
        < h5 className="card-header">3 - Le formulaire</h5>
          <div className="card-body">
            <p className="card-text">Envoyez un message à votre artisan via le formulaire de contact dans sa fiche.</p>
          </div>
      </div>
      </div>

      <div className="col">
      <div className="card">
        <h5 className="card-header">4 - Attendez votre réponse</h5>
          <div className="card-body">
            <p className="card-text">Une réponse de votre artisan vous sera apportée sous 48 heures par mail ou téléphone.</p>
          </div>
      </div>
      </div>

    </div> 
    </section>

    <section className="topArtisan">
    <h2>Le top 3 du moment  </h2>
    </section>
   
   
  </>

  )
}
export default Home