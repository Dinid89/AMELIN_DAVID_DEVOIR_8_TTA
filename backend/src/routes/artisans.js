const express = require('express')
const router = express.Router()
const { 
    getAllArtisans, 
    getArtisanById,
    getArtisansByCategorie,
    searchArtisans,
    getTopArtisans
} = require('../controllers/artisansController')

// GET /api/artisans
router.get('/', getAllArtisans)

// GET /api/artisans/top
router.get('/top', getTopArtisans)

// GET /api/artisans/search?q=...
router.get('/search', searchArtisans)

// GET /api/artisans/categorie/:categorie
router.get('/categorie/:categorie', getArtisansByCategorie)

// GET /api/artisans/:id
router.get('/:id', getArtisanById)

module.exports = router