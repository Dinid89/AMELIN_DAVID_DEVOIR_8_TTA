    import categoriesColors from './categoriesColors'
    import "./CategorieBadge.scss"

    function CategorieBadge({ categorie }) {
        return (
            <span className="badge-categorie" style={{backgroundColor: categoriesColors[categorie]}}>
                {categorie}
            </span>
        )
    }

    export default CategorieBadge