const Categorie = require('../models/Categorie')

// Récupérer toutes les catégories
const getAllCategories = async (req, res) => {
    try {
        const categories = await Categorie.findAll()
        res.json(categories)
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error })
    }
}

module.exports = { getAllCategories }