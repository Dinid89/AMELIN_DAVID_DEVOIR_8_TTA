const Artisan = require('../models/Artisan')
const Specialite = require('../models/Specialite')
const Categorie = require('../models/Categorie')

// Récupérer tous les artisans
const getAllArtisans = async (req, res) => {
    try {
        const artisans = await Artisan.findAll({
            include: [{
                model: Specialite,
                include: [{ model: Categorie }]
            }]
        })
        res.json(artisans)
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error })
    }
}

// Récupérer un artisan par son id
const getArtisanById = async (req, res) => {
    try {
        const artisan = await Artisan.findByPk(req.params.id, {
            include: [{
                model: Specialite,
                include: [{ model: Categorie }]
            }]
        })
        if (!artisan) {
            return res.status(404).json({ message: 'Artisan non trouvé' })
        }
        res.json(artisan)
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error })
    }
}

// Récupérer les artisans par catégorie
const getArtisansByCategorie = async (req, res) => {
    try {
        const { Op } = require('sequelize')
        const artisans = await Artisan.findAll({
            include: [{
                model: Specialite,
                required: true,
                include: [{
                    model: Categorie,
                    where: { 
                        nom_categorie: {
                            [Op.like]: req.params.categorie
                        }
                    }
                }]
            }]
        })
        res.json(artisans)
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error })
    }
}

// Rechercher des artisans par nom
const searchArtisans = async (req, res) => {
    try {
        const { Op } = require('sequelize')
        const artisans = await Artisan.findAll({
            where: {
                nom_artisan: {
                    [Op.like]: `%${req.query.q}%`
                }
            },
            include: [{
                model: Specialite,
                include: [{ model: Categorie }]
            }]
        })
        res.json(artisans)
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error })
    }
}

// Récupérer le top 3 des artisans
const getTopArtisans = async (req, res) => {
    try {
        const artisans = await Artisan.findAll({
            where: { top_artisan: 1 },
            include: [{
                model: Specialite,
                include: [{ model: Categorie }]
            }]
        })
        res.json(artisans)
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error })
    }
}

module.exports = { 
    getAllArtisans, 
    getArtisanById, 
    getArtisansByCategorie,
    searchArtisans,
    getTopArtisans
}