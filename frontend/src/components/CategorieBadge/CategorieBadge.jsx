    import categoriesColors from './categoriesColors'
    import "./CategorieBadge.scss"

    //Composant pour afficher la catégorie d'un artisan sous forme de badge coloré

    function CategorieBadge({ categorie }) {
        return (
            <span className="badge-categorie" style={{backgroundColor: categoriesColors[categorie]}}>
                {categorie}
            </span>
        )
    }

    export default CategorieBadge