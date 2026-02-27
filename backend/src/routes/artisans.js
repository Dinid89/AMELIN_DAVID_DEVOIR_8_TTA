const express = require('express')
const router = express.Router()
const { getAllArtisans } = require('../controllers/artisansController')

// GET /api/artisans
router.get('/', getAllArtisans)

module.exports = router