// Importation de Sequelize et dotenv
const { Sequelize } = require('sequelize')
require('dotenv').config()

// Connexion à la base de données MySQL
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        logging: false // Désactive les logs SQL dans la console
    }
)

// Test de la connexion
const testConnexion = async () => {
    try {
        await sequelize.authenticate()
        console.log('✅ Connexion à la base de données réussie')
    } catch (error) {
        console.error('❌ Erreur de connexion à la base de données :', error)
    }
}

testConnexion()

module.exports = sequelize