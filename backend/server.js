const express = require('express')
const cors = require('cors')
require('dotenv').config()

const artisansRoutes = require('./src/routes/artisans')
const categoriesRoutes = require('./src/routes/categories')

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/artisans', artisansRoutes)
app.use('/api/categories', categoriesRoutes)

// Route de test
app.get('/', (req, res) => {
    res.json({ message: '✅ API Trouve Ton Artisan fonctionne !' })
})

// Lancement du serveur
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`✅ Serveur lancé sur http://localhost:${PORT}`)
})