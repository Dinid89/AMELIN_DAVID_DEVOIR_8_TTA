import axios from 'axios'

// URL de base de l'API
const API = axios.create({
    baseURL: 'http://localhost:3000/api'
})

// Récupérer tous les artisans
export const getAllArtisans = () => API.get('/artisans')

// Récupérer un artisan par son id
export const getArtisanById = (id) => API.get(`/artisans/${id}`)

// Récupérer les artisans par catégorie
export const getArtisansByCategorie = (categorie) => API.get(`/artisans/categorie/${categorie}`)

// Rechercher des artisans par nom
export const searchArtisans = (q) => API.get(`/artisans/search?q=${q}`)

// Récupérer le top 3 des artisans
export const getTopArtisans = () => API.get('/artisans/top')

// Récupérer toutes les catégories
export const getAllCategories = () => API.get('/categories')