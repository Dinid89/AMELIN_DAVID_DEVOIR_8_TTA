const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
require('dotenv').config()

const artisansRoutes = require('./src/routes/artisans')
const categoriesRoutes = require('./src/routes/categories')

const app = express()

// Sécurité des headers HTTP
app.use(helmet())

// Limitation des requêtes : 100 requêtes max par 15 minutes
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: { message: 'veuillez réessayer plus tard.' }
})
app.use(limiter)

// CORS - autorise uniquement le frontend
app.use(cors({
    origin: 'http://localhost:5174'
}))

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